import { useCallback, useSyncExternalStore } from "react";
import { CURIOSITY_CARDS } from "@/mocks/cards";
import type { CuriosityCard } from "@/mocks/cards";

// 게임 규칙 상수
export const PULL_COST = 1; // 뽑기 1회 코인
export const LEGEND_PROBABILITY = 0.03; // 가장 희귀한 카드(전설) 확률
export const CARD_PROBABILITY = 0.08; // 나머지 카드 합산 확률
export const COIN5_PROBABILITY = 0.1; // 코인 +5 확률
export const COIN1_PROBABILITY = 0.2; // 코인 +1 확률
export const GIFT_TARGET = CURIOSITY_CARDS.length; // 도감 완성(카드 전 종류) 목표
export const PITY_BASE = 50; // 천장 기준값: 확정 보상(천장)을 받을 때마다 50씩 증가

// 확정 보상(천장)을 받은 횟수별 확정 보상 기준
// 0회=50, 1회=100, 2회=150, 3회=200 ... (확정 보상 수령 시마다 +50)
export function pityTargetFor(pityBreaks: number): number {
  return PITY_BASE * (pityBreaks + 1);
}

const STORAGE_KEY = "game_v1";

export type RewardChoice = "giftcon" | "penalty";

export interface GiftClaim {
  name: string;
  choice: RewardChoice;
  penalty?: string;
  date: string;
}

export interface GameState {
  coins: number;
  collected: string[]; // 획득한 카드 id 목록 (중복 없음, 도감)
  claims: GiftClaim[]; // 수령 신청 완료 기록
  pity: number; // 성공(카드) 없이 뽑은 누적 횟수 (천장)
  pityBreaks: number; // 확정 보상(천장 발동)을 받은 누적 횟수 (기준 증가)
}

const initialState: GameState = {
  coins: 0,
  collected: [],
  claims: [],
  pity: 0,
  pityBreaks: 0,
};

export type DrawResult =
  | { ok: true; kind: "success"; card: CuriosityCard; isNew: boolean }
  | { ok: true; kind: "coin"; amount: number }
  | { ok: true; kind: "fail"; message: string }
  | { ok: false; reason: "no-coin" | "ready" };

// 성적(정답수/전체)에 따른 코인 지급: 60점↑=1, 80점↑=2, 만점=3
export function coinsForScore(correct: number, total: number): number {
  if (total <= 0) return 0;
  const pct = correct / total;
  if (pct >= 1) return 3;
  if (pct >= 0.8) return 2;
  if (pct >= 0.6) return 1;
  return 0;
}

// 희귀도 구분: legend = 가장 희귀한 1장(별도 3% 확률)
const LEGEND_CARDS = CURIOSITY_CARDS.filter((c) => c.rarity === "legend");
const NORMAL_CARDS = CURIOSITY_CARDS.filter((c) => c.rarity !== "legend");

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<GameState>;
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

function saveState(state: GameState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

// 뽑기 실패(꽝) 시 나오는 '놀리는(긁는)' 메시지 풀
const FAIL_LINES = [
  "캬캬, 방금 뭐가 스치고 지나갔어요. 아깝다~!",
  "거의 다 왔는데… 또 꽝이에요 ㅋㅋ",
  "오늘 운이 쬐끔 아쉽네요? 다시 도전해보세요!",
  "카드가 도망가버렸어요. 잡으려면 또 한 번!",
  "이번엔 쉬어가는 꽝이에요. 포기하지 마세요!",
  "떼잉~ 뽑기 기계가 슬쩍 속였네요. 한 번 더!",
];

// ────────────────────────────────────────────────────────────
// 모듈 단위 공유 스토어 (싱글턴)
// 모든 컴포넌트(Navbar, 홈, 퀴즈, 가챠 등)가 같은 상태를 실시간으로 공유한다.
// ────────────────────────────────────────────────────────────
let currentState: GameState = loadState();
const listeners = new Set<() => void>();

function getState(): GameState {
  return currentState;
}

function setState(next: GameState) {
  currentState = next;
  saveState(next);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useGame() {
  const state = useSyncExternalStore(subscribe, getState, getState);

  const commit = useCallback((next: GameState) => {
    setState(next);
  }, []);

  const earnCoins = useCallback(
    (amount: number) => {
      if (amount <= 0) return;
      const cur = getState();
      commit({ ...cur, coins: cur.coins + amount });
    },
    [commit],
  );

  const giftReady = state.collected.length >= GIFT_TARGET;

  // 카드 한 장을 도감에 반영 (이미 가진 카드면 중복, isNew=false)
  const grantCard = useCallback(
    (base: GameState, card: CuriosityCard) => {
      const isNew = !base.collected.includes(card.id);
      const nextCollected = isNew
        ? [...base.collected, card.id]
        : base.collected;
      return {
        state: {
          ...base,
          collected: nextCollected,
          pity: 0, // 성공 시 천장 초기화
        },
        card,
        isNew,
      };
    },
    [],
  );

  // 뽑기 확률표: 한 번에 하나만 나온다
  // 가장 희귀한 카드(전설) 3% / 나머지 카드 8% / 코인+5 10% / 코인+1 20% / 꽝 59%
  // 단, 성공 없이 해당 라운드 천장 기준(50→100→150→...) 횟수 연속이면 다음 뽑기는 100% 카드 성공
  const draw = useCallback((): DrawResult => {
    const cur = getState();
    // 도감 완성 후 신청 전에는 뽑기 차단
    if (cur.collected.length >= GIFT_TARGET) {
      return { ok: false, reason: "ready" };
    }
    if (cur.coins < PULL_COST) {
      return { ok: false, reason: "no-coin" };
    }

    const coinsAfter = cur.coins - PULL_COST;
    const pityTarget = pityTargetFor(cur.pityBreaks);

    // 천장: 해당 기준 횟수 연속 성공 없음 → 이번 뽑기 무조건 카드 (전체에서 랜덤)
    if (cur.pity >= pityTarget) {
      const card =
        CURIOSITY_CARDS[Math.floor(Math.random() * CURIOSITY_CARDS.length)];
      const { state: ns, card: c, isNew } = grantCard(
        { ...cur, coins: coinsAfter, pityBreaks: cur.pityBreaks + 1 },
        card,
      );
      setState(ns);
      return { ok: true, kind: "success", card: c, isNew };
    }

    const roll = Math.random();

    // 가장 희귀한 카드 (0% ~ 3%)
    if (roll < LEGEND_PROBABILITY) {
      const card =
        LEGEND_CARDS[Math.floor(Math.random() * LEGEND_CARDS.length)];
      const { state: ns, card: c, isNew } = grantCard(
        { ...cur, coins: coinsAfter },
        card,
      );
      setState(ns);
      return { ok: true, kind: "success", card: c, isNew };
    }
    // 나머지 카드 (3% ~ 11%)
    if (roll < LEGEND_PROBABILITY + CARD_PROBABILITY) {
      const card =
        NORMAL_CARDS[Math.floor(Math.random() * NORMAL_CARDS.length)];
      const { state: ns, card: c, isNew } = grantCard(
        { ...cur, coins: coinsAfter },
        card,
      );
      setState(ns);
      return { ok: true, kind: "success", card: c, isNew };
    }
    // 코인 +5 (11% ~ 21%)
    if (roll < LEGEND_PROBABILITY + CARD_PROBABILITY + COIN5_PROBABILITY) {
      setState({ ...cur, coins: coinsAfter + 5, pity: cur.pity + 1 });
      return { ok: true, kind: "coin", amount: 5 };
    }
    // 코인 +1 (21% ~ 41%)
    if (
      roll <
      LEGEND_PROBABILITY + CARD_PROBABILITY + COIN5_PROBABILITY + COIN1_PROBABILITY
    ) {
      setState({ ...cur, coins: coinsAfter + 1, pity: cur.pity + 1 });
      return { ok: true, kind: "coin", amount: 1 };
    }
    // 꽝 (41% ~ 100%)
    const message =
      FAIL_LINES[Math.floor(Math.random() * FAIL_LINES.length)];
    setState({ ...cur, coins: coinsAfter, pity: cur.pity + 1 });
    return { ok: true, kind: "fail", message };
  }, [grantCard]);

  // 10연차: 한 번에 10번 연속 뽑기. 결과를 배열로 모아서 반환한다.
  // 도중에 도감이 완성되거나 코인이 부족하면 그 시점에서 중단한다.
  const draw10 = useCallback((): DrawResult[] => {
    const results: DrawResult[] = [];
    for (let i = 0; i < 10; i++) {
      const res = draw();
      results.push(res);
      if (!res.ok) break;
    }
    return results;
  }, [draw]);

  const completeClaim = useCallback(
    (name: string, choice: RewardChoice, penalty?: string) => {
      const cur = getState();
      const d = new Date();
      const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(d.getDate()).padStart(2, "0")}`;
      commit({
        ...cur,
        collected: [], // 새 라운드 시작: 도감 초기화
        pity: 0,
        pityBreaks: 0, // 새 라운드 시작: 확정 보상 기준 초기화
        claims: [...cur.claims, { name, choice, penalty, date }],
      });
    },
    [commit],
  );

  const resetAll = useCallback(() => {
    commit({ ...initialState });
  }, [commit]);

  return { state, earnCoins, draw, draw10, completeClaim, resetAll, giftReady };
}