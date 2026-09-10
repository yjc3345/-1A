import { useState } from "react";
import type { FormEvent } from "react";
import Navbar from "@/components/feature/Navbar";
import LeaveCoupon from "@/components/feature/LeaveCoupon";
import { useGame } from "@/hooks/useGame";
import { STORE_ITEMS } from "@/mocks/store";

const COUPON_PRICE = 100;

export default function StorePage() {
  const game = useGame();
  const { state, buyItem, addCoins, earnCoins, setCoins } = game as any;

  const [toast, setToast] = useState<{
    msg: string;
    tone: "ok" | "err";
  } | null>(null);
  const [purchased, setPurchased] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  
  // 💡 쿠폰 최종 발급 완료 상태 (발급 완료 시 입력폼 숨김 처리)
  const [isIssued, setIsIssued] = useState(false);

  const showToast = (msg: string, tone: "ok" | "err") => {
    setToast({ msg, tone });
    window.setTimeout(() => setToast(null), 2500);
  };

  const handleBuy = () => {
    if ((state?.coins || 0) < COUPON_PRICE) {
      showToast("코인이 부족해요! 문제를 풀어 코인을 모아주세요.", "err");
      return;
    }
    const res = buyItem("leaveCoupon");
    if (res?.ok) {
      showToast("쿠폰 구매 완료! 아래에서 이름과 날짜를 입력해주세요.", "ok");
      setPurchased(true);
    } else {
      showToast("구매에 실패했어요.", "err");
    }
  };

  // 💡 이름/날짜 입력 후 쿠폰 발급 확정
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    if (!name.trim()) {
      setFormError("이름을 입력해주세요.");
      return;
    }
    if (!date) {
      setFormError("하원 날짜를 선택해주세요.");
      return;
    }
    setIsIssued(true);
    showToast("🎉 하원 쿠폰이 발급되었습니다!", "ok");
  };

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-10">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-stone-900">코인 상점</h1>
            <p className="mt-1 text-sm text-stone-500">
              문제를 풀어 모은 코인으로 유용한 쿠폰을 구매해요!
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-coin-line"></i>
              </div>
              {state?.coins || 0} 코인
            </div>
          </div>
        </div>

        {/* Coupon product card */}
        <section className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-emerald-200/30"></div>
            <div className="pointer-events-none absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-teal-200/20"></div>

            <div className="relative flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm">
                🎫
              </div>
              <h2 className="mt-4 text-xl font-bold text-stone-900">
                8시 학원 하원 쿠폰
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-stone-600">
                100코인으로 구매하면, 이름과 날짜를 적어 하원 쿠폰 이미지를
                만들 수 있어요. 카톡으로 보내거나 저장해서 선생님께
                보여주세요.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex items-center gap-1.5 text-lg font-bold text-stone-800">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-coin-line text-amber-500"></i>
                  </div>
                  {COUPON_PRICE} 코인
                </div>
                {purchased ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-check-line"></i>
                    </div>
                    {isIssued ? "쿠폰 사용/발급 완료" : "구매 완료"}
                  </span>
                ) : (
                  <button
                    onClick={handleBuy}
                    disabled={(state?.coins || 0) < COUPON_PRICE}
                    className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold text-white transition whitespace-nowrap cursor-pointer ${
                      (state?.coins || 0) < COUPON_PRICE
                        ? "cursor-not-allowed bg-stone-300"
                        : "bg-emerald-600 hover:bg-emerald-700"
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-shopping-cart-2-line"></i>
                    </div>
                    {(state?.coins || 0) < COUPON_PRICE ? "코인 부족" : "구매하기"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Name + Date input → Coupon image */}
        {purchased && (
          <section className="mt-8 space-y-6">
            {/* 💡 아직 발급 확정을 안 눌렀을 때만 입력 폼을 보여줍니다 */}
            {!isIssued ? (
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-stone-900">
                  쿠폰 정보 입력
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  이름과 하원 날짜를 적고 발급 완료 버튼을 눌러주세요.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-5 space-y-5"
                  noValidate
                >
                  <div>
                    <label
                      htmlFor="coupon-name"
                      className="mb-1.5 block text-sm font-semibold text-stone-800"
                    >
                      학생 이름 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="coupon-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      autoComplete="name"
                      placeholder="예) 김하늘"
                      className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="coupon-date"
                      className="mb-1.5 block text-sm font-semibold text-stone-800"
                    >
                      하원 날짜 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="coupon-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={todayStr}
                      required
                      className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>

                  {formError && (
                    <div className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
                      {formError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-bold text-white shadow hover:bg-emerald-700 transition cursor-pointer"
                  >
                    🎟️ 이 정보로 쿠폰 최종 발급하기(수정 불가능)
                  </button>
                </form>
              </div>
            ) : (
              /* 💡 발급이 완료된 후 안내 문구 */
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm font-semibold text-emerald-800">
                ✅ 쿠폰 발급이 완료되었습니다. 아래 완성된 쿠폰을 확인 및 공유해 주세요!
              </div>
            )}

            {/* 발급된 최종 쿠폰 카드 표시 */}
            {name.trim() && date && (
              <LeaveCoupon name={name.trim()} date={date} />
            )}
          </section>
        )}

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
