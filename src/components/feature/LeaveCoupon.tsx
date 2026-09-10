import { useEffect, useRef, useState } from "react";

interface Props {
  name: string;
  date: string;
  variant?: "leave" | "weekend-exemption";
}

const CANVAS_W = 600;
const CANVAS_H = 800;
const SCALE = 2;

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, y, y + h, r);
  ctx.arcTo(x, y + h, y, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
): number {
  let line = "";
  let curY = y;
  for (const ch of text) {
    const test = line + ch;
    if (line && ctx.measureText(test).width > maxWidth) {
      ctx.fillText(line, x, curY);
      line = ch;
      curY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, curY);
  return curY;
}

function drawCoupon(
  ctx: CanvasRenderingContext2D,
  data: Props,
) {
  const W = CANVAS_W;
  const H = CANVAS_H;
  const isWeekend = data.variant === "weekend-exemption";
  const font =
    "'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif";

  // 배경 그라데이션
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, isWeekend ? "#f5f3ff" : "#ecfdf5");
  bg.addColorStop(1, "#ffffff");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 장식 원
  ctx.fillStyle = isWeekend ? "rgba(124,58,237,0.08)" : "rgba(16,185,129,0.08)";
  ctx.beginPath();
  ctx.arc(W - 40, 120, 150, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(30, H - 120, 130, 0, Math.PI * 2);
  ctx.fill();

  // 카드
  const cardX = 44;
  const cardY = 44;
  const cardW = W - 88;
  const cardH = H - 88;
  ctx.fillStyle = "#ffffff";
  roundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.fill();
  ctx.strokeStyle = "#e5e7eb";
  ctx.lineWidth = 2;
  roundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.stroke();

  // 헤더
  const headerH = 220;
  ctx.save();
  roundRect(ctx, cardX, cardY, cardW, headerH, 28);
  ctx.clip();
  const head = ctx.createLinearGradient(cardX, 0, cardX + cardW, 0);
  head.addColorStop(0, isWeekend ? "#7c3aed" : "#059669");
  head.addColorStop(1, isWeekend ? "#a78bfa" : "#10b981");
  ctx.fillStyle = head;
  ctx.fillRect(cardX, cardY, cardW, headerH);
  ctx.restore();

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("코인 상점 · 구매 완료", W / 2, cardY + 44);

  ctx.fillStyle = "#ffffff";
  ctx.font = `800 36px ${font}`;
  ctx.fillText(isWeekend ? "주말 보강 면제 쿠폰" : "8시 학원 하원 쿠폰", W / 2, cardY + 96);

  ctx.font = "60px sans-serif";
  ctx.fillText(isWeekend ? "🗓️" : "🎫", W / 2, cardY + 180);

  // 절취선
  const perfY = cardY + headerH;
  ctx.save();
  ctx.setLineDash([8, 8]);
  ctx.strokeStyle = "#d1d5db";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cardX + 24, perfY);
  ctx.lineTo(cardX + cardW - 24, perfY);
  ctx.stroke();
  ctx.restore();

  // 본문
  ctx.textAlign = "left";
  let y = perfY + 56;

  ctx.fillStyle = "#9ca3af";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("학생 이름", cardX + 44, y);
  y += 32;
  ctx.fillStyle = "#111827";
  ctx.font = `800 30px ${font}`;
  y = wrapText(ctx, data.name, cardX + 44, y, cardW - 88, 36) + 54;

  ctx.fillStyle = "#9ca3af";
  ctx.font = `600 15px ${font}`;
  ctx.fillText(isWeekend ? "면제 날짜" : "하원 날짜", cardX + 44, y);
  y += 32;
  ctx.fillStyle = "#111827";
  ctx.font = `800 30px ${font}`;
  ctx.fillText(data.date, cardX + 44, y);
  y += 54;

  // 안내 문구
  ctx.fillStyle = isWeekend ? "#7c3aed" : "#059669";
  ctx.font = `700 18px ${font}`;
  ctx.fillText(isWeekend ? "위 학생은 해당 날짜의 주말 보강을 면제받습니다." : "위 학생은 아래 날짜에 8시 학원을 하원합니다.", cardX + 44, y);
  y += 30;
  ctx.fillStyle = "#6b7280";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("선생님 확인 후 승인해주세요.", cardX + 44, y);

  // 푸터
  ctx.textAlign = "center";
  ctx.fillStyle = "#9ca3af";
  ctx.font = `500 14px ${font}`;
  ctx.fillText(
    "이 쿠폰을 선생님께 보여주거나 카톡으로 보내주세요.",
    W / 2,
    cardY + cardH - 34,
  );
}

export default function LeaveCoupon({ name, date, variant = "leave" }: Props) {
  const isWeekend = variant === "weekend-exemption";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobRef = useRef<Blob | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = CANVAS_W * SCALE;
    canvas.height = CANVAS_H * SCALE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(SCALE, SCALE);

    drawCoupon(ctx, { name, date, variant });
    setImageUrl(canvas.toDataURL("image/png"));
    canvas.toBlob((blob) => {
      blobRef.current = blob;
    }, "image/png");
  }, [name, date, variant]);

  const handleShare = async () => {
    setNotice(null);
    let blob = blobRef.current;
    if (!blob && imageUrl) {
      const res = await fetch(imageUrl);
      blob = await res.blob();
    }
    if (!blob) return;

    const filename = isWeekend ? "weekend-makeup-exemption-coupon.png" : "leave-coupon.png";
    const title = isWeekend ? "주말 보강 면제 쿠폰(고림전용)" : "8시 학원 하원 쿠폰";
    const file = new File([blob], filename, { type: "image/png" });
    const shareData = {
      files: [file],
      title,
      text: `${name} 학생의 ${title} (${date})`,
    };

    if (
      typeof navigator.share === "function" &&
      typeof navigator.canShare === "function" &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error)?.name === "AbortError") return;
        setNotice(
          "공유를 완료하지 못했어요. '이미지 저장'으로 저장해 보내주세요.",
        );
      }
    } else {
      setNotice(
        "이 기기에서는 바로 공유가 안 돼요. '이미지 저장'으로 저장한 뒤 카톡으로 보내주세요.",
      );
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = isWeekend ? "weekend-makeup-exemption-coupon.png" : "leave-coupon.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <canvas ref={canvasRef} className="hidden" />
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${name} 학생의 ${isWeekend ? "주말 보강 면제 쿠폰" : "하원 쿠폰"}`}
          className="mx-auto w-full max-w-sm rounded-lg border border-stone-200"
        />
      ) : (
        <div className="mx-auto h-80 w-full max-w-sm animate-pulse rounded-lg bg-stone-100" />
      )}

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          onClick={handleShare}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-bold text-amber-950 hover:bg-amber-500 whitespace-nowrap cursor-pointer"
        >
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-chat-3-line"></i>
          </span>
          카톡으로 보내기
        </button>
        <button
          onClick={handleDownload}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-stone-100 px-4 py-3 text-sm font-bold text-stone-700 hover:bg-stone-200 whitespace-nowrap cursor-pointer"
        >
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-download-2-line"></i>
          </span>
          이미지 저장
        </button>
      </div>

      {notice && (
        <p className="mt-3 text-center text-xs font-medium text-amber-600">
          {notice}
        </p>
      )}
      <p className="mt-2 text-center text-xs text-stone-400">
        '카톡으로 보내기'를 누르면 공유 창이 떠요. 카카오톡을 선택해 선생님에게
        보내주세요.
      </p>
    </div>
  );
}
