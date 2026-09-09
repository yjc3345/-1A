import { useState } from "react";
import type { FormEvent } from "react";
import type { RewardChoice } from "@/hooks/useGame";

const FORM_URL = "https://readdy.ai/api/form/dagq5qptto0ceqqni2vg";

interface Props {
  onSuccess: (name: string, choice: RewardChoice, penalty?: string) => void;
}

export default function GiftconClaimForm({ onSuccess }: Props) {
  const [choice, setChoice] = useState<RewardChoice>("giftcon");
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const chosen: RewardChoice =
      data.get("choice") === "penalty" ? "penalty" : "giftcon";
    const penalty = String(data.get("penalty") ?? "").trim();

    // 필수값 검증
    if (!name) {
      setFormError("이름을 입력해주세요.");
      return;
    }
    if (chosen === "penalty" && !penalty) {
      setFormError("벌칙 내용을 입력해주세요.");
      return;
    }

    // 스팸 방지(honeypot) 체크
    const honeypot = String(data.get("phone_alt") ?? "").trim();
    if (honeypot !== "") {
      // 봇으로 간주: 정상 성공처럼 처리하되 전송은 하지 않는다
      setStatus("success");
      onSuccess(name, chosen, penalty);
      return;
    }

    // 빈 honeypot 필드와 필요 없는 필드는 전송에서 제외
    data.delete("phone_alt");
    if (chosen !== "penalty") {
      data.delete("penalty");
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        body: new URLSearchParams(data as unknown as Record<string, string>),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const responseText = await res.text();
      let parsed: {
        code?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.meta?.detail ||
        (parsed && "message" in parsed
          ? (parsed as { message?: string }).message
          : undefined) ||
        responseText;

      const spamHit =
        !res.ok ||
        (parsed && parsed.code !== "OK") ||
        (serverMsg && serverMsg.toLowerCase().includes("spam"));

      if (!spamHit && parsed?.code === "OK") {
        setStatus("success");
        onSuccess(name, chosen, penalty);
      } else {
        setFormError(
          serverMsg && serverMsg !== responseText
            ? serverMsg
            : "제출에 실패했어요. 입력 내용을 확인하고 다시 시도해주세요.",
        );
        setStatus("idle");
      }
    } catch {
      setFormError("네트워크 오류로 전송하지 못했어요. 다시 시도해주세요.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    const isPenalty = choice === "penalty";
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500 text-white">
          <i className="ri-check-line text-2xl"></i>
        </div>
        <p className="mt-3 text-base font-bold text-emerald-800">
          {isPenalty ? "벌칙 신청이 접수됐어요!" : "기프트콘 신청이 접수됐어요!"}
        </p>
        <p className="mt-1 text-sm text-emerald-700">
          {isPenalty
            ? "선생님 확인 후 랜덤으로 뽑힌 친구에게 벌칙이 전달돼요."
            : "선생님 확인 후 기프트콘을 드릴게요. 축하해요! 🎉"}
        </p>
      </div>
    );
  }

  return (
    <form
      id="giftcon-claim-form"
      data-readdy-form="dagq5qptto0ceqqni2vg"
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      {/* 본인 이름 */}
      <div>
        <label
          htmlFor="giftcon-name"
          className="mb-1.5 block text-sm font-semibold text-stone-800"
        >
          본인 이름 <span className="text-rose-500">*</span>
        </label>
        <input
          id="giftcon-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="예) 김하늘"
          className="w-full rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-amber-600">
          <span className="w-3.5 h-3.5 flex items-center justify-center">
            <i className="ri-alert-line"></i>
          </span>
          이름을 잘못 쓰면 보상을 받지 못할 수 있어요!
        </p>
      </div>

      {/* 선택: 기프트콘 or 벌칙 */}
      <div>
        <span className="mb-1.5 block text-sm font-semibold text-stone-800">
          무엇을 원하나요? <span className="text-rose-500">*</span>
        </span>
        <div className="grid grid-cols-2 gap-1 rounded-full bg-stone-100 p-1">
          <label
            className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-semibold transition whitespace-nowrap ${
              choice === "giftcon"
                ? "bg-emerald-600 text-white"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <input
              type="radio"
              name="choice"
              value="giftcon"
              checked={choice === "giftcon"}
              onChange={() => setChoice("giftcon")}
              className="sr-only"
            />
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-gift-line"></i>
            </span>
            기프트콘 신청
          </label>
          <label
            className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-semibold transition whitespace-nowrap ${
              choice === "penalty"
                ? "bg-emerald-600 text-white"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <input
              type="radio"
              name="choice"
              value="penalty"
              checked={choice === "penalty"}
              onChange={() => setChoice("penalty")}
              className="sr-only"
            />
            <span className="w-4 h-4 flex items-center justify-center">
              <i className="ri-emotion-sad-line"></i>
            </span>
            벌칙 시키기
          </label>
        </div>
      </div>

      {/* 벌칙 내용 (벌칙 선택 시에만) */}
      {choice === "penalty" && (
        <div>
          <label
            htmlFor="giftcon-penalty"
            className="mb-1.5 block text-sm font-semibold text-stone-800"
          >
            벌칙 내용 <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="giftcon-penalty"
            name="penalty"
            rows={3}
            maxLength={500}
            required
            placeholder="예) 점심시간에 노래 한 곡 부르기"
            className="w-full resize-none rounded-md border border-stone-300 bg-white px-3 py-2.5 text-sm text-stone-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          ></textarea>
          <p className="mt-1 text-right text-xs text-stone-400">500자 이내</p>
          <p className="mt-1 flex items-start gap-1.5 text-xs font-medium text-amber-600">
            <span className="w-3.5 h-3.5 flex items-center justify-center">
              <i className="ri-shuffle-line"></i>
            </span>
            랜덤으로 한 명이 뽑혀 이 벌칙을 받아요. 본인도 뽑힐 수 있어요!
          </p>
        </div>
      )}

      {/* 스팸 방지용 필드 (화면에 보이지 않음) */}
      <div className="gift-honeypot" aria-hidden="true">
        <label htmlFor="phone_alt">전화번호</label>
        <input
          id="phone_alt"
          type="text"
          name="phone_alt"
          autoComplete="off"
          tabIndex={-1}
          readOnly
        />
      </div>

      {formError && (
        <div className="rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">
          {formError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-stone-300 whitespace-nowrap cursor-pointer"
      >
        <span className="w-4 h-4 flex items-center justify-center">
          <i className={choice === "penalty" ? "ri-emotion-sad-line" : "ri-gift-line"}></i>
        </span>
        {status === "sending"
          ? "신청 중..."
          : choice === "penalty"
            ? "벌칙 신청하기"
            : "기프트콘 신청하기"}
      </button>
      <p className="text-center text-xs text-stone-400">
        {choice === "penalty"
          ? "선생님 확인 후 랜덤으로 친구가 정해져요."
          : "선생님 확인 후 기프트콘을 드려요."}
      </p>
    </form>
  );
}