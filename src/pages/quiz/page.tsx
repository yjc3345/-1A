import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import {
  loadQuestions,
  recordRound,
  recordSkill,
} from "@/hooks/useQuizSelection";
import {
  TYPE_LABEL,
  TYPE_ICON,
  isTyping,
} from "@/mocks/questions";
import type { Question, UserAnswer } from "@/mocks/questions";
import { isAnswerCorrect } from "@/mocks/questions";
import { useProgress, type WrongNote } from "@/hooks/useProgress";
import { useGame, coinsForScore } from "@/hooks/useGame";

export default function QuizPage() {
  const navigate = useNavigate();
  const { finishDay, today } = useProgress();
  const { earnCoins, useItem, state: gameState } = useGame();
  const questions = useMemo(() => loadQuestions(), []);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    () => questions.map(() => null),
  );
  // 문제별 힌트 사용 여부
  const [hintShown, setHintShown] = useState<Set<number>>(new Set());
  // 문제별 5050로 제거된 보기 인덱스
  const [eliminated, setEliminated] = useState<Record<number, number[]>>({});

  const q = questions[current];
  const typing = isTyping(q);
  const currentAnswer = answers[current];
  const answered = currentAnswer !== null && currentAnswer !== "";
  const isLast = current === questions.length - 1;
  const progress =
    ((current + (answered ? 1 : 0)) / questions.length) * 100;

  const hintCount = gameState.inventory.hint ?? 0;
  const fiftyCount = gameState.inventory.fiftyFifty ?? 0;
  const skipCount = gameState.inventory.skipTicket ?? 0;

  const choose = (i: number) => {
    const next = [...answers];
    next[current] = i;
    setAnswers(next);
  };

  const typeIn = (value: string) => {
    const next = [...answers];
    next[current] = value;
    setAnswers(next);
  };

  const useHint = () => {
    if (hintCount <= 0 || hintShown.has(current)) return;
    useItem("hint");
    setHintShown((prev) => new Set(prev).add(current));
  };

  const useFiftyFifty = () => {
    if (fiftyCount <= 0 || eliminated[current] || !q.choices) return;
    // 정답은 남기고, 오답 중 2개를 무작위로 제거
    const wrongs = q.choices
      .map((_, i) => i)
      .filter((i) => i !== q.answerIndex);
    const shuffled = [...wrongs].sort(() => Math.random() - 0.5);
    const toRemove = shuffled.slice(0, 2);
    useItem("fiftyFifty");
    setEliminated((prev) => ({ ...prev, [current]: toRemove }));
  };

  const skipQuestion = () => {
    if (skipCount <= 0) return;
    useItem("skipTicket");
    // 이 문제를 정답으로 처리하지 않고 다음으로 넘어감
    const next = [...answers];
    next[current] = "__skipped__" as unknown as UserAnswer;
    setAnswers(next);
    if (isLast) {
      submitWith(next);
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const submit = () => {
    if (!answered) return;
    if (questions.length === 0) return;
    const nextAnswers = [...answers];
    submitWith(nextAnswers);
  };

  const submitWith = (nextAnswers: UserAnswer[]) => {
    let correct = 0;
    const wrongs: WrongNote[] = [];
    questions.forEach((question, i) => {
      const a = nextAnswers[i];
      // 스킵한 문제는 정답/오답 모두 카운트 제외
      if (a === ("__skipped__" as unknown as UserAnswer)) return;
      if (isAnswerCorrect(question, a)) correct++;
      else if (a !== null && a !== "") {
        wrongs.push({ question, userAnswer: a, date: today });
      }
    });

    // 스킵한 문제가 있으면 total에서 제외
    const skippedCount = nextAnswers.filter(
      (a) => a === ("__skipped__" as unknown as UserAnswer),
    ).length;
    const effectiveTotal = questions.length - skippedCount;

    if (isLast) {
      const perfect = effectiveTotal > 0 && correct === effectiveTotal;
      recordRound(questions, perfect);
      recordSkill(correct, effectiveTotal);
      finishDay(correct, effectiveTotal, wrongs);
      const earned = coinsForScore(correct, effectiveTotal);
      earnCoins(earned);
      navigate("/result", {
        state: {
          questions,
          answers: nextAnswers,
          correct,
          total: effectiveTotal,
          coinsEarned: earned,
        },
      });
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const goNext = () => {
    if (!answered) return;
    if (isLast) {
      submit();
    } else {
      setCurrent((c) => c + 1);
    }
  };

  const isSkipped = currentAnswer === ("__skipped__" as unknown as UserAnswer);
  const elimList = eliminated[current] ?? [];
  const hintFirstChar = q.choices?.[q.answerIndex ?? -1]?.[0] ?? "";

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-stone-600">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className={TYPE_ICON[q.type]}></i>
                </div>
                {TYPE_LABEL[q.type]}
              </span>
              <span className="text-stone-500">
                {current + 1} / {questions.length}
              </span>
              {typing && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 whitespace-nowrap">
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-keyboard-line"></i>
                  </div>
                  직접 입력
                </span>
              )}
            </div>
            <button
              onClick={() => navigate("/")}
              className="text-xs text-stone-500 hover:text-stone-800 whitespace-nowrap cursor-pointer"
            >
              그만두기
            </button>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-full bg-emerald-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-2xl border border-stone-200 bg-white p-8">
          {q.context && (
            <div className="mb-5 rounded-lg border border-stone-200 bg-stone-50 p-4 text-sm leading-relaxed text-stone-700 whitespace-pre-line">
              {q.context}
            </div>
          )}
          <h2 className="text-lg font-semibold text-stone-900 whitespace-pre-line md:text-xl">
            {q.question}
          </h2>

          {/* 힌트 표시 */}
          {hintShown.has(current) && !typing && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              정답의 첫 글자: <span className="font-bold">{hintFirstChar}</span>
            </div>
          )}
          {hintShown.has(current) && typing && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-700">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-lightbulb-flash-line"></i>
              </div>
              정답 길이: <span className="font-bold">{(q.accept?.[0] ?? "").length}글자</span>
            </div>
          )}

          {isSkipped ? (
            <div className="mt-6 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm text-sky-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-skip-forward-line"></i>
                </div>
                패스권으로 넘긴 문제예요. 오답노트에 들어가지 않아요.
              </div>
            </div>
          ) : typing ? (
            <div className="mt-6">
              <input
                type="text"
                value={
                  typeof currentAnswer === "string" ? currentAnswer : ""
                }
                onChange={(e) => typeIn(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    goNext();
                  }
                }}
                placeholder="영어로 정답을 입력하세요"
                autoComplete="off"
                spellCheck={false}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <p className="mt-2 text-xs text-stone-400">
                대소문자와 앞뒤 공백은 무시하고 채점해요.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {q.choices?.map((choice, i) => {
                const active = currentAnswer === i;
                const isElim = elimList.includes(i);
                if (isElim) {
                  return (
                    <div
                      key={i}
                      className="flex w-full items-center gap-3 rounded-lg border border-stone-200 bg-stone-50 p-4 opacity-40 line-through"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 bg-white text-xs font-bold text-stone-300">
                        {["①", "②", "③", "④"][i] || i + 1}
                      </span>
                      <span className="text-sm text-stone-400">{choice}</span>
                    </div>
                  );
                }
                return (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left transition cursor-pointer ${
                      active
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold ${
                        active
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-stone-300 bg-white text-stone-500"
                      }`}
                    >
                      {["①", "②", "③", "④"][i] || i + 1}
                    </span>
                    <span className="text-sm text-stone-800">{choice}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 아이템 버튼 영역 */}
          {!isSkipped && (
            <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-100 pt-4">
              <button
                onClick={useHint}
                disabled={hintCount <= 0 || hintShown.has(current)}
                className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap cursor-pointer"
              >
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className="ri-lightbulb-flash-line"></i>
                </div>
                힌트 ({hintCount})
              </button>
              {!typing && (
                <button
                  onClick={useFiftyFifty}
                  disabled={fiftyCount <= 0 || !!eliminated[current]}
                  className="inline-flex items-center gap-1.5 rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap cursor-pointer"
                >
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className="ri-scissors-cut-line"></i>
                  </div>
                  50·50 ({fiftyCount})
                </button>
              )}
              <button
                onClick={skipQuestion}
                disabled={skipCount <= 0}
                className="inline-flex items-center gap-1.5 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap cursor-pointer"
              >
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className="ri-skip-forward-line"></i>
                </div>
                패스 ({skipCount})
              </button>
              <a
                href="/store"
                className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-semibold text-stone-600 transition hover:bg-stone-100 whitespace-nowrap cursor-pointer"
              >
                <div className="w-3.5 h-3.5 flex items-center justify-center">
                  <i className="ri-store-2-line"></i>
                </div>
                상점
              </a>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              onClick={goNext}
              disabled={!answered && !isSkipped}
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-stone-300 whitespace-nowrap cursor-pointer"
            >
              {isLast ? "제출하고 결과 보기" : "다음 문제"}
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
