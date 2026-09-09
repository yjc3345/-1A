import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import GiftconClaimForm from "@/components/feature/GiftconClaimForm";
import ClaimTicket from "@/components/feature/ClaimTicket";
import {
  useGame,
  PULL_COST,
  GIFT_TARGET,
  pityTargetFor,
  type DrawResult,
  type RewardChoice,
} from "@/hooks/useGame";
import {
  CURIOSITY_CARDS,
  RARITY_META,
} from "@/mocks/cards";
import type { CuriosityCard } from "@/mocks/cards";

type ResultState =
  | { kind: "success"; card: CuriosityCard; isNew: boolean }
  | { kind: "coin"; amount: number }
  | { kind: "fail"; message: string }
  | null;

function Sparkles() {
  const particles = [
    { sx: "0px", sy: "-70px" },
    { sx: "60px", sy: "-40px" },
    { sx: "-60px", sy: "-40px" },
    { sx: "40px", sy: "-60px" },
    { sx: "-40px", sy: "-60px" },
    { sx: "0px", sy: "-80px" },
    { sx: "80px", sy: "-10px" },
    { sx: "-80px", sy: "-10px" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-sparkle absolute text-xl"
          style={{
            ["--sx" as string]: p.sx,
            ["--sy" as string]: p.sy,
            animationDelay: `${i * 0.04}s`,
          }}
        >
          ✦
        </span>
      ))}
    </div>
  );
}

export default function GachaPage() {
  const game = useGame();
  const { state, giftReady } = game;

  const [result, setResult] = useState<ResultState>(null);
  const [animKey, setAnimKey] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [claimed, setClaimed] = useState(false);
  const [lastClaim, setLastClaim] = useState<{
    name: string;
    choice: RewardChoice;
    penalty?: string;
  } | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [multiResults, setMultiResults] = useState<DrawResult[] | null>(null);
  const collectionRef = useRef<HTMLElement>(null);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const progress = Math.min(state.collected.length, GIFT_TARGET);
  const totalCards = CURIOSITY_CARDS.length;
  const pityTarget = pityTargetFor(state.pityBreaks);

  // 10연차 결과 요약
  const successCards = (multiResults ?? []).filter(
    (r): r is Extract<DrawResult, { ok: true; kind: "success" }> =>
      r.ok && r.kind === "success",
  );
  const coinTotal = (multiResults ?? []).reduce(
    (sum, r) => sum + (r.ok && r.kind === "coin" ? r.amount : 0),
    0,
  );
  const failCount = (multiResults ?? []).filter(
    (r) => r.ok && r.kind === "fail",
  ).length;

  const handleDraw = () => {
    if (drawing) return;
    setErrorMsg(null);
    setResult(null);
    setDrawing(true);

    // 뽑는 연출을 잠깐 보여준 뒤 결과 공개
    window.setTimeout(() => {
      setDrawing(false);
      const res: DrawResult = game.draw();
      if (!res.ok) {
        setErrorMsg(
          res.reason === "no-coin"
            ? "코인이 부족해요. 문제를 풀고 60점 이상 맞으면 코인을 받아요!"
            : "카드 12장을 모두 모았어요! 아래에서 기프트콘을 먼저 신청해주세요.",
        );
        setResult(null);
        return;
      }
      if (res.kind === "success") {
        setResult({ kind: "success", card: res.card, isNew: res.isNew });
      } else if (res.kind === "coin") {
        setResult({ kind: "coin", amount: res.amount });
      } else {
        setResult({ kind: "fail", message: res.message });
      }
      setAnimKey((k) => k + 1);
    }, 500);
  };

  const handleDraw10 = () => {
    if (drawing) return;
    setErrorMsg(null);
    setResult(null);
    setMultiResults(null);
    setDrawing(true);
    window.setTimeout(() => {
      setDrawing(false);
      const results = game.draw10();
      setMultiResults(results);
      setAnimKey((k) => k + 1);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">
              호기심 뽑기
            </h1>
            <p className="mt-1 text-sm text-stone-500">
              문제를 풀어 코인을 모으고, 신기한 상식 카드를 뽑아보세요!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-coin-line"></i>
              </div>
              {state.coins} 코인
            </div>
            <button
              onClick={scrollToCollection}
              title="뽑은 카드 보러 가기"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100 whitespace-nowrap cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-star-smile-line"></i>
              </div>
              도감 {progress} / {GIFT_TARGET}
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-arrow-down-line text-xs"></i>
              </div>
            </button>
          </div>
        </div>

        {/* Gacha machine */}
        <section
          className={`relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white md:p-10 ${
            drawing ? "animate-wobble" : ""
          }`}
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="pointer-events-none absolute -bottom-20 left-1/4 h-52 w-52 rounded-full bg-white/10"></div>

          <div className="relative flex flex-col items-center text-center">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-gift-2-line"></i>
              </div>
              뽑기 1회 = {PULL_COST}코인 · 성공 시 신기한 카드 등장!
            </p>

            {/* Result area */}
            <div className="mt-6 flex min-h-[220px] w-full flex-col items-center justify-center">
              {drawing ? (
                <div className="flex flex-col items-center">
                  <div className="animate-wobble w-24 h-24 flex items-center justify-center rounded-full bg-white/15">
                    <i className="ri-loader-4-line text-5xl animate-spin"></i>
                  </div>
                  <p className="mt-4 text-sm text-emerald-50">
                    뽑기 기계가 돌아가고 있어요… 두근두근!
                  </p>
                </div>
              ) : multiResults && multiResults.length > 0 ? (
                <div key={animKey} className="flex w-full flex-col items-center gap-4">
                  <p className="text-sm font-bold text-white">
                    10연차 결과를 확인해보세요!
                  </p>
                  {successCards.length > 0 ? (
                    <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                      {successCards.map((r, i) => (
                        <div
                          key={i}
                          className="relative rounded-xl bg-white/15 p-3 text-center"
                        >
                          {r.isNew && (
                            <span className="absolute -right-1 -top-1 rounded-full bg-rose-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                              NEW
                            </span>
                          )}
                          <div className="text-3xl">{r.card.emoji}</div>
                          <p className="mt-1 text-xs font-bold">{r.card.title}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-emerald-50">
                      카드가 한 장도 안 나왔어요… 아쉽지만 다음 기회에!
                    </p>
                  )}
                  <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-emerald-50">
                    <span className="rounded-full bg-white/15 px-3 py-1">
                      카드 {successCards.length}장
                    </span>
                    {coinTotal > 0 && (
                      <span className="rounded-full bg-amber-400/30 px-3 py-1 text-amber-100">
                        코인 +{coinTotal}
                      </span>
                    )}
                    <span className="rounded-full bg-white/15 px-3 py-1">
                      꽝 {failCount}번
                    </span>
                  </div>
                </div>
              ) : result === null ? (
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/15">
                    <i className="ri-box-3-line text-5xl"></i>
                  </div>
                  <p className="mt-4 text-sm text-emerald-50">
                    {errorMsg ?? "버튼을 눌러 뽑기를 시작해보세요!"}
                  </p>
                </div>
              ) : result.kind === "success" ? (
                <div key={animKey} className="relative">
                  {/* 스파클 파티클 */}
                  <Sparkles />
                  <div className="animate-card-flip flex flex-col items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-6xl">{result.card.emoji}</span>
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${RARITY_META[result.card.rarity].chip}`}
                          >
                            {RARITY_META[result.card.rarity].label}
                          </span>
                          {result.isNew && (
                            <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-xs font-semibold text-white">
                              NEW!
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-2xl font-extrabold">
                          "{result.card.title}"
                        </p>
                        <p className="mt-1 max-w-md text-sm text-emerald-50">
                          {result.card.fact}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-amber-200">
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <i className="ri-star-smile-line"></i>
                      </div>
                      신기한 카드 획득! 도감 {state.collected.length} / {GIFT_TARGET}
                    </p>
                  </div>
                </div>
              ) : result.kind === "coin" ? (
                <div key={animKey} className="animate-float-up flex flex-col items-center">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-amber-400/90 text-white">
                    <i className="ri-coin-line text-5xl"></i>
                  </div>
                  <p className="mt-4 text-2xl font-extrabold text-amber-100">
                    +{result.amount} 코인!
                  </p>
                  <p className="mt-1 text-sm text-emerald-50">
                    꽝은 아니지만 코인을 챙겼어요. 기분 좋게 한 번 더!
                  </p>
                </div>
              ) : (
                <div key={animKey} className="animate-shake flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/15">
                    <i className="ri-emotion-sad-line text-4xl"></i>
                  </div>
                  <p className="mt-4 max-w-sm text-sm text-emerald-50">
                    {result.message}
                  </p>
                </div>
              )}
            </div>

            {/* Draw buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleDraw}
                disabled={giftReady}
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3.5 text-base font-bold text-emerald-700 shadow-sm hover:bg-emerald-50 disabled:cursor-not-allowed disabled:bg-white/60 whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-coin-line"></i>
                </div>
                {giftReady ? "보상 선택하기 ↓" : `뽑기 (${PULL_COST}코인)`}
              </button>

              <button
                onClick={handleDraw10}
                disabled={giftReady || state.coins < PULL_COST * 10}
                className="inline-flex items-center gap-2 rounded-md bg-amber-300 px-8 py-3.5 text-base font-bold text-amber-900 shadow-sm hover:bg-amber-200 disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-stone-400 whitespace-nowrap cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-flashlight-line"></i>
                </div>
                10연차 ({PULL_COST * 10}코인)
              </button>
            </div>

            {/* 천장(확정) 진행도 */}
            {!giftReady && (
              <div className="mt-5 w-full max-w-xs">
                <div className="flex items-center justify-between text-[11px] text-emerald-100">
                  <span className="inline-flex items-center gap-1">
                    <div className="w-3 h-3 flex items-center justify-center">
                      <i className="ri-shield-star-line"></i>
                    </div>
                    확정 보상까지
                  </span>
                  <span>
                    {Math.min(state.pity, pityTarget)} / {pityTarget}회
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-amber-300 transition-all"
                    style={{
                      width: `${Math.min(100, (state.pity / pityTarget) * 100)}%`,
                    }}
                  ></div>
                </div>
                <p className="mt-1 text-center text-[11px] text-emerald-100">
                  {state.pity >= pityTarget
                    ? "이번 뽑기는 무조건 성공이에요!"
                    : `카드 없이 ${pityTarget}번 뽑으면 다음은 100% 성공!`}
                </p>
              </div>
            )}

            {giftReady && (
              <p className="mt-3 text-xs text-emerald-50">
                축하해요! 아래에서 기프트콘을 신청해보세요 🎉
              </p>
            )}
          </div>
        </section>

        {/* Giftcon claim */}
        {giftReady && (
          <section className="mt-6 rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/50 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-rose-500 text-white">
                <i className="ri-gift-fill text-2xl"></i>
              </div>
              <div>
                <h2 className="text-lg font-bold text-stone-900">
                  카드 {GIFT_TARGET}장을 모두 모았어요! 🎉
                </h2>
                <p className="text-sm text-stone-500">
                  기프트콘을 받을지, 친구에게 벌칙을 시킬지 골라주세요.
                </p>
              </div>
            </div>
            <GiftconClaimForm
              onSuccess={(name, choice, penalty) => {
                game.completeClaim(name, choice, penalty);
                setLastClaim({ name, choice, penalty });
                setClaimed(true);
              }}
            />
          </section>
        )}

        {/* 신청 완료 안내 */}
        {claimed && !giftReady && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-emerald-500 text-white">
                <i className="ri-gift-fill text-xl"></i>
              </div>
              <div className="text-sm">
                <p className="font-bold text-emerald-800">
                  신청이 접수됐어요! 🎉
                </p>
                <p className="mt-0.5 text-emerald-700">
                  아래 신청서 이미지를 카톡으로 선생님에게 보내주세요. 도감이
                  초기화되어 새 라운드를 시작할 수 있어요!
                </p>
              </div>
            </div>
            {lastClaim && (
              <ClaimTicket
                name={lastClaim.name}
                choice={lastClaim.choice}
                penalty={lastClaim.penalty}
              />
            )}
          </div>
        )}

        {state.claims.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-stone-200 px-4 py-1.5 text-sm text-stone-600">
            <div className="w-4 h-4 flex items-center justify-center text-amber-500">
              <i className="ri-gift-line"></i>
            </div>
            지금까지 받은 기프트콘 {state.claims.length}회
          </div>
        )}

        {/* Collection */}
        <section ref={collectionRef} className="mt-8 scroll-mt-24">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-stone-900">내가 뽑은 카드</h2>
              <p className="mt-1 text-sm text-stone-500">
                뽑기 성공으로 획득한 신기한 상식 카드가 모여요 · {state.collected.length} / {totalCards}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CURIOSITY_CARDS.map((card) => {
              const owned = state.collected.includes(card.id);
              const meta = RARITY_META[card.rarity];
              return (
                <div
                  key={card.id}
                  title={owned ? card.fact : "아직 미획득 카드"}
                  className={`relative rounded-xl border p-4 transition ${
                    owned
                      ? `border-transparent ring-1 ${meta.ring} bg-gradient-to-br ${meta.grad}`
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        owned ? "bg-white/80" : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {owned ? meta.label : "미획득"}
                    </span>
                    {owned && (
                      <span className="text-lg">{card.emoji}</span>
                    )}
                  </div>
                  {owned ? (
                    <>
                      <p className="mt-3 text-sm font-bold leading-snug text-white">
                        {card.title}
                      </p>
                      <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-white/90">
                        {card.fact}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="mt-2 w-8 h-8 flex items-center justify-center text-stone-300">
                        <i className="ri-lock-line text-2xl"></i>
                      </div>
                      <p className="mt-2 text-xs font-semibold text-stone-400">
                        ? ? ?
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Help */}
        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-base font-bold text-stone-900">어떻게 코인을 얻나요?</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <HelpStep step="1" title="문제 풀고 코인 받기" desc="60점↑=1코인, 80점↑=2코인, 100점(만점)=3코인! 점수가 높을수록 코인이 쏠쏠해요." />
            <HelpStep step="2" title="확정 보상(천장)" desc="카드 없이 50번 뽑으면 다음 뽑기는 100% 카드 성공! 확정 보상을 받을 때마다 기준이 50씩 늘어나요." />
            <HelpStep step="3" title="호기심 카드 & 선물" desc="성공하면 신기한 카드 획득(중복 가능). 카드 12종을 모두 모으면 기프트콘 신청 가능!" />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 whitespace-nowrap cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-edit-box-line"></i>
              </div>
              문제 풀러 가기
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function HelpStep({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
      <div className="flex items-center gap-2">
        <span className="flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
          {step}
        </span>
        <span className="text-sm font-bold text-stone-900">{title}</span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-stone-500">{desc}</p>
    </div>
  );
}