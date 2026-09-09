import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import { useProgress } from "@/hooks/useProgress";
import { useGame } from "@/hooks/useGame";
import { getUnitQuestionCount, getUnitsByPublisher } from "@/mocks/units";
import { useQuizSettings } from "@/hooks/useQuizSettings";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { state, studiedToday } = useProgress();
  const { state: gameState } = useGame();
  const { settings, setUnits, currentPublisher } = useQuizSettings();

  const selectedUnits = settings.unitIds;
  const unitsForPublisher = getUnitsByPublisher(currentPublisher.id);
  const labelOf = (id: string) =>
    unitsForPublisher.find((u) => u.id === id)?.label ?? id;

  const totalSessions = state.history.length;
  const totalCorrect = state.history.reduce((s, h) => s + h.correct, 0);
  const totalAnswered = state.history.reduce((s, h) => s + h.total, 0);
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // 최근 14일 히트맵
  const last14: { date: string; total: number }[] = [];
  const now = new Date();
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const rec = state.history.find((h) => h.date === key);
    last14.push({ date: key, total: rec?.total ?? 0 });
  }

  const toggleUnit = (id: string) => {
    setUnits(
      selectedUnits.includes(id)
        ? selectedUnits.filter((u) => u !== id)
        : [...selectedUnits, id],
    );
  };

  const selectedCount = selectedUnits.reduce(
    (acc, id) => acc + getUnitQuestionCount(id),
    0,
  );

  const allSelected =
    selectedUnits.length === unitsForPublisher.length;

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-8 text-white">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                <i className="ri-fire-fill"></i>
              </div>
              연속 학습 {state.streak}일
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              이거라도 열심히 해줘...<br />부탁이야
            </h1>
            <p className="mt-3 text-sm text-emerald-50 md:text-base">
              {currentPublisher.grade} 교과서 · 매일 꾸준히 풀면 실력이 쌓여요
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={startQuiz}
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 whitespace-nowrap cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-play-fill"></i>
                </div>
                {studiedToday ? "선택 범위 다시 풀기" : "학습 시작하기"}
              </button>
              <Link
                to="/wrong-note"
                className="inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/25 whitespace-nowrap cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-file-list-3-line"></i>
                </div>
                오답노트 ({state.wrongNotes.length})
              </Link>
              <Link
                to="/gacha"
                className="inline-flex items-center gap-2 rounded-md bg-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/25 whitespace-nowrap cursor-pointer"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-coin-line"></i>
                </div>
                호기심 뽑기 ({gameState.coins}코인)
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="pointer-events-none absolute -bottom-16 right-16 h-52 w-52 rounded-full bg-white/10"></div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon="ri-fire-line" tone="orange" label="연속 학습" value={`${state.streak}일`} />
          <StatCard icon="ri-check-double-line" tone="emerald" label="정답률" value={`${accuracy}%`} />
          <StatCard icon="ri-calendar-check-line" tone="amber" label="학습한 날" value={`${totalSessions}일`} />
          <StatCard icon="ri-error-warning-line" tone="rose" label="오답 모음" value={`${state.wrongNotes.length}개`} />
        </section>

        {/* Unit select + heatmap */}
        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Unit selection */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-stone-900">
                  시험 범위 선택
                  <span className="ml-2 text-sm font-medium text-emerald-700">
                    ({currentPublisher.label})
                  </span>
                </h2>
                <p className="mt-1 text-sm text-stone-500">
                  범위를 골라 풀거나, 전체를 한 번에 학습하세요
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 whitespace-nowrap">
                선택 은행 {selectedCount}문제 · 1회 10문제
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {unitsForPublisher.map((u) => {
                const count = getUnitQuestionCount(u.id);
                const active = selectedUnits.includes(u.id);
                return (
                  <button
                    key={u.id}
                    disabled={u.disabled}
                    onClick={() => toggleUnit(u.id)}
                    className={`flex items-center gap-3 rounded-lg border p-4 text-left transition ${
                      active
                        ? "border-emerald-500 bg-emerald-50/60"
                        : "border-stone-200 bg-white hover:border-stone-300"
                    } ${
                      u.disabled
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    }`}
                  >
                    <span
                      className={`flex w-11 h-11 flex-shrink-0 items-center justify-center rounded-md border ${
                        active
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-stone-200 bg-stone-50 text-stone-500"
                      }`}
                    >
                      <i className={active ? "ri-check-line" : "ri-book-open-line"}></i>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-stone-900">
                        {u.label} · {u.title}
                      </span>
                      <span className="block text-xs text-stone-500">
                        {count > 0
                          ? `${count}문제 은행 · 회차당 10문제 랜덤`
                          : "아직 문제 준비 중"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-lg border border-stone-200 bg-stone-50 p-4">
              <div className="text-sm text-stone-600">
                {selectedUnits.length === 0 ? (
                  "범위를 선택해주세요"
                ) : allSelected ? (
                  <span className="font-medium text-emerald-700">
                    전체 범위({selectedUnits.map(labelOf).join(" + ")})
                  </span>
                ) : (
                  <span>
                    선택 범위:{" "}
                    <span className="font-medium text-stone-900">
                      {selectedUnits.map(labelOf).join(" + ")}
                    </span>
                  </span>
                )}
              </div>
              <button
                onClick={startQuiz}
                disabled={selectedCount === 0}
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-stone-300 whitespace-nowrap cursor-pointer"
              >
                이 범위로 학습 시작
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-lg font-bold text-stone-900">최근 14일</h2>
            <p className="mt-1 text-sm text-stone-500">학습한 날이 진하게 표시돼요</p>
            <div className="mt-5 grid grid-cols-7 gap-2">
              {last14.map((d) => (
                <div
                  key={d.date}
                  title={d.date}
                  className={`h-8 rounded-md ${
                    d.total > 0 ? "bg-emerald-500" : "bg-stone-100"
                  }`}
                ></div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-sm bg-stone-100"></span>안 함
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded-sm bg-emerald-500"></span>완료
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: string;
  label: string;
  value: string;
  tone: "orange" | "emerald" | "amber" | "rose";
}) {
  const toneMap: Record<string, string> = {
    orange: "bg-orange-50 text-orange-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
  };
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 flex items-center justify-center rounded-md ${toneMap[tone]}`}>
          <i className={icon}></i>
        </div>
        <div>
          <div className="text-xs font-medium text-stone-500">{label}</div>
          <div className="text-xl font-bold text-stone-900">{value}</div>
        </div>
      </div>
    </div>
  );
}