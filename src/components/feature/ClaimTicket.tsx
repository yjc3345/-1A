import { useEffect, useRef, useState } from "react";
import type { RewardChoice } from "@/hooks/useGame";

interface Props {
  name: string;
  choice: RewardChoice;
  penalty?: string;
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
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawTicket(
  ctx: CanvasRenderingContext2D,
  data: Props,
  date: string,
) {
  const W = CANVAS_W;
  const H = CANVAS_H;

  // 💡 벌칙 색상 대신 기본 녹색/에메랄드 톤으로 고정
  const primary = "#059669";
  const accent = "#10b981";
  const primaryLight = "#ecfdf5";
  const font =
    "'Pretendard','Noto Sans KR','Apple SD Gothic Neo','Malgun Gothic',sans-serif";

  // 배경
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, primaryLight);
  bg.addColorStop(1, "#ffffff");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // 장식 원
  ctx.fillStyle = "rgba(16,185,129,0.08)";
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
  const headerH = 200;
  ctx.save();
  roundRect(ctx, cardX, cardY, cardW, headerH, 28);
  ctx.clip();
  const head = ctx.createLinearGradient(cardX, 0, cardX + cardW, 0);
  head.addColorStop(0, primary);
  head.addColorStop(1, accent);
  ctx.fillStyle = head;
  ctx.fillRect(cardX, cardY, cardW, headerH);
  ctx.restore();

  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("호기심 뽑기 · 신청 완료", W / 2, cardY + 44);

  // 💡 제목 및 이모지 고정
  ctx.fillStyle = "#ffffff";
  ctx.font = `800 34px ${font}`;
  ctx.fillText("기프트콘 신청서", W / 2, cardY + 92);

  ctx.font = "54px sans-serif";
  ctx.fillText("🎁", W / 2, cardY + 168);

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
  ctx.fillText("본인 이름", cardX + 44, y);
  y += 32;
  ctx.fillStyle = "#111827";
  ctx.font = `800 30px ${font}`;
  ctx.fillText(data.name, cardX + 44, y);
  y += 54;

  ctx.fillStyle = "#9ca3af";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("선택", cardX + 44, y);
  y += 34;
  const label = "기프트콘 신청";
  ctx.font = `700 17px ${font}`;
  const labelW = ctx.measureText(label).width + 40;
  ctx.fillStyle = primaryLight;
  roundRect(ctx, cardX + 44, y - 26, labelW, 36, 18);
  ctx.fill();
  ctx.fillStyle = primary;
  ctx.fillText(label, cardX + 64, y);
  y += 56;

  // 💡 벌칙 텍스트 부분 삭제/비활성화됨

  ctx.fillStyle = "#9ca3af";
  ctx.font = `600 15px ${font}`;
  ctx.fillText("신청 날짜", cardX + 44, y);
  y += 32;
  ctx.fillStyle = "#111827";
  ctx.font = `600 19px ${font}`;
  ctx.fillText(date, cardX + 44, y);

  // 푸터
  ctx.textAlign = "center";
  ctx.fillStyle = "#9ca3af";
  ctx.font = `500 14px ${font}`;
  ctx.fillText(
    "선생님 확인 후 처리돼요 · 이름 확인 꼭 해주세요!",
    W / 2,
    cardY + cardH - 34,
  );
}

export default function ClaimTicket({ name, choice, penalty }: Props) {
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

    const d = new Date();
    const date = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(
      2,
      "0",
    )}.${String(d.getDate()).padStart(2, "0")}`;

    drawTicket(ctx, { name, choice, penalty }, date);
    setImageUrl(canvas.toDataURL("image/png"));
    canvas.toBlob((blob) => {
      blobRef.current = blob;
    }, "image/png");
  }, [name, choice, penalty]);

  const handleShare = async () => {
    setNotice(null);
    let blob = blobRef.current;
    if (!blob && imageUrl) {
      const res = await fetch(imageUrl);
      blob = await res.blob();
    }
    if (!blob) return;

    const file = new File([blob], "claim-ticket.png", { type: "image/png" });
    const shareData = {
      files: [file],
      title: "기프트콘 신청서",
      text: `${name}님의 기프트콘 신청서`,
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
    a.download = "giftcon-claim.png";
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
          alt={`${name}님의 기프트콘 신청서`}
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
