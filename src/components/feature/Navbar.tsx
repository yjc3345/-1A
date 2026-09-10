import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGame } from "@/hooks/useGame";
import { useQuizSettings } from "@/hooks/useQuizSettings";
import { PUBLISHERS } from "@/mocks/units";

const nav = [
  { to: "/", label: "홈", icon: "ri-home-4-line" },
  { to: "/quiz", label: "오늘의 학습", icon: "ri-edit-box-line" },
  { to: "/gacha", label: "호기심 뽑기", icon: "ri-box-3-line" },
  { to: "/store", label: "상점", icon: "ri-store-2-line" },
  { to: "/wrong-note", label: "오답노트", icon: "ri-file-list-3-line" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { state } = useGame();
  const { settings, setPublisher, currentPublisher } = useQuizSettings();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const pickPublisher = (id: string) => {
    setPublisher(id);
    setOpen(false);
    if (pathname !== "/") navigate("/");
  };

  const selectedLabel = currentPublisher.grade;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-md bg-emerald-500 text-white">
            <i className="ri-book-3-line text-lg"></i>
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-stone-900">중1 내신대비</div>
            <div className="text-[11px] text-stone-500">{selectedLabel}</div>
          </div>
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={n.icon}></i>
                  </div>
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* 출판사(교과서) 선택 */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              title="교과서(출판사) 선택"
              className="inline-flex items-center gap-1.5 rounded-md border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-emerald-300 hover:bg-emerald-50 whitespace-nowrap cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-bookmark-line"></i>
              </div>
              {currentPublisher.label}
              <i
                className={`ri-arrow-down-s-line text-xs transition-transform ${open ? "rotate-180" : ""}`}
              ></i>
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-stone-200 bg-white">
                {PUBLISHERS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => pickPublisher(p.id)}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition cursor-pointer ${
                      settings.publisherId === p.id
                        ? "bg-emerald-50 font-semibold text-emerald-700"
                        : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i
                        className={
                          settings.publisherId === p.id
                            ? "ri-check-line"
                            : "ri-book-2-line"
                        }
                      ></i>
                    </div>
                    {p.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/gacha"
            title="내 코인 · 뽑기 가기"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-700 transition hover:bg-amber-100 whitespace-nowrap cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-coin-line"></i>
            </div>
            {state.coins}
          </Link>
        </div>
      </div>
      {/* 모바일용 하단 탭처럼 보이는 서브 네비 */}
      <nav className="flex items-center justify-around border-t border-stone-100 px-2 lg:hidden">
        {nav.map((n) => {
          const active = pathname === n.to;
          return (
            <Link
              key={n.to}
              to={n.to}
              className={`flex items-center gap-1 py-2 text-xs font-medium transition whitespace-nowrap cursor-pointer ${
                active ? "text-emerald-700" : "text-stone-500"
              }`}
            >
              <i className={n.icon}></i>
              {n.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}