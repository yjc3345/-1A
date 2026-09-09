// 중1 동아(윤) 6과 문제 은행: Good for the Earth, Good for Us (제로 웨이스트 챌린지)
// 본문 내용 + to부정사/접속사 that 문법 + 재활용 어휘를 다양한 형식으로 반복 익힌다.
import type { Question } from "../questions";

export const UNIT6_QUESTIONS: Question[] = [
  // ============ 본문 이해 (선택) ============
  {
    id: "unit6-p1",
    type: "passage",
    context:
      "Every day, we produce lots of waste, and the Earth is getting sicker and sicker. Do you want to save the Earth? Then, join the zero-waste challenge, and share your stories.",
    question: "위 본문의 내용과 일치하는 것은?",
    choices: [
      "해마다 지구가 점점 더 건강해지고 있다.",
      "지구를 구하기 위해 제로 웨이스트 챌린지에 참여하자고 한다.",
      "챌린지에 참여하면 돈을 받는다.",
      "우리는 매일 적은 양의 쓰레기를 만든다.",
    ],
    answerIndex: 1,
    explanation:
      "지구는 점점 병들고 있고('getting sicker and sicker'), 제로 웨이스트 챌린지 참여를 권하고 있습니다.",
  },
  {
    id: "unit6-p2",
    type: "passage",
    context:
      "Olivia: My birthday was last Saturday, and my family and I ate out. There were lots of leftovers, but we brought them home. The next day, I made a nice lunch out of them.",
    question: "Olivia에 대한 설명으로 옳은 것은?",
    choices: [
      "생일날 가족과 함께 집에서 식사를 했다.",
      "남은 음식을 집에 가져오지 않았다.",
      "남은 음식으로 맛있는 점심을 만들었다.",
      "남은 음식을 그냥 버렸다.",
    ],
    answerIndex: 2,
    explanation:
      "'I made a nice lunch out of them.'에서 남은 음식으로 점심을 만들었습니다.",
  },
  {
    id: "unit6-p3",
    type: "passage",
    context:
      "Domingo: My dog tore my bag. I wanted to buy a new one, but I thought again. I learned that reusing is important for zero-waste living. So, I decided to fix it and reuse it.",
    question: "Domingo가 자신의 가방을 어떻게 했는지로 가장 알맞은 것은?",
    choices: [
      "새 가방을 바로 샀다.",
      "가방을 고쳐서 다시 쓰기로 했다.",
      "가방을 친구에게 주었다.",
      "가방을 쓰레기로 버렸다.",
    ],
    answerIndex: 1,
    explanation:
      "'decided to fix it and reuse it'에서 고쳐서 다시 쓰기로 했습니다.",
  },
  {
    id: "unit6-p4",
    type: "passage",
    context:
      "Minsu: Yesterday, I took some plastic and glass bottles to a recycling machine near my house. I put them into the machine one by one, and I got some points in return.",
    question: "Minsu에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "어제 재활용 기계에 병들을 가져갔다.",
      "병들을 하나씩 기계에 넣었다.",
      "대가로 포인트를 받았다.",
      "병 대신 종이를 재활용했다.",
    ],
    answerIndex: 3,
    explanation:
      "본문에는 플라스틱과 유리병을 가져갔다고 되어 있습니다. 종이는 언급되지 않았습니다.",
  },
  {
    id: "unit6-p5",
    type: "passage",
    context:
      "Minsu: Yesterday, I took some plastic and glass bottles to a recycling machine near my house.",
    question: "Minsu가 재활용 기계에 넣은 병의 종류는?",
    choices: [
      "종이와 캔",
      "플라스틱과 유리병",
      "유리병과 캔",
      "캔과 플라스틱",
    ],
    answerIndex: 1,
    explanation:
      "'plastic and glass bottles' 즉 플라스틱과 유리병을 가져갔습니다.",
  },
  {
    id: "unit6-p6",
    type: "passage",
    context:
      "Domingo: I learned that reusing is important for zero-waste living.",
    question: "Domingo가 새 가방을 사지 않은 이유로 가장 알맞은 것은?",
    choices: [
      "돈이 없어서",
      "재사용이 제로 웨이스트 생활에 중요하다고 배웠기 때문에",
      "가방이 다 고쳐져서",
      "친구가 새 가방을 사줘서",
    ],
    answerIndex: 1,
    explanation:
      "재사용이 중요하다는 것을 배워 새로 사는 대신 고쳐 쓰기로 했습니다.",
  },
  // ============ 본문 어법 · 빈칸 채우기 (선택) ============
  {
    id: "unit6-pf1",
    type: "passage",
    context: "Every day, we (  ) lots of waste.",
    question: "빈칸에 들어갈 알맞은 동사는?",
    choices: ["make", "produce", "buy", "throw"],
    answerIndex: 1,
    explanation: "produce는 '생산하다, 만들다'로 waste(쓰레기)와 잘 어울립니다.",
  },
  {
    id: "unit6-pf2",
    type: "passage",
    context: "The Earth is getting (  ) and sicker.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["healthy", "sick", "sicker", "sickest"],
    answerIndex: 2,
    explanation:
      "'점점 더 아파지는' 것을 나타내는 비교급 반복이므로 sicker입니다.",
  },
  {
    id: "unit6-pf3",
    type: "passage",
    context: "There were lots of leftovers, but we brought them (  ).",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["home", "away", "out", "up"],
    answerIndex: 0,
    explanation: "bring ~ home은 '~을 집으로 가져오다'라는 뜻입니다.",
  },
  {
    id: "unit6-pf4",
    type: "passage",
    context: "I made a nice lunch (  ) of the leftovers.",
    question: "빈칸에 들어갈 알맞은 전치사는?",
    choices: ["on", "out", "with", "from"],
    answerIndex: 1,
    explanation: "make A out of B는 'B로 A를 만들다'라는 숙어입니다.",
  },
  {
    id: "unit6-pf5",
    type: "passage",
    context: "I wanted to buy a new (  ), but I thought again.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["one", "it", "them", "bag"],
    answerIndex: 0,
    explanation:
      "앞에 나온 bag을 반복하지 않고 '하나(one)'로 대신할 수 있습니다.",
  },
  {
    id: "unit6-pf6",
    type: "passage",
    context: "Reusing is important for zero-waste (  ).",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["life", "living", "live", "lives"],
    answerIndex: 1,
    explanation: "zero-waste living은 '제로 웨이스트(제로 폐기물) 생활'입니다.",
  },
  {
    id: "unit6-pf7",
    type: "passage",
    context: "So, I decided to (  ) it and reuse it.",
    question: "빈칸에 들어갈 알맞은 동사는?",
    choices: ["recycle", "buy", "fix", "throw"],
    answerIndex: 2,
    explanation: "다시 쓰기 위해 고치기로 했으므로 fix(고치다)입니다.",
  },
  {
    id: "unit6-pf8",
    type: "passage",
    context: "I took the bottles to a recycling (  ) near my house.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["machine", "center", "bag", "shop"],
    answerIndex: 0,
    explanation: "recycling machine은 '재활용 기계'입니다.",
  },
  // ============ 본문 단답 (직접 입력) ============
  {
    id: "unit6-pt1",
    type: "passage",
    mode: "typing",
    context: "Do you want to (   ) the Earth?",
    question: "빈칸에 들어갈 '구하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["save"],
    explanation: "save는 '구하다, 아끼다'입니다. save the Earth는 '지구를 구하다'예요.",
  },
  {
    id: "unit6-pt2",
    type: "passage",
    mode: "typing",
    context: "Every day, we produce lots of (   ).",
    question: "빈칸에 들어갈 '쓰레기'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["waste"],
    explanation: "쓰레기는 waste입니다.",
  },
  {
    id: "unit6-pt3",
    type: "passage",
    mode: "typing",
    context: "My dog (   ) my bag.",
    question: "빈칸에 들어갈 '찢었다'를 뜻하는 영어 동사의 과거형을 쓰세요. (tear의 과거형)",
    accept: ["tore"],
    explanation: "tear(찢다)의 과거형은 tore입니다.",
  },
  {
    id: "unit6-pt4",
    type: "passage",
    mode: "typing",
    context: "I put them into the machine one by one, and I got some (   ) in return.",
    question: "빈칸에 들어갈 '포인트'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["points"],
    explanation: "포인트는 points입니다. 보상으로 포인트를 받았어요.",
  },
  {
    id: "unit6-pt5",
    type: "passage",
    mode: "typing",
    context: "The Earth is getting sicker and (   ).",
    question: "빈칸에 들어갈 알맞은 영어 단어를 쓰세요. (점점 더 아픈)",
    accept: ["sicker"],
    explanation: "비교급을 반복해 '점점 더 ~해지는'을 나타냅니다.",
  },
  {
    id: "unit6-pt6",
    type: "passage",
    mode: "typing",
    context:
      "I took some plastic and glass (   ) to a recycling machine.",
    question: "빈칸에 들어갈 '병들'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["bottles"],
    explanation: "병은 bottle, 여러 개는 bottles입니다.",
  },
  // ============ 문법 (선택) ============
  {
    id: "unit6-g1",
    type: "grammar",
    context:
      "Every day, we produce lots of waste. Do you want (to save) the Earth?",
    question: "밑줄 친 to save의 쓰임과 같은 것은?\n\nDo you want (to save) the Earth?",
    choices: [
      "To cook spaghetti is not difficult.",
      "My goal is to travel around the world.",
      "I want to drink a cup of tea.",
      "The problem is that I lost my wallet.",
    ],
    answerIndex: 2,
    explanation:
      "want는 to부정사를 목적어로 취합니다. 'want to drink'처럼 want 뒤에 와 목적어로 쓰인 것과 같습니다.",
  },
  {
    id: "unit6-g2",
    type: "grammar",
    question:
      "밑줄 친 that의 쓰임으로 올바른 것은?\n\nI learned (that) reusing is important for zero-waste living.",
    choices: [
      "that 뒤에 절이 이어져 '~라는 것'을 나타낸다.",
      "that은 지시대명사로 쓰였다.",
      "that은 지시형용사로 쓰였다.",
      "that은 관계대명사로 쓰였다.",
    ],
    answerIndex: 0,
    explanation:
      "접속사 that 뒤에 '주어+동사'의 절이 이어져 '~라는 것'을 나타냅니다. 여기서는 learned의 목적어 역할을 합니다.",
  },
  {
    id: "unit6-g3",
    type: "grammar",
    question: "어법상 틀린 문장은?",
    choices: [
      "She decided to study abroad.",
      "To collect dolls is my hobby.",
      "I want save the Earth.",
      "My dream is to travel the world.",
    ],
    answerIndex: 2,
    explanation:
      "want는 to부정사를 목적어로 취합니다. → I want to save the Earth.",
  },
  {
    id: "unit6-g4",
    type: "grammar",
    question: "다음 빈칸에 알맞은 것은?\n\nI want ______ the Earth.",
    choices: ["save", "to save", "saving", "saved"],
    answerIndex: 1,
    explanation:
      "want + to부정사(to + 동사원형) 형태로 want to save가 맞습니다.",
  },
  {
    id: "unit6-g5",
    type: "grammar",
    question: "빈칸에 접속사 that의 쓰임이 알맞은 문장은?",
    choices: [
      "I know ______ he is kind.",
      "______ dog is cute.",
      "Give me ______ pencil.",
      "______ is a big tree.",
    ],
    answerIndex: 0,
    explanation:
      "'주어+동사' 절을 이어 '~라는 것'을 나타내는 접속사 that이 온 것은 첫 번째 문장입니다.",
  },
  {
    id: "unit6-g6",
    type: "grammar",
    question: "어법상 옳은 문장은?",
    choices: [
      "I want to recycling bottles.",
      "She decided to using less water.",
      "It is important to save water.",
      "He wants become a doctor.",
    ],
    answerIndex: 2,
    explanation:
      "It is important to 동사원형(~하는 것이 중요하다) 구조로 ③이 옳습니다. 나머지는 to 다음에 부정사 원형이 와야 합니다.",
  },
  {
    id: "unit6-g7",
    type: "grammar",
    question: "다음 빈칸에 알맞은 것은?\n\nMy dream is ______ around the world.",
    choices: ["travel", "to travel", "traveling is", "traveled"],
    answerIndex: 1,
    explanation:
      "'나의 꿈은 ~하는 것이다'라는 의미로 명사적 용법의 to부정사(to travel)를 씁니다.",
  },
  // ============ 문법 단답 (직접 입력) ============
  {
    id: "unit6-gt1",
    type: "grammar",
    mode: "typing",
    question: "다음 빈칸에 알맞은 단어를 쓰세요.\n\nI want (   ) save the Earth.",
    accept: ["to"],
    explanation: "want 다음에는 to부정사(to + 동사원형)가 옵니다.",
  },
  {
    id: "unit6-gt2",
    type: "grammar",
    mode: "typing",
    question:
      "다음 문장의 괄호 안 동사를 to부정사로 바꿔 쓰세요.\n\nI decided (fix) ______ my bag.",
    accept: ["to fix"],
    explanation: "decide + to부정사 → decided to fix입니다.",
  },
  {
    id: "unit6-gt3",
    type: "grammar",
    mode: "typing",
    question:
      "다음 문장을 알맞게 쓰세요. (주어 자리에 to부정사 사용)\n\n(Collect) ______ stamps is fun.",
    accept: ["to collect"],
    explanation: "주어 역할을 하는 명사적 용법 to부정사는 To collect입니다.",
  },
  {
    id: "unit6-gt4",
    type: "grammar",
    mode: "typing",
    question:
      "다음 문장의 괄호 안을 알맞게 쓰세요.\n\nMy dream is (become) ______ a doctor.",
    accept: ["to become"],
    explanation: "보어 자리에 to부정사(to become)를 씁니다.",
  },
  {
    id: "unit6-gt5",
    type: "grammar",
    mode: "typing",
    question:
      "접속사 that을 넣어 한 문장으로 쓰되, that만 쓰세요.\n\nI know he is kind. → I know ______ he is kind.",
    accept: ["that"],
    explanation: "접속사 that으로 절을 이어줍니다.",
  },
  {
    id: "unit6-gt6",
    type: "grammar",
    mode: "typing",
    question:
      "다음 괄호 안을 알맞게 쓰세요.\n\nHe wants (drink) ______ a cup of tea.",
    accept: ["to drink"],
    explanation: "want + to부정사 → wants to drink입니다.",
  },
  // ============ 대화문 ============
  {
    id: "unit6-d1",
    type: "dialogue",
    context:
      "A: I need a favor. Can you please fix my bike?\nB: Sure. No problem.",
    question: "위 대화에서 A가 B에게 한 표현으로 알맞은 것은?",
    choices: [
      "도움을 요청하는 표현",
      "금지를 나타내는 표현",
      "허락을 구하는 표현",
      "의견을 묻는 표현",
    ],
    answerIndex: 0,
    explanation:
      "'Can you please ~?'는 도움을 요청하는 표현입니다.",
  },
  {
    id: "unit6-d2",
    type: "dialogue",
    context:
      "G: Plogging. It means jogging and picking up trash at the same time.\nB: Sounds cool! So you're a member of a plogging club.",
    question: "빈칸에 들어갈 알맞은 말은?\n\nPlogging means jogging and picking up trash ______.",
    choices: ["at the same time", "one by one", "right away", "by the way"],
    answerIndex: 0,
    explanation:
      "'조깅과 쓰레기 줍기를 동시에(at the same time)' 하는 것이 플로깅입니다.",
  },
  {
    id: "unit6-d3",
    type: "dialogue",
    context:
      "A: Can you please help me with my English homework?\nB: ______________",
    question: "도움을 거절하는 응답으로 알맞은 것은?",
    choices: [
      "Sure. No problem.",
      "Of course!",
      "I'm sorry, but I can't. I'm busy now.",
      "Yes, please.",
    ],
    answerIndex: 2,
    explanation:
      "부탁을 거절할 때는 I'm sorry, but I can't.와 같은 표현을 씁니다.",
  },
  {
    id: "unit6-d4",
    type: "dialogue",
    context:
      "A: Would you please open the window?\nB: ______________\nA: Thank you.",
    question: "빈칸에 들어갈 알맞은 긍정 응답은?",
    choices: [
      "No, I wouldn't.",
      "Sure, I'll open it.",
      "Yes, I do.",
      "You don't have to.",
    ],
    answerIndex: 1,
    explanation:
      "'Would you please ~?'로 부탁했고 상대가 열겠다고 하면 자연스럽습니다.",
  },
  {
    id: "unit6-d5",
    type: "dialogue",
    mode: "typing",
    context: "A: Can you (   ) turn off the light?\nB: Sure.",
    question:
      "상대방에게 정중하게 부탁할 때 쓰는 영어 단어를 쓰세요. (제발, 부디)",
    accept: ["please"],
    explanation: "Can you please ~?는 정중한 부탁 표현입니다.",
  },
  // ============ 어휘 ============
  {
    id: "unit6-v1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "reuse - 재사용하다",
      "leftover - 남은 음식",
      "container - 용기",
      "reduce - 늘리다",
    ],
    answerIndex: 3,
    explanation: "reduce는 '줄이다'입니다. '늘리다'는 increase입니다.",
  },
  {
    id: "unit6-v2",
    type: "vocab",
    question: "'reduce(줄이다)'의 반대말로 알맞은 것은?",
    choices: ["increase", "reuse", "recycle", "throw"],
    answerIndex: 0,
    explanation: "reduce(줄이다)의 반대는 increase(늘리다)입니다.",
  },
  {
    id: "unit6-v3",
    type: "vocab",
    question: "다음 중 쓰레기를 나타내는 영어 단어는?",
    choices: ["waste", "leave", "save", "point"],
    answerIndex: 0,
    explanation: "waste는 '쓰레기, 낭비'입니다.",
  },
  {
    id: "unit6-v4",
    type: "vocab",
    question: "'플로깅(plogging)'의 뜻으로 알맞은 것은?",
    choices: [
      "달리며 쓰레기를 줍는 활동",
      "물건을 재사용하는 운동",
      "쓰레기를 분리수거하는 행위",
      "쓰레기 양을 줄이는 캠페인",
    ],
    answerIndex: 0,
    explanation:
      "plogging은 조깅(jogging)과 쓰레기 줍기(picking up trash)를 동시에 하는 활동입니다.",
  },
  {
    id: "unit6-vt1",
    type: "vocab",
    mode: "typing",
    question: "'줄이다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["reduce"],
    explanation: "줄이다는 reduce입니다.",
  },
  {
    id: "unit6-vt2",
    type: "vocab",
    mode: "typing",
    question: "'재사용하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["reuse"],
    explanation: "재사용하다는 reuse입니다.",
  },
  {
    id: "unit6-vt3",
    type: "vocab",
    mode: "typing",
    question: "'재활용하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["recycle"],
    explanation: "재활용하다는 recycle입니다.",
  },
  {
    id: "unit6-vt4",
    type: "vocab",
    mode: "typing",
    question: "'남은 음식'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["leftover", "leftovers"],
    explanation: "남은 음식은 leftover(s)입니다.",
  },
  // ============ 확충: 본문 문장 단답 (직접 입력) ============
  {
    id: "unit6-a1",
    type: "passage",
    mode: "typing",
    context: "There were lots of ______, but we brought them home.",
    question: "빈칸에 들어갈 '남은 음식들'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["leftovers"],
    explanation: "leftover(남은 음식)의 복수형은 leftovers입니다.",
  },
  {
    id: "unit6-a2",
    type: "passage",
    mode: "typing",
    context: "I made a nice lunch out of ______.",
    question: "빈칸에 들어갈 '그것들(남은 음식)'을 가리키는 대명사를 쓰세요.",
    accept: ["them"],
    explanation: "앞에 나온 leftovers를 가리켜 대명사 them으로 대신합니다.",
  },
  {
    id: "unit6-a3",
    type: "passage",
    mode: "typing",
    context: "My birthday was last Saturday, and my family and I ______ out.",
    question: "빈칸에 들어갈 '외식했다(eat out)'에서 eat의 과거형을 쓰세요.",
    accept: ["ate"],
    explanation: "eat out(외식하다)의 과거형은 ate out입니다.",
  },
  // ============ 확충: 본문 이해 (선택) ============
  {
    id: "unit6-a4",
    type: "passage",
    context:
      "Domingo: My dog tore my bag. I wanted to buy a new one, but I thought again.",
    question: "Domingo가 처음에 새 가방을 사려던 이유로 알맞은 것은?",
    choices: [
      "개가 가방을 찢었기 때문에",
      "가방이 물에 젖었기 때문에",
      "가방이 낡았기 때문에",
      "가방을 잃어버렸기 때문에",
    ],
    answerIndex: 0,
    explanation: "'My dog tore my bag.' 즉 개가 가방을 찢었기 때문입니다.",
  },
  {
    id: "unit6-a5",
    type: "passage",
    context:
      "Domingo: I learned that reusing is important for zero-waste living.",
    question: "Domingo가 재사용이 중요하다고 배운 분야는?",
    choices: [
      "제로 웨이스트 생활",
      "운동 능력 향상",
      "요리 실력",
      "시험 성적 올리기",
    ],
    answerIndex: 0,
    explanation: "'reusing is important for zero-waste living' 즉 제로 웨이스트 생활에 중요하다고 배웠습니다.",
  },
  // ============ 확충: 문법 (선택) ============
  {
    id: "unit6-ga1",
    type: "grammar",
    question: "다음 중 to부정사가 (주격)보어로 쓰인 문장은?",
    choices: [
      "To swim is fun.",
      "I want to swim.",
      "My hobby is to swim.",
      "He decided to swim.",
    ],
    answerIndex: 2,
    explanation:
      "'My hobby is to swim.'에서 is 뒤의 to swim이 보어입니다. (①은 주어 용법)",
  },
  {
    id: "unit6-ga2",
    type: "grammar",
    question: "다음 빈칸에 들어갈 접속사 that이 알맞은 문장은?\n\nI think ______ it will rain soon.",
    choices: ["that", "what", "when", "which"],
    answerIndex: 0,
    explanation: "'비가 곧 올 것이라는 것'을 생각한다는 내용이므로 접속사 that이 맞습니다.",
  },
  {
    id: "unit6-ga3",
    type: "grammar",
    question: "다음 중 that이 접속사(명사절)로 쓰인 문장은?",
    choices: [
      "I like that bag.",
      "That dog is mine.",
      "I believe that he is honest.",
      "Give me that one.",
    ],
    answerIndex: 2,
    explanation:
      "believe의 목적어로 절(he is honest)을 이끄는 접속사 that은 ③입니다. 나머지는 that이 '그것/그'로 쓰였습니다.",
  },
  {
    id: "unit6-ga4",
    type: "grammar",
    question: "다음 중 to부정사가 주어로 쓰인 문장은?",
    choices: [
      "I want to rest.",
      "To love is to give.",
      "She tried to help.",
      "We plan to go.",
    ],
    answerIndex: 1,
    explanation: "'To love is to give.'에서 문장 맨 앞의 To love가 주어 역할을 합니다.",
  },
  // ============ 확충: 문법 단답 (직접 입력) ============
  {
    id: "unit6-gt7",
    type: "grammar",
    mode: "typing",
    question:
      "다음 빈칸에 알맞게 쓰세요.\n\nIt is good ______ the Earth. (to + 동사원형)",
    accept: ["to save"],
    explanation: "It is + 형용사 + to부정사 구조로 to save가 맞습니다.",
  },
  {
    id: "unit6-gt8",
    type: "grammar",
    mode: "typing",
    question: "접속사 that을 넣되, that만 쓰세요.\n\nI think ______ he is right.",
    accept: ["that"],
    explanation: "생각의 내용인 절을 이끄는 접속사 that을 씁니다.",
  },
  // ============ 확충: 대화문 ============
  {
    id: "unit6-da1",
    type: "dialogue",
    context:
      "A: Could you please turn down the music?\nB: Sure. Sorry, it was too loud.",
    question: "A가 쓴 정중한 요청 표현과 같은 뜻으로 묶인 것은?",
    choices: [
      "Can you please ~?",
      "You must not ~.",
      "May I ~?",
      "You don't have to ~.",
    ],
    answerIndex: 0,
    explanation:
      "'Could you please ~?'와 'Can you please ~?'는 모두 상대에게 정중히 부탁하는 표현입니다.",
  },
  // ============ 확충: 어휘 ============
  {
    id: "unit6-va1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "waste - 쓰레기",
      "recycle - 재활용하다",
      "bottle - 병",
      "produce - 줄이다",
    ],
    answerIndex: 3,
    explanation: "produce는 '생산하다'입니다. '줄이다'는 reduce예요.",
  },
  {
    id: "unit6-va2",
    type: "vocab",
    question: "'zero-waste'의 뜻으로 알맞은 것은?",
    choices: [
      "쓰레기 제로(없이) 생활하기",
      "쓰레기를 남에게 넘기기",
      "물만 아껴 쓰기",
      "음식을 남기지 않기",
    ],
    answerIndex: 0,
    explanation: "zero-waste는 '쓰레기를 만들지 않으려는(제로 폐기물) 생활'입니다.",
  },
  {
    id: "unit6-vt5",
    type: "vocab",
    mode: "typing",
    question: "'용기'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["container"],
    explanation: "용기는 container입니다. 제로 웨이스트에서 재사용 용기 이야기가 자주 나와요.",
  },
  {
    id: "unit6-vt6",
    type: "vocab",
    mode: "typing",
    question: "'줄이다(reduce)'의 반대말을 영어로 쓰세요.",
    accept: ["increase"],
    explanation: "reduce(줄이다)의 반대말은 increase(늘리다)입니다.",
  },
  // ============ 고난도 어법 선택형 (본문 빈칸) ============
  {
    id: "unit6-hf1",
    type: "grammar",
    context:
      "Do you want (  ) the Earth? Then, join the zero-waste challenge.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["save", "to save", "saving", "saved"],
    answerIndex: 1,
    explanation:
      "want는 to부정사를 목적어로 취합니다. want to save는 명사적 용법의 목적어입니다.",
  },
  {
    id: "unit6-hf2",
    type: "grammar",
    context:
      "Domingo: I learned (  ) reusing is important for zero-waste living.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (뒤에 주어+동사 절이 옵니다)",
    choices: ["what", "that", "which", "who"],
    answerIndex: 1,
    explanation:
      "'~라는 것'을 뜻하며 learned의 목적어 절을 이끄는 접속사 that이 알맞습니다.",
  },
  {
    id: "unit6-hf3",
    type: "grammar",
    context:
      "Olivia: There were lots of leftovers, but we brought (  ) home.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (leftovers를 가리킴)",
    choices: ["it", "them", "they", "those"],
    answerIndex: 1,
    explanation:
      "복수 명사 leftovers를 받는 목적격 대명사는 them입니다.",
  },
];