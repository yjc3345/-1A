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
import type { UserAnswer } from "@/mocks/questions";
import { isAnswerCorrect } from "@/mocks/questions";
import { useProgress, type WrongNote } from "@/hooks/useProgress";
import { useGame, coinsForScore } from "@/hooks/useGame";

export default function QuizPage() {
  const navigate = useNavigate();
  const { finishDay, today } = useProgress();
  const { earnCoins } = useGame();
  const questions = useMemo(() => loadQuestions(), []);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>(
    () => questions.map(() => null),
  );

  const q = questions[current];
  const typing = isTyping(q);
  const currentAnswer = answers[current];
  const answered = currentAnswer !== null && currentAnswer !== "";
  const isLast = current === questions.length - 1;
  const progress =
    ((current + (answered ? 1 : 0)) / questions.length) * 100;

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

  const submit = () => {
    if (!answered) return;
    if (questions.length === 0) return;
    const nextAnswers = [...answers];

    let correct = 0;
    const wrongs: WrongNote[] = [];
    questions.forEach((question, i) => {
      const a = nextAnswers[i];
      if (isAnswerCorrect(question, a)) correct++;
      else if (a !== null && a !== "") {
        wrongs.push({ question, userAnswer: a, date: today });
      }
    });

    const perfect = correct === questions.length;

    if (isLast) {
      // 출제 기록 갱신 (만점이면 해당 문제들 사이클 격리)
      recordRound(questions, perfect);
      recordSkill(correct, questions.length);
      finishDay(correct, questions.length, wrongs);
      const earned = coinsForScore(correct, questions.length);
      earnCoins(earned);
      navigate("/result", {
        state: {
          questions,
          answers: nextAnswers,
          correct,
          total: questions.length,
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

          {typing ? (
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

          <div className="mt-8 flex justify-end">
            <button
              onClick={goNext}
              disabled={!answered}
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