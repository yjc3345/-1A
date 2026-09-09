import { Link, Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import {
  TYPE_LABEL,
  isAnswerCorrect,
  getCorrectText,
  getUserAnswerText,
} from "@/mocks/questions";
import type { Question, UserAnswer } from "@/mocks/questions";

interface ResultState {
  questions: Question[];
  answers: UserAnswer[];
  correct: number;
  total: number;
  coinsEarned?: number;
}

export default function ResultPage() {
  const location = useLocation();
  const state = location.state as ResultState | null;

  if (!state) return <Navigate to="/" replace />;

  const { questions, answers, correct, total, coinsEarned } = state;
  const pct = Math.round((correct / total) * 100);

  const message =
    pct === 100
      ? "완벽해요! 오늘도 최고예요"
      : pct >= 80
      ? "훌륭해요! 조금만 더 다져볼까요"
      : pct >= 60
      ? "잘하고 있어요! 오답을 꼭 확인해봐요"
      : "괜찮아요, 반복이 실력이에요";

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Summary */}
        <section className="rounded-2xl border border-stone-200 bg-white p-8 text-center">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <i className="ri-medal-line text-3xl"></i>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-stone-900">
            {correct} / {total} 정답
          </h1>
          <p className="mt-1 text-sm text-stone-500">{message}</p>
          <div className="mx-auto mt-5 h-3 max-w-md overflow-hidden rounded-full bg-stone-200">
            <div
              className="h-full bg-emerald-500"
              style={{ width: `${pct}%` }}
            ></div>
          </div>
          {coinsEarned !== undefined && coinsEarned > 0 && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-coin-line"></i>
              </div>
              +{coinsEarned} 코인 획득!
            </div>
          )}
          {coinsEarned !== undefined && coinsEarned === 0 && (
            <p className="mt-5 text-xs text-stone-400">
              60점 이상이면 코인을 받아요. 다음에 더 노력해봐요!
            </p>
          )}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-5 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-200 whitespace-nowrap cursor-pointer"
            >
              홈으로
            </Link>
            <Link
              to="/wrong-note"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 whitespace-nowrap cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-file-list-3-line"></i>
              </div>
              오답노트 보기
            </Link>
          </div>
        </section>

        {/* Review */}
        <section className="mt-8">
          <h2 className="mb-4 text-lg font-bold text-stone-900">문제별 해설</h2>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const user = answers[i];
              const isCorrect = isAnswerCorrect(q, user);
              return (
                <div
                  key={q.id}
                  className={`rounded-xl border p-5 ${
                    isCorrect
                      ? "border-emerald-200 bg-emerald-50/40"
                      : "border-rose-200 bg-rose-50/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-medium text-stone-600">
                      <span className="rounded-full bg-white px-2 py-0.5 border border-stone-200">
                        Q{i + 1} · {TYPE_LABEL[q.type]}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                        isCorrect
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      <div className="w-3.5 h-3.5 flex items-center justify-center">
                        <i className={isCorrect ? "ri-check-line" : "ri-close-line"}></i>
                      </div>
                      {isCorrect ? "정답" : "오답"}
                    </span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-stone-900 whitespace-pre-line">
                    {q.question}
                  </div>
                  <div className="mt-3 space-y-1.5 text-sm">
                    <div className="text-stone-600">
                      내 답:{" "}
                      <span className={isCorrect ? "text-emerald-700 font-semibold" : "text-rose-700 font-semibold"}>
                        {getUserAnswerText(q, user)}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="text-stone-600">
                        정답:{" "}
                        <span className="font-semibold text-emerald-700">
                          {getCorrectText(q)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-3 rounded-md bg-white p-3 text-sm text-stone-700 border border-stone-200">
                    <span className="mr-1 font-semibold text-stone-900">해설</span>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}