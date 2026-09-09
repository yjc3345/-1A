// 중1 동아(윤) 5과 문제 은행: Who Threw a Cake at the Mona Lisa?
// 본문(케이크 사건 목격 진술)을 다양한 형식(이해선택/빈칸선택/단답/문법/어휘)으로 반복 접하며 익힌다.
import type { Question } from "../questions";

export const UNIT5_QUESTIONS: Question[] = [
  // ============ 본문 이해 (선택) ============
  {
    id: "unit5-p1",
    type: "passage",
    context:
      "Last Saturday, someone threw a cake at the Mona Lisa in the Botero Museum in Bogota, Colombia.",
    question: "위 본문의 내용과 일치하는 것은?",
    choices: [
      "누군가 모나리자에게 돌을 던졌다.",
      "사건은 지난 일요일에 일어났다.",
      "누군가 모나리자에 케이크를 던졌다.",
      "박물관은 브라질에 있다.",
    ],
    answerIndex: 2,
    explanation:
      "'someone threw a cake at the Mona Lisa' 즉 모나리자에 케이크를 던졌다는 내용입니다.",
  },
  {
    id: "unit5-p2",
    type: "passage",
    context:
      "Ann Jones: I was looking at the Mona Lisa, and someone threw a cake at the painting. I turned around and saw an old man. He was standing in front of a wheelchair.",
    question: "Ann Jones에 대한 설명으로 옳은 것은?",
    choices: [
      "범인은 Ann보다 키가 작았다.",
      "Ann은 뒤돌아보고 한 노인을 보았다.",
      "그 노인은 휠체어를 타고 있었다.",
      "Ann은 그림을 보고 있지 않았다.",
    ],
    answerIndex: 1,
    explanation:
      "'I turned around and saw an old man.'에서 뒤돌아보고 노인을 보았습니다. 노인은 휠체어 앞에 서 있었지 타고 있지 않았어요.",
  },
  {
    id: "unit5-p3",
    type: "passage",
    context:
      "Carlos Diaz: An old man with gray hair was running away, and something fell off his head. It was his wig. I ran after him, but I couldn't catch him.",
    question: "Carlos Diaz의 진술로 알 수 있는 것은?",
    choices: [
      "노인의 머리에서 가발이 떨어졌다.",
      "Carlos는 그를 붙잡았다.",
      "노인은 실제로 노인이었다.",
      "노인은 걸어서 도망갔다.",
    ],
    answerIndex: 0,
    explanation:
      "'something fell off his head. It was his wig.'에서 머리에서 가발이 떨어졌음을 알 수 있습니다.",
  },
  {
    id: "unit5-p4",
    type: "passage",
    context:
      "Camila Santos: Last Friday, a young man came in. He spoke only English. We had a lot of different cakes, but he just wanted the smallest one. He had blue eyes.",
    question: "Camila의 진술로 범인의 특징을 추리할 수 있는 것은?",
    choices: [
      "스페인어를 유창하게 구사한다.",
      "가장 작은 케이크를 주문했다.",
      "머리색이 빨갛다.",
      "여러 개의 케이크를 샀다.",
    ],
    answerIndex: 1,
    explanation:
      "'he just wanted the smallest one'에서 가장 작은 케이크를 원했습니다. 또 영어만 했다고 했습니다.",
  },
  {
    id: "unit5-p5",
    type: "passage",
    context:
      "Ann Jones: I'm about 170cm tall, and he was a little taller than me. I saw a wheelchair in front of him.",
    question: "범인과 Ann을 비교했을 때 알맞은 것은?",
    choices: [
      "범인이 Ann보다 키가 더 컸다.",
      "Ann이 범인보다 키가 더 컸다.",
      "두 사람의 키는 같았다.",
      "범인의 키는 알 수 없다.",
    ],
    answerIndex: 0,
    explanation:
      "'he was a little taller than me'에서 범인이 Ann보다 조금 더 컸음을 알 수 있습니다.",
  },
  {
    id: "unit5-p6",
    type: "passage",
    context:
      "Carlos Diaz: I ran after him, but I couldn't catch him. He was faster than me.",
    question: "Carlos가 범인을 잡지 못한 이유는?",
    choices: [
      "범인이 가발을 썼기 때문에",
      "범인이 Carlos보다 빨랐기 때문에",
      "Carlos가 달리기를 싫어해서",
      "범인이 경찰에 체포되어서",
    ],
    answerIndex: 1,
    explanation:
      "'He was faster than me.'에서 범인이 Carlos보다 빨라 잡지 못했습니다.",
  },
  {
    id: "unit5-p7",
    type: "passage",
    context:
      "In fact, the old man was not old. He was a young man with long brown hair.",
    question: "본문에서 밝혀진 범인의 실제 모습은?",
    choices: [
      "흰머리를 가진 노인",
      "짧은 검은 머리의 여자",
      "긴 갈색 머리를 가진 젊은 남자",
      "안경을 쓴 청년",
    ],
    answerIndex: 2,
    explanation:
      "'He was a young man with long brown hair.'에서 실제로는 긴 갈색 머리의 젊은 남자였습니다.",
  },
  // ============ 본문 어법 · 빈칸 채우기 (선택) ============
  {
    id: "unit5-pf1",
    type: "passage",
    context:
      "He was a little (  ) than me.",
    question: "빈칸에 들어갈 알맞은 형태는?",
    choices: ["tall", "taller", "tallest", "more taller"],
    answerIndex: 1,
    explanation:
      "than과 함께 비교급을 씁니다. tall의 비교급은 taller입니다.",
  },
  {
    id: "unit5-pf2",
    type: "passage",
    context: "I couldn't catch him. He was (  ) than me.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["fast", "faster", "fastest", "the fast"],
    answerIndex: 1,
    explanation:
      "'than me'와 비교되므로 faster(빠른 → 더 빠른)를 씁니다.",
  },
  {
    id: "unit5-pf3",
    type: "passage",
    context: "In fact, the old man was (  ) old. He was a young man.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["too", "not", "very", "more"],
    answerIndex: 1,
    explanation:
      "'그는 노인이 아니었다'는 부정의 not입니다. → was not old.",
  },
  {
    id: "unit5-pf4",
    type: "passage",
    context: "We had a lot of different cakes, but he just wanted the (  ) one.",
    question: "빈칸에 들어갈 알맞은 형태는?",
    choices: ["small", "smaller", "smallest", "most small"],
    answerIndex: 2,
    explanation:
      "셋 이상에서 가장 작은 것을 고르므로 최상급 the smallest를 씁니다.",
  },
  {
    id: "unit5-pf5",
    type: "passage",
    context: "I turned (  ) and saw an old man.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["on", "off", "around", "down"],
    answerIndex: 2,
    explanation: "turn around은 '(돌아서) 뒤돌아보다'라는 뜻의 숙어입니다.",
  },
  {
    id: "unit5-pf6",
    type: "passage",
    context: "Something (  ) off his head. It was his wig.",
    question: "빈칸에 들어갈 알맞은 과거형 동사는?",
    choices: ["falls", "fell", "fallen", "will fall"],
    answerIndex: 1,
    explanation:
      "과거 시제 이야기이므로 fall의 과거형 fell이 알맞습니다.",
  },
  {
    id: "unit5-pf7",
    type: "passage",
    context: "He was running (  ). He was faster than me.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["away", "out", "in", "up"],
    answerIndex: 0,
    explanation: "run away는 '(도주하듯) 도망가다'라는 뜻입니다.",
  },
  {
    id: "unit5-pf8",
    type: "passage",
    context:
      "We sold only one cake (  ) day, so I remember him clearly.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["a", "an", "that", "those"],
    answerIndex: 2,
    explanation:
      "'그날(that day)' 하루만 케이크를 팔았으므로 지시 형용사 that이 자연스럽습니다.",
  },
  // ============ 본문 단답 (직접 입력) ============
  {
    id: "unit5-pt1",
    type: "passage",
    mode: "typing",
    context: "He was a little (   ) than me.",
    question:
      "빈칸에 들어갈 알맞은 영어 단어를 쓰세요. (tall의 비교급)",
    accept: ["taller"],
    explanation:
      "than과 함께 비교급을 사용하므로 taller(더 키가 큰)를 씁니다.",
  },
  {
    id: "unit5-pt2",
    type: "passage",
    mode: "typing",
    context: "He was faster (   ) me.",
    question:
      "빈칸에 들어갈 알맞은 영어 단어를 쓰세요. (비교할 때 쓰는 전치사)",
    accept: ["than"],
    explanation: "~보다를 뜻하는 비교 표현에는 than을 씁니다.",
  },
  {
    id: "unit5-pt3",
    type: "passage",
    mode: "typing",
    context: "Something fell off his head. It was his (   ).",
    question:
      "노인의 머리에서 떨어진 것의 영어 단어를 쓰세요. (가발)",
    accept: ["wig"],
    explanation: "가발은 wig입니다. wig는 범인을 알리는 중요한 단서였죠.",
  },
  {
    id: "unit5-pt4",
    type: "passage",
    mode: "typing",
    context: "He was standing in front of a (   ).",
    question:
      "노인이 앞에 서 있던 것의 영어 단어를 쓰세요. (휠체어)",
    accept: ["wheelchair"],
    explanation: "휠체어는 wheelchair입니다.",
  },
  {
    id: "unit5-pt5",
    type: "passage",
    mode: "typing",
    context: "I turned around and saw an (   ) man.",
    question: "빈칸에 들어갈 '늙은'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["old"],
    explanation: "old man은 '노인'입니다.",
  },
  {
    id: "unit5-pt6",
    type: "passage",
    mode: "typing",
    context: "The old man was not old. He was a young man with (   ) brown hair.",
    question:
      "그 젊은 남자가 가진 갈색 머리 길이를 나타내는 영어 단어를 쓰세요. (긴)",
    accept: ["long"],
    explanation: "long brown hair는 '긴 갈색 머리'입니다.",
  },
  // ============ 문법 (선택) ============
  {
    id: "unit5-g1",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nHe was a little ________ than me.",
    choices: ["tall", "taller", "tallest", "most tall"],
    answerIndex: 1,
    explanation:
      "'than'과 함께 비교급을 사용해야 하므로 taller가 맞습니다.",
  },
  {
    id: "unit5-g2",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nThere ______ a lot of different cakes in the bakery.",
    choices: ["is", "are", "be", "does"],
    answerIndex: 1,
    explanation:
      "a lot of different cakes(복수 명사)가 오므로 be동사는 are입니다.",
  },
  {
    id: "unit5-g3",
    type: "grammar",
    question: "어법상 틀린 문장은?",
    choices: [
      "She is the smallest one.",
      "There were four eyewitnesses.",
      "He was faster than me.",
      "There was two bedrooms in the room.",
    ],
    answerIndex: 3,
    explanation:
      "two bedrooms는 복수이므로 'There were'가 맞습니다.",
  },
  {
    id: "unit5-g4",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nMy bag is ______ than yours.",
    choices: ["heavy", "heavier", "heaviest", "heavily"],
    answerIndex: 1,
    explanation:
      "앞이 자음인 -y로 끝나므로 y를 i로 바꾸고 -er을 붙여 heavier가 됩니다.",
  },
  {
    id: "unit5-g5",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nTom is the ______ student in our class.",
    choices: ["tall", "taller", "tallest", "as tall as"],
    answerIndex: 2,
    explanation:
      "반 전체(3인 이상) 중 최고이므로 최상급 the tallest를 씁니다.",
  },
  {
    id: "unit5-g6",
    type: "grammar",
    question: "다음 중 어법상 옳은 문장은?",
    choices: [
      "There is two cats under the table.",
      "She was more taller than me.",
      "There are lots of cakes on the table.",
      "He is the tall boy in our class.",
    ],
    answerIndex: 2,
    explanation:
      "복수 명사(lots of cakes)와 함께 be동사 are를 쓰는 문장이 옳습니다.",
  },
  {
    id: "unit5-g7",
    type: "grammar",
    question: "다음 빈칸에 알맞은 과거형은?\n\nI ______ a cake at the painting yesterday.",
    choices: ["throw", "threw", "thrown", "throwing"],
    answerIndex: 1,
    explanation:
      "yesterday(과거)이므로 throw의 과거형 threw를 씁니다.",
  },
  // ============ 문법 단답 (직접 입력) ============
  {
    id: "unit5-gt1",
    type: "grammar",
    mode: "typing",
    question:
      "다음 비교급의 알맞은 형태를 쓰세요.\n\nThis box is (heavy) ______ than that one.",
    accept: ["heavier"],
    explanation: "heavy는 y를 i로 바꾸고 -er을 붙여 heavier가 됩니다.",
  },
  {
    id: "unit5-gt2",
    type: "grammar",
    mode: "typing",
    question:
      "There is/are를 골라 영어로 쓰세요.\n\nThere ______ two cats under the table.",
    accept: ["are"],
    explanation: "two cats(복수)이므로 are가 맞습니다.",
  },
  {
    id: "unit5-gt3",
    type: "grammar",
    mode: "typing",
    question:
      "'키가 가장 큰'이라는 뜻의 최상급을 쓰세요.\n\nMinho is the (tall) ______ boy.",
    accept: ["tallest"],
    explanation: "the tallest(가장 키가 큰)입니다.",
  },
  {
    id: "unit5-gt4",
    type: "grammar",
    mode: "typing",
    question: "'그녀는 나보다 느리게 달렸다.'에서 비교급을 쓰세요.\n\nShe ran (slow) ______ than me.",
    accept: ["slower"],
    explanation: "slow는 -er을 붙여 slower입니다.",
  },
  {
    id: "unit5-gt5",
    type: "grammar",
    mode: "typing",
    question: "다음 빈칸에 알맞은 be동사의 과거형을 쓰세요.\n\nI ______ at the museum last Saturday.",
    accept: ["was"],
    explanation: "주어가 I(1인칭 단수)이므로 과거형 was입니다.",
  },
  {
    id: "unit5-gt6",
    type: "grammar",
    mode: "typing",
    question:
      "'내 가방이 너보다 더 무겁다.'에서 빈칸에 알맞은 비교급을 쓰세요.\n\nMy bag is (heavy) ______ than yours.",
    accept: ["heavier"],
    explanation: "heavy → heavier(더 무거운)입니다.",
  },
  // ============ 확충: 본문 이해 (선택) ============
  {
    id: "unit5-a1",
    type: "passage",
    context:
      "Ann Jones: I turned around and saw an old man. He was standing in front of a wheelchair.",
    question: "범인이 휠체어 앞에 서 있었다는 진술로 추리할 수 있는 것은?",
    choices: [
      "실제로 다리가 불편한 장애인이다.",
      "휠체어를 타고 도망치려 했다.",
      "자신이 장애인인 척 하려 했다.",
      "휠체어를 직접 밀고 왔다.",
    ],
    answerIndex: 2,
    explanation:
      "노인이 휠체어를 타지 않고 '앞에' 서 있었다는 것은, 휠체어가 그의 변장 도구였음을 암시합니다.",
  },
  {
    id: "unit5-a2",
    type: "passage",
    context:
      "Camila Santos: He spoke only English. We had a lot of different cakes, but he just wanted the smallest one. He had blue eyes.",
    question: "Camila가 말한 범인에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "영어만 말했다.",
      "가장 작은 케이크를 원했다.",
      "눈이 파란색이었다.",
      "여러 개의 케이크를 주문했다.",
    ],
    answerIndex: 3,
    explanation: "가장 작은 케이크 '하나만' 원했습니다.",
  },
  {
    id: "unit5-a3",
    type: "passage",
    context:
      "Last Saturday, someone threw a cake at the Mona Lisa in the Botero Museum in Bogota, Colombia.",
    question: "사건이 일어난 장소로 알맞은 것은?",
    choices: [
      "Bogota에 있는 Botero 박물관",
      "파리의 루브르 박물관",
      "뉴욕의 현대미술관",
      "런던의 대영박물관",
    ],
    answerIndex: 0,
    explanation: "Botero Museum in Bogota, Colombia입니다.",
  },
  // ============ 확충: 본문 문장 단답 (직접 입력) ============
  {
    id: "unit5-at1",
    type: "passage",
    mode: "typing",
    context: "He spoke only ______.",
    question: "빈칸에 들어갈 '영어'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["English"],
    explanation:
      "그는 영어만 말했습니다. 스페인어권 지역에서 '영어만 말함'은 중요한 단서였죠.",
  },
  {
    id: "unit5-at2",
    type: "passage",
    mode: "typing",
    context: "He had ______ eyes.",
    question: "빈칸에 들어갈 '파란'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["blue"],
    explanation: "그는 파란 눈(blue eyes)이었습니다.",
  },
  {
    id: "unit5-at3",
    type: "passage",
    mode: "typing",
    context: "I ran after him, but I couldn't ______ him.",
    question: "빈칸에 들어갈 '붙잡다'를 뜻하는 영어 동사 원형을 쓰세요.",
    accept: ["catch"],
    explanation: "catch는 '붙잡다'입니다. couldn't 다음에는 동사 원형이 옵니다.",
  },
  {
    id: "unit5-at4",
    type: "passage",
    mode: "typing",
    context: "in the Botero ______ in Bogota, Colombia.",
    question: "빈칸에 들어갈 '박물관'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["museum"],
    explanation: "박물관은 museum입니다.",
  },
  // ============ 확충: 문법 (선택) ============
  {
    id: "unit5-ga1",
    type: "grammar",
    question: "다음 중 '해서는 안 된다(금지)'를 뜻하는 표현은?",
    choices: ["must", "must not", "don't have to", "may"],
    answerIndex: 1,
    explanation:
      "must not은 금지, don't have to는 '할 필요가 없다'라는 뜻입니다.",
  },
  {
    id: "unit5-ga2",
    type: "grammar",
    question: "다음 빈칸에 알맞은 be동사의 과거형은?\n\nThere ______ an old man standing in front of me.",
    choices: ["were", "was", "are", "am"],
    answerIndex: 1,
    explanation: "an old man(단수)이므로 과거형 was가 맞습니다.",
  },
  // ============ 확충: 문법 단답 (직접 입력) ============
  {
    id: "unit5-gt7",
    type: "grammar",
    mode: "typing",
    question:
      "다음 괄호 안 동사를 과거형으로 바꿔 쓰세요.\n\nYesterday I (go) ______ to the museum.",
    accept: ["went"],
    explanation: "go의 과거형은 went입니다.",
  },
  {
    id: "unit5-gt8",
    type: "grammar",
    mode: "typing",
    question:
      "다음 빈칸에 알맞은 비교급을 쓰세요. (3음절 이상은 more를 붙여요)\n\nThis movie is (interesting) ______ than that one.",
    accept: ["more interesting"],
    explanation: "interesting은 음절이 길어 more interesting으로 비교급을 만듭니다.",
  },
  {
    id: "unit5-gt9",
    type: "grammar",
    mode: "typing",
    question:
      "다음 빈칸에 알맞은 비교급을 쓰세요.\n\nShe works (hard) ______ than me.",
    accept: ["harder"],
    explanation: "hard는 비교급이 harder입니다. (부사 hard의 비교급)",
  },
  // ============ 확충: 어휘 ============
  {
    id: "unit5-va1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "catch - 붙잡다",
      "throw - 던지다",
      "museum - 박물관",
      "fell - 가발",
    ],
    answerIndex: 3,
    explanation: "fell은 fall(떨어지다)의 과거형으로 '떨어졌다'입니다. 가발은 wig예요.",
  },
  {
    id: "unit5-vt4",
    type: "vocab",
    mode: "typing",
    question: "'던졌다'를 뜻하는 throw의 과거형을 쓰세요.",
    accept: ["threw"],
    explanation: "throw(던지다)의 과거형은 threw입니다.",
  },
  // ============ 확충: 대화문 ============
  {
    id: "unit5-da1",
    type: "dialogue",
    context:
      "A: ______ I wear a school uniform here?\nB: No, you don't have to. You can wear anything.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: [
      "Do I have to",
      "Must I not",
      "May I not",
      "Should I to",
    ],
    answerIndex: 0,
    explanation:
      "의무 여부를 묻는 Do I have to ~?이며, 'No, you don't have to.'로 대답합니다.",
  },
  {
    id: "unit5-da2",
    type: "dialogue",
    context: "A: May I sit here?\nB: ______",
    question: "허락해 주는 긍정 응답으로 알맞은 것은?",
    choices: [
      "Sure. Go ahead.",
      "No, you may not.",
      "Yes, you don't have to.",
      "Sorry, you must.",
    ],
    answerIndex: 0,
    explanation: "허락할 때는 Sure. / Go ahead. / Of course. 등을 씁니다.",
  },
  // ============ 대화문 ============
  {
    id: "unit5-d1",
    type: "dialogue",
    context:
      "A: Excuse me, but you must not talk on the phone here.\nB: I'm terribly sorry. I'll turn off my phone.\nA: You don't have to. Texting is OK.",
    question: "빈칸에 들어갈 말로 가장 알맞은 것은?\n\nA: You don't (A)______. Texting is OK.",
    choices: ["must", "have to", "may not", "can"],
    answerIndex: 1,
    explanation:
      "'~할 필요가 없다'는 don't have to입니다. (must not은 금지)",
  },
  {
    id: "unit5-d2",
    type: "dialogue",
    context:
      "A: May I touch this golden bear?\nB: No, you may not. You must not touch anything in this room.",
    question: "두 사람의 대화에서 '허락을 구하는 표현'으로 알맞은 것은?",
    choices: [
      "May I touch this golden bear?",
      "You must not touch it.",
      "You don't have to touch it.",
      "No, you may not.",
    ],
    answerIndex: 0,
    explanation: "허락을 구할 때는 May I ~? 로 표현합니다.",
  },
  {
    id: "unit5-d3",
    type: "dialogue",
    context:
      "A: (A)______ I use your phone for a minute?\nB: Sure. Here you are.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["Must", "May", "Should", "Could not"],
    answerIndex: 1,
    explanation:
      "정중하게 허락을 구할 때는 May I ~? 또는 Could I ~?를 씁니다.",
  },
  {
    id: "unit5-d4",
    type: "dialogue",
    context:
      "A: You (A)______ be quiet in the library.\nB: Okay, I will.",
    question: "'도서관에서 조용해야 한다'는 뜻으로 알맞은 것은?",
    choices: ["must not", "must", "don't have to", "have to not"],
    answerIndex: 1,
    explanation:
      "'~해야 한다'는 의무를 나타내는 must가 알맞습니다. must not은 금지예요.",
  },
  {
    id: "unit5-d5",
    type: "dialogue",
    context:
      "A: We (A)______ wear a uniform at school.\nB: Really? In our school, we can wear anything.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["have to", "must not", "don't have to", "may not"],
    answerIndex: 0,
    explanation:
      "학교에서 교복을 입어야 한다는 의무이므로 have to가 알맞습니다.",
  },
  // ============ 어휘 ============
  {
    id: "unit5-v1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "eyewitness - 목격자",
      "criminal - 범인",
      "janitor - 경비원",
      "guard - 경비원",
    ],
    answerIndex: 2,
    explanation: "janitor는 '청소부, 관리인'입니다. 경비원은 guard입니다.",
  },
  {
    id: "unit5-v2",
    type: "vocab",
    question: "'wig(가발)'과 같은 뜻의 우리말로 알맞은 것은?",
    choices: ["모자", "가발", "스카프", "안경"],
    answerIndex: 1,
    explanation: "wig는 '가발'입니다. 범인을 변장시킨 장치였죠.",
  },
  {
    id: "unit5-v3",
    type: "vocab",
    question: "'the Mona Lisa가 걸려 있던' 박물관을 뜻하는 영어 단어는?",
    choices: ["museum", "bakery", "theater", "hospital"],
    answerIndex: 0,
    explanation: "박물관은 museum입니다. bakery는 빵집입니다.",
  },
  {
    id: "unit5-v4",
    type: "vocab",
    question: "'케이크를 사는 가게'를 뜻하는 영어 단어는?",
    choices: ["school", "bakery", "library", "museum"],
    answerIndex: 1,
    explanation: "빵집은 bakery입니다. 카밀라가 일하던 곳이었죠.",
  },
  {
    id: "unit5-vt1",
    type: "vocab",
    mode: "typing",
    question: "'목격자'를 뜻하는 영어 단어를 쓰세요.\n\nAn e________ is someone who saw the crime.",
    accept: ["eyewitness"],
    explanation: "목격자는 eyewitness입니다.",
  },
  {
    id: "unit5-vt2",
    type: "vocab",
    mode: "typing",
    question: "'가짜 머리카락(가발)'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["wig"],
    explanation: "가발은 wig입니다.",
  },
  {
    id: "unit5-vt3",
    type: "vocab",
    mode: "typing",
    question:
      "'케이크 사건의 범인'에서 '범인'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["criminal"],
    explanation: "범인은 criminal입니다. eyewitness(목격자)와 대비되는 단어예요.",
  },
  // ============ 고난도 어법 선택형 (본문 빈칸) ============
  {
    id: "unit5-hf1",
    type: "grammar",
    context:
      "Ann: I'm about 170cm tall, and he was a little (  ) than me.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["tall", "taller", "tallest", "more taller"],
    answerIndex: 1,
    explanation:
      "than과 함께 비교급을 씁니다. tall의 비교급은 taller이며, more taller처럼 이중 비교급은 쓰지 않습니다.",
  },
  {
    id: "unit5-hf2",
    type: "grammar",
    context:
      "Camila: We had a lot of different cakes, but he just wanted the (  ) one.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (여러 개 중 가장 작은 것)",
    choices: ["small", "smaller", "smallest", "most small"],
    answerIndex: 2,
    explanation:
      "셋 이상 중 가장 작은 것을 고르므로 최상급 the smallest를 씁니다. one 앞에 the가 있으니 최상급이 자연스럽죠.",
  },
  {
    id: "unit5-hf3",
    type: "grammar",
    context:
      "Carlos: An old man was running away, and something (  ) off his head. It was his wig.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (과거 이야기)",
    choices: ["falls", "fell", "fallen", "is falling"],
    answerIndex: 1,
    explanation:
      "전체가 과거 시제 진술이므로 fall의 과거형 fell이 알맞습니다.",
  },
];