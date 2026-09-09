import { useCallback, useEffect, useState } from "react";
import type { Question, UserAnswer } from "@/mocks/questions";

const STORAGE_KEY = "study_progress_v1";

export interface WrongNote {
  question: Question;
  userAnswer: UserAnswer;
  date: string; // YYYY-MM-DD
}

export interface DayRecord {
  date: string;
  correct: number;
  total: number;
}

export interface ProgressState {
  streak: number;
  lastStudyDate: string | null;
  history: DayRecord[];
  wrongNotes: WrongNote[];
}

const initialState: ProgressState = {
  streak: 0,
  lastStudyDate: null,
  history: [],
  wrongNotes: [],
};

function todayStr(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as ProgressState;
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

function saveState(state: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(initialState);

  useEffect(() => {
    setState(loadState());
  }, []);

  const finishDay = useCallback(
    (correct: number, total: number, wrongs: WrongNote[]) => {
      setState((prev) => {
        const today = todayStr();
        let newStreak = prev.streak;
        if (prev.lastStudyDate === today) {
          // 오늘 이미 함 - streak 유지
        } else if (prev.lastStudyDate === yesterdayStr()) {
          newStreak = prev.streak + 1;
        } else {
          newStreak = 1;
        }

        const filteredHistory = prev.history.filter((h) => h.date !== today);
        const newHistory = [
          ...filteredHistory,
          { date: today, correct, total },
        ].slice(-30);

        // 오답 노트는 최근 50개까지만
        const mergedWrongs = [...wrongs, ...prev.wrongNotes].slice(0, 50);

        const next: ProgressState = {
          streak: newStreak,
          lastStudyDate: today,
          history: newHistory,
          wrongNotes: mergedWrongs,
        };
        saveState(next);
        return next;
      });
    },
    [],
  );

  const removeWrongNote = useCallback((id: string, date: string) => {
    setState((prev) => {
      const next = {
        ...prev,
        wrongNotes: prev.wrongNotes.filter(
          (w) => !(w.question.id === id && w.date === date),
        ),
      };
      saveState(next);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    saveState(initialState);
    setState(initialState);
  }, []);

  const studiedToday = state.lastStudyDate === todayStr();

  return { state, finishDay, removeWrongNote, resetAll, studiedToday, today: todayStr() };
}