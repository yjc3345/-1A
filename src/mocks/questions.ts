// 중1 동아(윤) 5과 - 샘플 문제 (실제 교과서 내용은 사용자 확인 후 교체 예정)
// 문제 타입: passage(본문) 4개, dialogue(대화문) 2개, grammar(문법) 3개, vocab(어휘) 1개
import { QUESTION_DIFFICULTY } from "./difficulty";

export type QuestionType = "passage" | "dialogue" | "grammar" | "vocab";

// 답안 방식: choice(4지선다 선택) / typing(단답 직접 입력)
export type QuestionMode = "choice" | "typing";

// 난이도: 1=쉬움, 2=보통, 3=도전
export type QuestionDifficulty = 1 | 2 | 3;

// 난이도별 라벨/메타
export const DIFFICULTY_META: Record<
  QuestionDifficulty,
  { label: string; chip: string }
> = {
  1: {
    label: "쉬움",
    chip: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  2: {
    label: "보통",
    chip: "bg-amber-50 text-amber-700 border-amber-200",
  },
  3: {
    label: "도전",
    chip: "bg-rose-50 text-rose-700 border-rose-200",
  },
};

export interface Question {
  id: string;
  type: QuestionType;
  mode?: QuestionMode; // 기본값 choice
  difficulty?: QuestionDifficulty; // 기본: choice=쉬움, typing=도전
  question: string;
  context?: string; // 지문/대화문
  // choice 모드
  choices?: string[];
  answerIndex?: number;
  // typing 모드 (accept에 정답으로 인정하는 문자열 목록)
  accept?: string[];
  explanation: string;
}

// 사용자의 답안: choice면 보기 인덱스(number), typing이면 입력 문자열(string), 미응답 null
export type UserAnswer = number | string | null;

export const TYPE_LABEL: Record<QuestionType, string> = {
  passage: "본문",
  dialogue: "대화문",
  grammar: "문법",
  vocab: "어휘",
};

export const TYPE_ICON: Record<QuestionType, string> = {
  passage: "ri-book-open-line",
  dialogue: "ri-chat-3-line",
  grammar: "ri-quill-pen-line",
  vocab: "ri-translate-2",
};

export function isTyping(q: Question): boolean {
  return q.mode === "typing";
}

// 문제의 난이도 반환
// - 명시된 difficulty가 있으면 그대로
// - 단답(직접 입력)은 '도전'(3)으로 처리 (처음엔 안 나오고 실력 오르면 나옴)
// - 선택형은 기본 '쉬움'(1), difficulty.ts 매핑에 있으면 해당 난이도

export function difficultyOf(q: Question): QuestionDifficulty {
  if (q.difficulty) return q.difficulty;
  if (isTyping(q)) return 3;
  return QUESTION_DIFFICULTY[q.id] ?? 1;
}

// 단답 비교용 정규화: 소문자 + 앞뒤/연속 공백 제거
export function normalizeTyping(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

// typing 정답 여부
export function checkTyping(q: Question, input: string): boolean {
  if (!q.accept || q.accept.length === 0) return false;
  const u = normalizeTyping(input);
  if (!u) return false;
  return q.accept.some((a) => normalizeTyping(a) === u);
}

// 사용자 답안에 대한 정답 여부 (choice/typing 공용)
export function isAnswerCorrect(q: Question, user: UserAnswer): boolean {
  if (isTyping(q)) {
    return typeof user === "string" && checkTyping(q, user);
  }
  return typeof user === "number" && user === q.answerIndex;
}

// 정답을 화면에 보여줄 텍스트로 변환
export function getCorrectText(q: Question): string {
  if (isTyping(q)) return q.accept?.[0] ?? "";
  return q.choices?.[q.answerIndex ?? -1] ?? "";
}

// 사용자 답안을 화면에 보여줄 텍스트로 변환
export function getUserAnswerText(q: Question, user: UserAnswer): string {
  if (user === null || user === undefined) return "미응답";
  if (isTyping(q)) return String(user);
  return q.choices?.[user] ?? "미응답";
}

export const DAILY_QUESTIONS: Question[] = [
  // === 본문 4문제 ===
  {
    id: "p1",
    type: "passage",
    context:
      "Hello, I'm Jinu. I have a new friend. His name is Tom. He is from Canada. He likes soccer and pizza. We are in the same class.",
    question: "글의 내용과 일치하지 않는 것은?",
    choices: [
      "Jinu에게 새 친구가 생겼다.",
      "Tom은 캐나다에서 왔다.",
      "Tom은 축구와 피자를 좋아한다.",
      "Jinu와 Tom은 다른 반이다.",
    ],
    answerIndex: 3,
    explanation: "본문의 마지막 문장 'We are in the same class.'에서 같은 반이라고 했습니다.",
  },
  {
    id: "p2",
    type: "passage",
    context:
      "My family has four members. My father is a doctor. My mother is a teacher. I have a little sister. Her name is Mina.",
    question: "글쓴이의 가족 구성원이 아닌 사람은?",
    choices: ["아버지", "어머니", "여동생", "남동생"],
    answerIndex: 3,
    explanation: "little sister(여동생)은 있지만 남동생은 언급되지 않았습니다.",
  },
  {
    id: "p3",
    type: "passage",
    context:
      "I usually get up at 7 in the morning. I eat breakfast with my family. Then I go to school by bus. School starts at 8:30.",
    question: "글쓴이가 학교에 가는 방법은?",
    choices: ["걸어서", "자전거로", "버스로", "지하철로"],
    answerIndex: 2,
    explanation: "'I go to school by bus.' 라고 나와 있습니다.",
  },
  {
    id: "p4",
    type: "passage",
    context:
      "Sumi loves animals. She has two cats and one dog at home. On weekends, she volunteers at an animal shelter.",
    question: "Sumi에 대한 설명으로 옳은 것은?",
    choices: [
      "동물을 무서워한다.",
      "집에 개 두 마리가 있다.",
      "주말에 동물 보호소에서 봉사한다.",
      "고양이를 키우지 않는다.",
    ],
    answerIndex: 2,
    explanation: "'On weekends, she volunteers at an animal shelter.' 부분에서 확인할 수 있습니다.",
  },

  // === 대화문 2문제 ===
  {
    id: "d1",
    type: "dialogue",
    context: "A: What time is it now?\nB: ______________\nA: Oh, I have to go home.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: [
      "It's Monday.",
      "It's five o'clock.",
      "I'm fine, thanks.",
      "It's rainy today.",
    ],
    answerIndex: 1,
    explanation: "시간을 묻는 질문(What time is it?)에는 시간을 답해야 합니다.",
  },
  {
    id: "d2",
    type: "dialogue",
    context: "A: Can you play the guitar?\nB: ______________ I can play it very well.",
    question: "빈칸에 들어갈 알맞은 응답은?",
    choices: ["No, I can't.", "Yes, I can.", "Yes, I do.", "No, thanks."],
    answerIndex: 1,
    explanation: "뒤 문장에서 잘 친다고 했으므로 긍정 응답 'Yes, I can.'이 알맞습니다.",
  },

  // === 문법 3문제 ===
  {
    id: "g1",
    type: "grammar",
    question: "다음 빈칸에 알맞은 것은?\n\nShe ______ a beautiful voice.",
    choices: ["have", "has", "haves", "having"],
    answerIndex: 1,
    explanation: "주어가 3인칭 단수(She)이므로 has를 사용합니다.",
  },
  {
    id: "g2",
    type: "grammar",
    question: "어법상 어색한 문장은?",
    choices: [
      "I am a student.",
      "He is my friend.",
      "They is happy.",
      "We are in the park.",
    ],
    answerIndex: 2,
    explanation: "They는 복수 주어이므로 are를 써야 합니다. → They are happy.",
  },
  {
    id: "g3",
    type: "grammar",
    question: "다음 문장의 부정문으로 알맞은 것은?\n\nTom likes math.",
    choices: [
      "Tom not likes math.",
      "Tom doesn't likes math.",
      "Tom don't like math.",
      "Tom doesn't like math.",
    ],
    answerIndex: 3,
    explanation:
      "3인칭 단수 현재형 부정문은 'doesn't + 동사원형' 형태로, doesn't like가 됩니다.",
  },

  // === 어휘 1문제 ===
  {
    id: "v1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "friend - 친구",
      "family - 가족",
      "school - 병원",
      "teacher - 선생님",
    ],
    answerIndex: 2,
    explanation: "school은 '학교'입니다. 병원은 hospital 입니다.",
  },
];