import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import { useProgress } from "@/hooks/useProgress";
import {
  TYPE_LABEL,
  TYPE_ICON,
  getUserAnswerText,
  getCorrectText,
  type QuestionType,
} from "@/mocks/questions";

const FILTERS: { key: "all" | QuestionType; label: string }[] = [
  { key: "all", label: "전체" },
  { key: "passage", label: "본문" },
  { key: "dialogue", label: "대화문" },
  { key: "grammar", label: "문법" },
  { key: "vocab", label: "어휘" },
];

export default function WrongNotePage() {
  const { state, removeWrongNote } = useProgress();
  const [filter, setFilter] = useState<"all" | QuestionType>("all");
  const [justReviewed, setJustReviewed] = useState<Set<string>>(new Set());

  const notes = state.wrongNotes.filter(
    (n) => filter === "all" || n.question.type === filter,
  );

  const totalWrong = state.wrongNotes.length;
  const reviewedCount = justReviewed.size;

  // 오답 유형별 비율
  const typeCounts = state.wrongNotes.reduce<Record<string, number>>(
    (acc, n) => {
      acc[n.question.type] = (acc[n.question.type] ?? 0) + 1;
      return acc;
    },
    {},
  );
  const topTypeEntry = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0];

  const handleReview = (id: string, date: string) => {
    setJustReviewed((prev) => new Set(prev).add(`${id}-${date}`));
    removeWrongNote(id, date);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-10">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">오답노트</h1>
            <p className="mt-1 text-sm text-stone-500">
              틀린 문제는 자동으로 여기 모아둘게요 · 총 {state.wrongNotes.length}개
            </p>
          </div>
          <Link
            to="/quiz"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 whitespace-nowrap cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-refresh-line"></i>
            </div>
            다시 풀기
          </Link>
        </div>

        {/* 오답 요약 통계 */}
        {totalWrong > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-xs text-stone-500">총 오답 수</p>
              <p className="mt-1 text-2xl font-extrabold text-stone-900">
                {totalWrong}
                <span className="text-sm font-medium text-stone-400">개</span>
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs text-emerald-700">복습 완료</p>
              <p className="mt-1 text-2xl font-extrabold text-emerald-700">
                {reviewedCount}
                <span className="text-sm font-medium text-emerald-600">개</span>
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-xs text-stone-500">가장 많이 틀린 유형</p>
              <p className="mt-1 text-lg font-bold text-stone-900">
                {topTypeEntry
                  ? TYPE_LABEL[topTypeEntry[0] as QuestionType]
                  : "—"}
                <span className="text-sm font-medium text-stone-400">
                  {" "}
                  {topTypeEntry?.[1] ?? 0}개
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Filter tabs */}
        <div className="mt-6 inline-flex rounded-full bg-white border border-stone-200 px-1 py-1">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition whitespace-nowrap cursor-pointer ${
                filter === f.key
                  ? "bg-emerald-500 text-white"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="mt-6 space-y-4">
          {notes.length === 0 && (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-stone-100 text-stone-400">
                <i className="ri-inbox-line text-2xl"></i>
              </div>
              <p className="mt-3 text-sm text-stone-500">
                아직 오답이 없어요. 오늘의 학습을 시작해볼까요?
              </p>
              <Link
                to="/quiz"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 whitespace-nowrap cursor-pointer"
              >
                학습 시작
              </Link>
            </div>
          )}

          {notes.map((n, idx) => (
            <div
              key={`${n.question.id}-${n.date}-${idx}`}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  <div className="w-3.5 h-3.5 flex items-center justify-center">
                    <i className={TYPE_ICON[n.question.type]}></i>
                  </div>
                  {TYPE_LABEL[n.question.type]}
                </span>
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span>{n.date}</span>
                  <button
                    onClick={() => handleReview(n.question.id, n.date)}
                    className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-emerald-700 hover:bg-emerald-100 whitespace-nowrap cursor-pointer"
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line"></i>
                    </div>
                    복습 완료
                  </button>
                  <button
                    onClick={() => removeWrongNote(n.question.id, n.date)}
                    className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-stone-500 hover:bg-stone-100 hover:text-stone-800 whitespace-nowrap cursor-pointer"
                  >
                    <div className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-delete-bin-line"></i>
                    </div>
                    삭제
                  </button>
                </div>
              </div>

              {n.question.context && (
                <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700 whitespace-pre-line">
                  {n.question.context}
                </div>
              )}

              <div className="mt-4 text-sm font-medium text-stone-900 whitespace-pre-line">
                {n.question.question}
              </div>

              <div className="mt-3 space-y-1.5 text-sm">
                <div className="text-stone-600">
                  내 답:{" "}
                  <span className="font-semibold text-rose-700">
                    {getUserAnswerText(n.question, n.userAnswer)}
                  </span>
                </div>
                <div className="text-stone-600">
                  정답:{" "}
                  <span className="font-semibold text-emerald-700">
                    {getCorrectText(n.question)}
                  </span>
                </div>
              </div>

              <div className="mt-3 rounded-md border border-stone-200 bg-stone-50 p-3 text-sm text-stone-700">
                <span className="mr-1 font-semibold text-stone-900">해설</span>
                {n.question.explanation}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}