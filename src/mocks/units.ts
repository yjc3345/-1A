// 출판사(교과서) 구분 + 단원별 문제 은행 관리
// 출판사마다 자기만의 단원(과)과 문제 은행을 가진다.
import type { Question } from "./questions";
import { UNIT5_QUESTIONS } from "./bank/unit5";
import { UNIT6_QUESTIONS } from "./bank/unit6";
import { NEUNGRYUL5_QUESTIONS } from "./bank/neungryul5";
import { NEUNGRYUL6_QUESTIONS } from "./bank/neungryul6";

export interface Publisher {
  id: string;
  label: string; // 동아(윤) / 능률(김)
  grade: string; // 헤더·홈에 표시할 학년+출판사 문구
}

export interface Unit {
  id: string;
  label: string; // 단원 이름 (예: 5과)
  title: string; // 주제
  disabled?: boolean;
}

export interface UnitQuestionPack {
  unitId: string;
  questions: Question[];
}

// 출판사 목록
export const PUBLISHERS: Publisher[] = [
  { id: "dong-a", label: "동아(윤정미)", grade: "중1 동아(윤정미)" },
  { id: "neungryul", label: "능률(김기택)", grade: "중1 능률(김기택)" },
];

// 출판사별 단원 목록
export const PUBLISHER_UNITS: Record<string, Unit[]> = {
  "dong-a": [
    { id: "unit5", label: "5과", title: "동아(윤) 5과" },
    { id: "unit6", label: "6과", title: "동아(윤) 6과" },
  ],
  neungryul: [
    { id: "neungryul-unit5", label: "5과", title: "Enjoying Art" },
    { id: "neungryul-unit6", label: "6과", title: "Amazing Korea" },
  ],
};

// 전체 문제 은행 (출판사가 다른 단원끼리 id가 겹치지 않도록 unitId에 출판사를 포함)
export const UNIT_QUESTION_BANK: UnitQuestionPack[] = [
  { unitId: "unit5", questions: UNIT5_QUESTIONS },
  { unitId: "unit6", questions: UNIT6_QUESTIONS },
  { unitId: "neungryul-unit5", questions: NEUNGRYUL5_QUESTIONS },
  { unitId: "neungryul-unit6", questions: NEUNGRYUL6_QUESTIONS },
];

// 특정 출판사의 단원 목록 가져오기
export function getUnitsByPublisher(publisherId: string): Unit[] {
  return PUBLISHER_UNITS[publisherId] ?? [];
}

// 출판사 정보 가져오기
export function getPublisher(publisherId: string): Publisher {
  return PUBLISHERS.find((p) => p.id === publisherId) ?? PUBLISHERS[0];
}

// 기본 선택 단원: 해당 출판사의 활성화된 모든 단원
export function defaultUnitIds(publisherId: string): string[] {
  return getUnitsByPublisher(publisherId)
    .filter((u) => !u.disabled)
    .map((u) => u.id);
}

// (호환용) 기본/전체 단원 목록 — 홈 이전 상태에서 주로 사용
export const UNITS: Unit[] = getUnitsByPublisher("dong-a");

// 단원 id로 해당 단원 은행 문제 목록 가져오기
export function getQuestionsByUnit(unitIds: string[]): Question[] {
  const result: Question[] = [];
  for (const unitId of unitIds) {
    const pack = UNIT_QUESTION_BANK.find((u) => u.unitId === unitId);
    if (pack) result.push(...pack.questions);
  }
  return result;
}

// 지정 단원의 은행 문제 수
export function getUnitQuestionCount(unitId: string): number {
  const pack = UNIT_QUESTION_BANK.find((u) => u.unitId === unitId);
  return pack ? pack.questions.length : 0;
}