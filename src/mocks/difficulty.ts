// 문제별 난이도 분류 (선택형만 명시, 단답형은 questions.difficultyOf에서 자동으로 '도전')
// 1=쉬움(기본 독해·단순 어휘·기본 채우기) / 2=보통(변형·오답찾기-기본·문법 응용) / 3=도전(어법 판별·to부정사·that·추리)
// difficultyOf 기본값은 '쉬움(1)'이므로 여기엔 2 또는 3인 문제만 나열한다.
import type { QuestionDifficulty } from "./questions";

export const QUESTION_DIFFICULTY: Record<string, QuestionDifficulty> = {
  // ===================== 5과 =====================
  // 보통(2): 진술 추론·추리 기본·간단 문법 응용
  "unit5-p3": 2, // 진술로 알 수 있는 것(추론)
  "unit5-p4": 2, // 범인 특징 추리
  "unit5-a2": 2, // 옳지 않은 것 고르기
  "unit5-g4": 2, // heavier(변형)
  "unit5-g5": 2, // 최상급(the tallest)
  "unit5-ga1": 2, // must not / don't have to 구분
  "unit5-da1": 2, // Do I have to? / 의무 묻기
  "unit5-d1": 2, // don't have to 응용
  "unit5-v1": 2, // 어휘 오짝짓기
  "unit5-va1": 2, // 어휘 오짝짓기(fell)
  // 도전(3): 어법 판별·추리·고난도 독해
  "unit5-a1": 3, // 휠체어 앞에 섰다는 추리
  "unit5-g3": 3, // 어법상 틀린 문장
  "unit5-g6": 3, // 어법상 옳은 문장
  "unit5-hf1": 3, // 고난도 어법: 비교급 taller
  "unit5-hf2": 3, // 고난도 어법: 최상급 smallest
  "unit5-hf3": 3, // 고난도 어법: 과거형 fell

  // 동아5.pdf 추가 선택 문항 (난이도 1은 기본값)
  "donga5-pdf-s07-q08": 2,
  "donga5-pdf-s08-q09": 2,
  "donga5-pdf-s08-q10": 3,
  "donga5-pdf-s08-q11": 3,
  "donga5-pdf-s08-q13": 2,
  "donga5-pdf-s08-q14": 2,
  "donga5-pdf-s16-q04": 2,
  "donga5-pdf-s17-q01": 2,
  "donga5-pdf-s17-q04": 2,
  "donga5-pdf-s17-q05": 2,
  "donga5-pdf-s18-q08": 3,
  "donga5-pdf-s18-q10": 2,
  "donga5-pdf-s18-q13": 3,
  "donga5-pdf-s27-q01": 2,
  "donga5-pdf-s27-q05": 2,
  "donga5-pdf-s27-q06": 2,
  "donga5-pdf-s27-q07": 2,
  "donga5-pdf-s28-q10": 3,
  "donga5-pdf-s28-q11": 3,
  "donga5-pdf-s28-q13": 2,
  "donga5-pdf-s39-q03": 2,
  "donga5-pdf-s39-q05": 3,
  "donga5-pdf-s39-q06": 2,
  "donga5-pdf-s40-q09": 2,
  "donga5-pdf-s40-q11": 3,
  "donga5-pdf-s40-q12": 2,
  "donga5-pdf-s40-q15": 2,
  "donga5-pdf-s42-q01": 3,
  "donga5-pdf-s42-q05": 2,
  "donga5-pdf-s42-q08": 2,
  "donga5-pdf-s43-q04": 2,
  "donga5-pdf-s44-q08": 2,
  "donga5-pdf-s45-q16": 3,
  "donga5-pdf-s45-q18": 3,
  "donga5-pdf-s46-q22": 2,
  "donga5-pdf-s46-q25": 2,
  "donga5-pdf-s50-q23": 3,
  "donga5-pdf-s51-q04": 2,
  "donga5-pdf-s52-q09": 2,
  "donga5-pdf-s52-q11": 3,
  "donga5-pdf-s54-q25": 3,
  "donga5-pdf-s55-q04": 2,
  "donga5-pdf-s56-q08": 3,
  "donga5-pdf-s57-q18": 3,
  "donga5-pdf-s64-q05": 2,
  "donga5-pdf-s64-q06": 2,
  "donga5-pdf-s65-q09": 3,
  "donga5-pdf-s65-q12": 2,
  "donga5-pdf-s65-q13": 3,
  "donga5-pdf-s67-q20": 3,
  "donga5-pdf-s68-q23": 3,

  // ===================== 6과 =====================
  // 보통(2)
  "unit6-p4": 2, // 옳지 않은 것 고르기
  "unit6-g7": 2, // my dream is to travel(보어)
  "unit6-ga2": 2, // think that + 절
  "unit6-v1": 2, // 어휘 오짝짓기(reduce)
  "unit6-va1": 2, // 어휘 오짝짓기(produce)
  // 도전(3): 어법·to부정사 용법·that 용법·어법 판별
  "unit6-g1": 3, // to save 용법 구분
  "unit6-g2": 3, // that 용법 판단
  "unit6-g3": 3, // 어법상 틀린 문장
  "unit6-g5": 3, // that 접속사 고르기
  "unit6-g6": 3, // 어법상 옳은 문장
  "unit6-ga1": 3, // to부정사 보어 용법
  "unit6-ga3": 3, // that 접속사 구분
  "unit6-ga4": 3, // to부정사 주어 용법
  "unit6-hf1": 3, // 고난도 어법: want + to부정사
  "unit6-hf2": 3, // 고난도 어법: 접속사 that
  "unit6-hf3": 3, // 고난도 어법: 목적격 대명사 them

  // ===================== 능률(김) 5과 =====================
  // 보통(2)
  "neungryul-unit5-p3": 2, // 셀피 찍는 이유 추론
  "neungryul-unit5-p4": 2, // 렘브란트 옳지 않은 것
  "neungryul-unit5-p5": 2, // 셀피·자화상 차이
  "neungryul-unit5-p7": 2, // 반 고흐 화풍 이해
  "neungryul-unit5-a3": 2, // 자화상이 보여주는 것
  "neungryul-unit5-d1": 2, // I agree 응용
  "neungryul-unit5-d2": 2, // 동의 표현
  "neungryul-unit5-g1": 2, // to부정사 용법
  "neungryul-unit5-g6": 2, // 재귀대명사 선택
  "neungryul-unit5-v1": 2, // 어휘 오짝짓기(applied)
  // 도전(3): 어법·용법 판별·추리
  "neungryul-unit5-p6": 3, // 반 고흐 추리
  "neungryul-unit5-a4": 3, // 옳지 않은 것 추리
  "neungryul-unit5-g2": 3, // to부정사 목적 용법
  "neungryul-unit5-g3": 3, // 재귀대명사 어법 판별
  "neungryul-unit5-g4": 3, // 재귀대명사 생략 가능 여부
  "neungryul-unit5-g5": 3, // 토씨 맞는 문장
  "neungryul-unit5-ga1": 3, // to부정사 주어 용법
  "neungryul-unit5-ga2": 3, // to부정사 보어 용법
  "neungryul-unit5-ga3": 3, // 재귀대명사 어법 판별
  "neungryul-unit5-ga4": 3, // to부정사 감정의 원인
  "neungryul-unit5-hf1": 3, // 고난도 어법: 재귀대명사 himself
  "neungryul-unit5-hf2": 3, // 고난도 어법: 목적의 to부정사
  "neungryul-unit5-hf3": 3, // 고난도 어법: 재귀대명사 ourselves
  "neungryul-unit5-hf4": 3, // 고난도 어법: 재귀대명사 himself

  // 능률5.pdf 추가 문항 (선택형 기본 난이도 1은 생략)
  "neungryul5-pdf-s07-q05": 2,
  "neungryul5-pdf-s07-q07": 2,
  "neungryul5-pdf-s08-q09": 2,
  "neungryul5-pdf-s08-q11": 2,
  "neungryul5-pdf-s08-q12": 2,
  "neungryul5-pdf-s08-q14": 3,
  "neungryul5-pdf-s16-q03": 2,
  "neungryul5-pdf-s16-q05": 2,
  "neungryul5-pdf-s17-q03": 2,
  "neungryul5-pdf-s17-q05": 2,
  "neungryul5-pdf-s17-q07": 2,
  "neungryul5-pdf-s18-q10": 2,
  "neungryul5-pdf-s18-q13": 2,
  "neungryul5-pdf-s18-q15": 2,
  "neungryul5-pdf-s27-q04": 2,
  "neungryul5-pdf-s27-q05": 3,
  "neungryul5-pdf-s27-q06": 2,
  "neungryul5-pdf-s27-q07": 3,
  "neungryul5-pdf-s28-q09": 2,
  "neungryul5-pdf-s28-q13": 3,
  "neungryul5-pdf-s28-q14": 2,
  "neungryul5-pdf-s39-q04": 2,
  "neungryul5-pdf-s39-q07": 2,
  "neungryul5-pdf-s39-q08": 3,
  "neungryul5-pdf-s40-q10": 2,
  "neungryul5-pdf-s40-q13": 3,
  "neungryul5-pdf-s40-q14": 2,
  "neungryul5-pdf-s42-q04": 2,
  "neungryul5-pdf-s42-q06": 2,
  "neungryul5-pdf-s43-q07": 2,
  "neungryul5-pdf-s44-q14": 3,
  "neungryul5-pdf-s45-q18": 3,
  "neungryul5-pdf-s45-q19": 2,
  "neungryul5-pdf-s46-q23": 2,
  "neungryul5-pdf-s48-q10": 3,
  "neungryul5-pdf-s49-q20": 2,
  "neungryul5-pdf-s50-q24": 3,
  "neungryul5-pdf-s52-q08": 2,
  "neungryul5-pdf-s52-q12": 2,
  "neungryul5-pdf-s54-q20": 2,
  "neungryul5-pdf-s54-q25": 2,
  "neungryul5-pdf-s56-q12": 2,
  "neungryul5-pdf-s57-q19": 3,
  "neungryul5-pdf-s58-q22": 2,
  "neungryul5-pdf-s63-q01": 3,
  "neungryul5-pdf-s64-q09": 3,
  "neungryul5-pdf-s65-q10": 3,
  "neungryul5-pdf-s65-q13": 2,
  "neungryul5-pdf-s66-q17": 2,
  "neungryul5-pdf-s67-q19": 3,
  "neungryul5-pdf-s68-q23": 3,
  "neungryul5-pdf-s68-q24": 3,

  // ===================== 능률(김) 6과 =====================
  // 보통(2)
  "neungryul-unit6-p2": 2, // 옳지 않은 것 고르기
  "neungryul-unit6-p3": 2, // seu-wi-seu 추리
  "neungryul-unit6-p6": 2, // Anna가 할 수 있는 것
  "neungryul-unit6-pf3": 2, // look like 용법
  "neungryul-unit6-g1": 2, // taste good(형용사)
  "neungryul-unit6-g2": 2, // sound great(형용사)
  "neungryul-unit6-g4": 2, // because of(명사)
  "neungryul-unit6-g5": 2, // because(절)
  "neungryul-unit6-g6": 2, // look + 형용사
  "neungryul-unit6-d1": 2, // Why don't we ~?
  "neungryul-unit6-v1": 2, // 어휘 오짝짓기(traditional)
  // 도전(3): 지각동사 어법·because 구분·추리
  "neungryul-unit6-p4": 3, // 세종대왕 추리
  "neungryul-unit6-a4": 3, // 옳지 않은 것 추리
  "neungryul-unit6-g3": 3, // 지각동사 어법 판별(taste sweetly)
  "neungryul-unit6-ga1": 3, // 지각동사 어법 판별
  "neungryul-unit6-ga2": 3, // sound like 용법
  "neungryul-unit6-ga3": 3, // because/because of 구분
  "neungryul-unit6-ga4": 3, // 지각동사 어법 판별
  "neungryul-unit6-hf1": 3, // 고난도 어법: look + 형용사
  "neungryul-unit6-hf2": 3, // 고난도 어법: look like + 명사
  "neungryul-unit6-hf3": 3, // 고난도 어법: because(절)
  "neungryul-unit6-hf4": 3, // 고난도 어법: feel bad about
  "neungryul-unit6-d2": 3, // look + 형용사 어법 선택
};
