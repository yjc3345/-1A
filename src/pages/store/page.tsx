import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import { useGame } from "@/hooks/useGame";
import { STORE_ITEMS } from "@/mocks/store";
import type { StoreItem } from "@/mocks/store";

const COLOR_MAP: Record<
  string,
  { bg: string; ring: string; text: string; btn: string }
> = {
  amber: {
    bg: "bg-amber-50",
    ring: "ring-amber-200",
    text: "text-amber-700",
    btn: "bg-amber-500 hover:bg-amber-600",
  },
  rose: {
    bg: "bg-rose-50",
    ring: "ring-rose-200",
    text: "text-rose-700",
    btn: "bg-rose-500 hover:bg-rose-600",
  },
  emerald: {
    bg: "bg-emerald-50",
    ring: "ring-emerald-200",
    text: "text-emerald-700",
    btn: "bg-emerald-500 hover:bg-emerald-600",
  },
  sky: {
    bg: "bg-sky-50",
    ring: "ring-sky-200",
    text: "text-sky-700",
    btn: "bg-sky-500 hover:bg-sky-600",
  },
};

export default function StorePage() {
  const game = useGame();
  const { state, buyItem } = game;
  const [toast, setToast] = useState<{
    msg: string;
    tone: "ok" | "err";
  } | null>(null);

  const showToast = (msg: string, tone: "ok" | "err") => {
    setToast({ msg, tone });
    window.setTimeout(() => setToast(null), 2200);
  };

  const handleBuy = (item: StoreItem) => {
    if (state.coins < item.price) {
      showToast("코인이 부족해요! 문제를 풀어 코인을 모아주세요.", "err");
      return;
    }
    const res = buyItem(item.id);
    if (res.ok) {
      showToast(`${item.name} 구매 완료! (${item.price}코인)`, "ok");
    } else {
      showToast("구매에 실패했어요.", "err");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">코인 상점</h1>
            <p className="mt-1 text-sm text-stone-500">
              문제를 풀어 모은 코인으로 유용한 아이템을 구매해요!
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-coin-line"></i>
            </div>
            {state.coins} 코인
          </div>
        </div>

        {/* Items grid */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {STORE_ITEMS.map((item) => {
            const c = COLOR_MAP[item.color] ?? COLOR_MAP["emerald"];
            const owned = state.inventory[item.id] ?? 0;
            const canAfford = state.coins >= item.price;
            return (
              <div
                key={item.id}
                className={`relative rounded-2xl border border-stone-200 bg-white p-6 ring-1 ${c.ring} ${c.bg} transition`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white text-3xl shadow-sm">
                    {item.emoji}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-stone-900">
                        {item.name}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-full bg-white px-2 py-0.5 text-xs font-semibold ${c.text}`}
                      >
                        보유 {owned}개
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-stone-600">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-700">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-coin-line text-amber-500"></i>
                    </div>
                    {item.price} 코인
                  </div>
                  <button
                    onClick={() => handleBuy(item)}
                    disabled={!canAfford}
                    className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold text-white transition whitespace-nowrap cursor-pointer ${
                      c.btn
                    } ${
                      !canAfford
                        ? "cursor-not-allowed bg-stone-300 hover:bg-stone-300"
                        : ""
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-shopping-cart-2-line"></i>
                    </div>
                    {canAfford ? "구매하기" : "코인 부족"}
                  </button>
                </div>
              </div>
            );
          })}
        </section>

        {/* How to earn coins */}
        <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
          <h2 className="text-base font-bold text-stone-900">
            코인은 어떻게 모으나요?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
              <div className="flex items-center gap-2">
                <span className="flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  1
                </span>
                <span className="text-sm font-bold text-stone-900">
                  문제 풀기
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">
                60점↑=1코인, 80점↑=2코인, 100점=3코인! 점수가 높을수록 코인이
                쏠쏠해요.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
              <div className="flex items-center gap-2">
                <span className="flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  2
                </span>
                <span className="text-sm font-bold text-stone-900">
                  뽑기에서 획득
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">
                뽑기에서 꽝이 나와도 코인을 얻을 수 있어요 (+1 또는 +5).
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
              <div className="flex items-center gap-2">
                <span className="flex w-6 h-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white">
                  3
                </span>
                <span className="text-sm font-bold text-stone-900">
                  매일 꾸준히
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-stone-500">
                연속 학습일 수가 늘어나면 실력도, 코인도 자연스럽게 쌓여요.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
          <div
            className={`rounded-lg px-5 py-3 text-sm font-bold text-white shadow-lg ${
              toast.tone === "ok" ? "bg-emerald-600" : "bg-rose-500"
            }`}
          >
            {toast.msg}
          </div>
        </div>
      )}
    </div>
  );
}
