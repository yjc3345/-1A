// 출판사·시험범위 선택을 여러 컴포넌트(Navbar, Home)에서 공유하기 위한 반응형 훅
// localStorage를 단일 진실 공급원으로, 변경 시 커스텀 이벤트로 동기화한다.
import { useCallback, useEffect, useState } from "react";
import {
  loadSelection,
  saveSelection,
  changePublisher,
} from "@/hooks/useQuizSelection";
import { getPublisher, defaultUnitIds } from "@/mocks/units";

const EVENT = "quiz-settings-changed";

export interface QuizSettings {
  publisherId: string;
  unitIds: string[];
}

function read(): QuizSettings {
  const sel = loadSelection();
  return { publisherId: sel.publisherId, unitIds: sel.unitIds };
}

export function useQuizSettings() {
  const [settings, setSettings] = useState<QuizSettings>(() => read());

  useEffect(() => {
    const on = () => setSettings(read());
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);

  const setPublisher = useCallback((publisherId: string) => {
    changePublisher(publisherId);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const setUnits = useCallback((unitIds: string[]) => {
    const current = read();
    saveSelection(current.publisherId, unitIds);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const currentPublisher = getPublisher(settings.publisherId);
  const units = settings.unitIds;

  return { settings, setPublisher, setUnits, currentPublisher, units };
}

export { EVENT };
export type { QuizSettings };
export { defaultUnitIds };