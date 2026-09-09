// 문제 풀이 범위(선택 단원) + 적응형 난이도 출제 관리
// - 누적 정답률이 올라가면 단계별(쉬움→보통→도전)로 어려운 문제가 서서히 열린다.
// - 정답률이 떨어지면 다시 낮은 단계로 내려가 아이에게 부담을 주지 않는다.
// - 매 회차 순서를 섞고, 이번 사이클에서 아직 안 나온 문제를 우선 출제한다.
// - 만점(100%)을 받은 회차 문제는 이번 사이클에서 '마스터'되어 끝까지 다시 안 나온다.
import type { Question, QuestionDifficulty } from "@/mocks/questions";
import { difficultyOf } from "@/mocks/questions";
import { UNIT_QUESTION_BANK, defaultUnitIds } from "@/mocks/units";

export interface QuizSelection {
  publisherId: string;
  unitIds: string[];
}

export const ROUND_SIZE = 10; // 회차당 문제 수

const SELECTION_KEY = "quiz_selection_v1";
const META_KEY = "quiz_selection_meta_v1";
const SKILL_KEY = "quiz_skill_v1";

// ---------- 선택 범위 ----------
export function loadSelection(): QuizSelection {
  try {
    const raw = localStorage.getItem(SELECTION_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<QuizSelection>;
      const publisherId = parsed.publisherId ?? "dong-a";
      const unitIds =
        parsed.unitIds && parsed.unitIds.length > 0
          ? parsed.unitIds
          : defaultUnitIds(publisherId);
      return { publisherId, unitIds };
    }
  } catch {
    // ignore
  }
  return { publisherId: "dong-a", unitIds: defaultUnitIds("dong-a") };
}

export function saveSelection(publisherId: string, unitIds: string[]) {
  try {
    localStorage.setItem(
      SELECTION_KEY,
      JSON.stringify({ publisherId, unitIds: unitIds.length > 0 ? unitIds : defaultUnitIds(publisherId) }),
    );
  } catch {
    // ignore
  }
}

// 출판사 전환: 해당 출판사의 기본 단원으로 초기화
export function changePublisher(publisherId: string) {
  saveSelection(publisherId, defaultUnitIds(publisherId));
}

// ---------- 적응형 난이도 스킬 기록 ----------
interface SkillState {
  correct: number; // 누적 정답 수
  total: number; // 누적 문항 수
}
function emptySkill(): SkillState {
  return { correct: 0, total: 0 };
}
function loadSkill(): SkillState {
  try {
    const raw = localStorage.getItem(SKILL_KEY);
    if (raw) return JSON.parse(raw) as SkillState;
  } catch {
    // ignore
  }
  return emptySkill();
}
function saveSkill(s: SkillState) {
  try {
    localStorage.setItem(SKILL_KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
}

// 누적 정답률(0~1). 아직 푼 게 없으면 0 반환.
export function getAccuracy(): number {
  const s = loadSkill();
  return s.total > 0 ? s.correct / s.total : 0;
}

// 누적 정답률을 반영해 현재 잠금해제된 최대 난이도를 계산한다.
// 90%↑=도전(3), 80%↑=보통(2), 그 미만=쉬움(1) — 정답률이 떨어지면 단계도 내려간다.
export function getAllowedDifficulty(): QuestionDifficulty {
  const acc = getAccuracy();
  if (acc >= 0.9) return 3;
  if (acc >= 0.8) return 2;
  return 1;
}

// 회차 종료 시 정답률 기록 (코인 등은 별도 처리)
export function recordSkill(correct: number, total: number) {
  const s = loadSkill();
  const next = {
    correct: s.correct + Math.max(0, correct),
    total: s.total + Math.max(0, total),
  };
  saveSkill(next);
}

// ---------- 출제 사이클 메타 ----------
interface UnitCycleState {
  cycle: number; // 현재 사이클 번호
  used: string[]; // 이번 사이클에 출제된 문제 id (오래된 순)
  mastered: string[]; // 이번 사이클에서 만점으로 마스터(격리)된 문제 id
}
interface QuizMeta {
  units: Record<string, UnitCycleState>;
}

function emptyMeta(): QuizMeta {
  return { units: {} };
}

function loadMeta(): QuizMeta {
  try {
    const raw = localStorage.getItem(META_KEY);
    if (raw) return JSON.parse(raw) as QuizMeta;
  } catch {
    // ignore
  }
  return emptyMeta();
}

function saveMeta(meta: QuizMeta) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify(meta));
  } catch {
    // ignore
  }
}

function bankOf(unitId: string): Question[] {
  const pack = UNIT_QUESTION_BANK.find((u) => u.unitId === unitId);
  return pack ? pack.questions : [];
}

function unitIdOf(questionId: string): string {
  const pack = UNIT_QUESTION_BANK.find((u) =>
    u.questions.some((q) => q.id === questionId),
  );
  return pack ? pack.unitId : "unit5";
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getUnitState(meta: QuizMeta, unitId: string): UnitCycleState {
  if (!meta.units[unitId]) {
    meta.units[unitId] = { cycle: 0, used: [], mastered: [] };
  }
  return meta.units[unitId];
}

function resetUnitCycle(meta: QuizMeta, unitId: string) {
  const st = getUnitState(meta, unitId);
  st.cycle += 1;
  st.used = [];
  st.mastered = [];
}

// 회차 문제 구성하기 (적응형 난이도 반영)
export function loadQuestions(): Question[] {
  const sel = loadSelection();
  const unitIds = sel.unitIds.length > 0 ? sel.unitIds : ["unit5"];
  const allowed = getAllowedDifficulty();
  const meta = loadMeta();

  // 난이도 단계별로 후보를 좁혀가되, 한 회차(ROUND_SIZE)를 채울 만큼 항상 확보한다.
  let effectiveAllowed: QuestionDifficulty = allowed;
  for (;;) {
    const enough = unitIds.some(
      (uid) =>
        bankOf(uid).filter(
          (q) => difficultyOf(q) <= effectiveAllowed,
        ).length >= ROUND_SIZE,
    );
    if (enough || effectiveAllowed >= 3) break;
    effectiveAllowed = (effectiveAllowed + 1) as QuestionDifficulty;
  }

  // 1) 선택한 단원의 난이도 범위 내 문제만 사용
  const usableByUnit: Record<string, Question[]> = {};
  for (const uid of unitIds) {
    usableByUnit[uid] = bankOf(uid).filter(
      (q) => difficultyOf(q) <= effectiveAllowed,
    );
  }

  // 2) 마스터(만점 격리) 제외
  let totalUsable = 0;
  for (const uid of unitIds) {
    const st = getUnitState(meta, uid);
    usableByUnit[uid] = usableByUnit[uid].filter(
      (q) => !st.mastered.includes(q.id),
    );
    totalUsable += usableByUnit[uid].length;
  }

  // 3) 남은 문제가 한 회차보다 적으면 사이클 리셋 후 재수집
  if (totalUsable < ROUND_SIZE) {
    for (const uid of unitIds) {
      resetUnitCycle(meta, uid);
    }
    totalUsable = 0;
    for (const uid of unitIds) {
      const st = getUnitState(meta, uid);
      usableByUnit[uid] = bankOf(uid).filter(
        (q) => difficultyOf(q) <= effectiveAllowed,
      );
      usableByUnit[uid] = usableByUnit[uid].filter(
        (q) => !st.mastered.includes(q.id),
      );
      totalUsable += usableByUnit[uid].length;
    }
  }

  // 4) 난이도가 낮은 문제(쉬움)가 우선 나오도록 정렬 후, 그 안에서 미출제/오래된 문제 우선
  const neverUsed: Question[] = [];
  const usedEntries: { q: Question; idx: number }[] = [];
  for (const uid of unitIds) {
    const st = getUnitState(meta, uid);
    neverUsed.push(
      ...shuffle(
        usableByUnit[uid]
          .filter((q) => !st.used.includes(q.id))
          .sort((a, b) => difficultyOf(a) - difficultyOf(b)),
      ),
    );
    usableByUnit[uid].forEach((q) => {
      const idx = st.used.indexOf(q.id);
      if (idx >= 0) usedEntries.push({ q, idx });
    });
  }
  usedEntries.sort((a, b) => a.idx - b.idx);
  // 사용 이력은 난이도 오름차순으로 재정렬해 쉬운 문제부터 회전시킨다
  usedEntries.sort(
    (a, b) =>
      difficultyOf(a.q) - difficultyOf(b.q) || a.idx - b.idx,
  );

  const ordered = [...neverUsed, ...usedEntries.map((e) => e.q)];
  const chosen = ordered.slice(0, ROUND_SIZE);

  return shuffle(chosen);
}

// 회차 결과를 기록한다 (만점 여부에 따라 격리/사이클 관리)
export function recordRound(questions: Question[], perfect: boolean) {
  const meta = loadMeta();

  for (const q of questions) {
    const uid = unitIdOf(q.id);
    const st = getUnitState(meta, uid);
    if (!st.used.includes(q.id)) st.used.push(q.id);
    if (perfect && !st.mastered.includes(q.id)) st.mastered.push(q.id);
  }

  if (perfect) {
    const seen = new Set(questions.map((q) => unitIdOf(q.id)));
    for (const uid of seen) {
      const st = getUnitState(meta, uid);
      if (bankOf(uid).length - st.mastered.length < ROUND_SIZE) {
        resetUnitCycle(meta, uid);
      }
    }
  }

  saveMeta(meta);
}