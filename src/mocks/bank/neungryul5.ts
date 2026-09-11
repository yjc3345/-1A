// 중1 능률(김기택) 5과 문제 은행: From the Self-Portrait to the Selfie (Enjoying Art)
// 교과서 본문(자화상과 셀피) + 재귀대명사 + 목적/이유의 to부정사 + What do you think of it? / I agree. 를
// 동아(윤)와 동일한 형식(이해선택/빈칸선택/단답/문법/대화/어휘)으로 반복 접하며 익힌다. (총 62문항)
import type { Question } from "../questions";
import { NEUNGRYUL5_PDF_QUESTIONS } from "./neungryul5Pdf";

export const NEUNGRYUL5_QUESTIONS: Question[] = [
  // ============ 본문 이해 (선택) 1~7 ============
  {
    id: "neungryul-unit5-p1",
    type: "passage",
    context:
      "Today, people enjoy taking selfies. We can capture special moments with them. Long ago, people captured their own image in a different way. They painted pictures of themselves.",
    question: "위 본문의 내용과 일치하지 않는 것은?",
    choices: [
      "오늘날 사람들은 셀피 찍는 것을 즐긴다.",
      "셀피로 특별한 순간을 포착할 수 있다.",
      "옛날에는 사람들이 자신의 모습을 그림으로 담았다.",
      "옛날 사람들도 셀피를 찍었다.",
    ],
    answerIndex: 3,
    explanation:
      "옛날 사람들은 셀피가 아니라 자화상(self-portrait)으로 자신의 모습을 담았습니다.",
  },
  {
    id: "neungryul-unit5-p2",
    type: "passage",
    context:
      "Selfies and self-portraits are similar. Both show our image at a certain time. When we look at them, we can remember ourselves from that time. They are like a diary.",
    question: "셀피와 자화상에 대한 설명으로 옳은 것은?",
    choices: [
      "셀피와 자화상은 전혀 다르다.",
      "둘 다 특정한 시간의 우리 모습을 보여준다.",
      "셀피는 일기장이고 자화상은 아니다.",
      "자화상은 기억을 되살리는 데 도움이 되지 않는다.",
    ],
    answerIndex: 1,
    explanation: "'Both show our image at a certain time.' 즉 둘 다 특정한 시간의 모습을 보여줍니다.",
  },
  {
    id: "neungryul-unit5-p3",
    type: "passage",
    context:
      "We take selfies to remember happy moments. Selfies capture the expressions on our faces at those times. We often look at selfies with our family and friends to bring back those joyful feelings.",
    question: "셀피를 찍는 까닭으로 가장 알맞은 것은?",
    choices: [
      "행복한 순간들을 기억하기 위해",
      "친구들에게 자랑하기 위해",
      "돈을 벌기 위해",
      "운동을 하기 위해",
    ],
    answerIndex: 0,
    explanation:
      "'We take selfies to remember happy moments.'에서 행복한 순간을 기억하려고 찍습니다.",
  },
  {
    id: "neungryul-unit5-p4",
    type: "passage",
    context:
      "Rembrandt looked in the mirror and painted himself many times. He painted around 90 self-portraits in his life. They show his face from youth to old age.",
    question: "렘브란트에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "거울을 보고 자신을 그렸다.",
      "자화상을 여러 번 그렸다.",
      "평생 약 90점의 자화상을 그렸다.",
      "자화상은 그의 늙은 얼굴만 보여준다.",
    ],
    answerIndex: 3,
    explanation:
      "'show his face from youth to old age' 즉 젊은 시절부터 노년까지의 얼굴을 보여줍니다.",
  },
  {
    id: "neungryul-unit5-p5",
    type: "passage",
    context:
      "Taking a selfie is easy. We can do it quickly with our camera at any time. However, painting a self-portrait takes some time.",
    question: "셀피와 자화상의 차이점으로 가장 알맞은 것은?",
    choices: [
      "셀피는 시간이 더 걸린다.",
      "자화상은 언제든지 쉽게 그릴 수 있다.",
      "셀피는 빠르게 찍을 수 있다.",
      "자화상은 돈이 전혀 들지 않는다.",
    ],
    answerIndex: 2,
    explanation: "'We can do it quickly with our camera'에서 셀피는 빠르게 찍을 수 있습니다.",
  },
  {
    id: "neungryul-unit5-p6",
    type: "passage",
    context:
      "To paint a person, a painter needs a model. Vincent van Gogh didn't have enough money for a model. So he painted himself!",
    question: "반 고흐가 자신을 그린 까닭으로 가장 알맞은 것은?",
    choices: [
      "자신의 얼굴이 가장 멋있어서",
      "모델에게 줄 돈이 충분하지 않아서",
      "다른 화가들이 그를 시켜서",
      "거울을 좋아해서",
    ],
    answerIndex: 1,
    explanation:
      "'didn't have enough money for a model' 즉 모델을 쓸 돈이 없어 스스로를 그렸습니다.",
  },
  {
    id: "neungryul-unit5-p7",
    type: "passage",
    context:
      "When he painted his self-portraits, he chose bright colors and applied a lot of paint. This became his unique style.",
    question: "반 고흐의 독특한 화풍으로 옳은 것은?",
    choices: [
      "어두운 색만 골랐다.",
      "밝은 색을 고르고 많은 물감을 발랐다.",
      "물감을 전혀 쓰지 않았다.",
      "모델을 많이 그렸다.",
    ],
    answerIndex: 1,
    explanation:
      "'chose bright colors and applied a lot of paint' 즉 밝은 색과 많은 물감이 특징입니다.",
  },
  // ============ 본문 어법 · 빈칸 채우기 (선택) 8~13 ============
  {
    id: "neungryul-unit5-pf1",
    type: "passage",
    context: "They painted pictures of (  ).",
    question: "빈칸에 들어갈 알맞은 재귀대명사는?",
    choices: ["them", "themselves", "themself", "theirselves"],
    answerIndex: 1,
    explanation:
      "주어(They)와 목적어가 같으므로 재귀대명사 themselves를 씁니다. 생략할 수 있는 목적어입니다.",
  },
  {
    id: "neungryul-unit5-pf2",
    type: "passage",
    context: "We take selfies to remember (  ) moments.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["happy", "sad", "boring", "scary"],
    answerIndex: 0,
    explanation:
      "'행복한 순간들을 기억하기 위해'라는 의미이므로 happy(행복한)가 알맞습니다.",
  },
  {
    id: "neungryul-unit5-pf3",
    type: "passage",
    context: "Rembrandt painted (  ) many times.",
    question: "빈칸에 들어갈 알맞은 재귀대명사는?",
    choices: ["him", "himself", "his", "he"],
    answerIndex: 1,
    explanation: "렘브란트가 자신을 그렸으므로 목적어 자리에 himself를 씁니다.",
  },
  {
    id: "neungryul-unit5-pf4",
    type: "passage",
    context: "To paint a person, a painter (  ) a model.",
    question: "빈칸에 들어갈 알맞은 동사는?",
    choices: ["needs", "wants", "has", "uses"],
    answerIndex: 0,
    explanation: "'화가는 모델이 필요하다'라는 뜻으로 need(필요하다)가 알맞습니다.",
  },
  {
    id: "neungryul-unit5-pf5",
    type: "passage",
    context: "Vincent van Gogh (  ) have enough money for a model.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["didn't", "doesn't", "don't", "isn't"],
    answerIndex: 0,
    explanation: "과거의 일이므로 부정의 did not(didn't)을 씁니다. → didn't have.",
  },
  {
    id: "neungryul-unit5-pf6",
    type: "passage",
    context: "We can express (  ) with selfies and self-portraits.",
    question: "빈칸에 들어갈 알맞은 재귀대명사는?",
    choices: ["us", "ourselves", "ours", "ourselves'"],
    answerIndex: 1,
    explanation:
      "'우리 자신을 표현하다'라는 뜻으로 express + ourselves가 자연스럽습니다.",
  },
  // ============ 본문 단답 (직접 입력) 14~18 ============
  {
    id: "neungryul-unit5-pt1",
    type: "passage",
    mode: "typing",
    context: "They painted pictures of (   ).",
    question: "빈칸에 들어갈 '그들 자신'을 뜻하는 재귀대명사를 쓰세요.",
    accept: ["themselves"],
    explanation: "they의 재귀대명사는 themselves입니다.",
  },
  {
    id: "neungryul-unit5-pt2",
    type: "passage",
    mode: "typing",
    context: "Rembrandt painted (   ) many times.",
    question: "빈칸에 들어갈 '그 자신'을 뜻하는 재귀대명사를 쓰세요.",
    accept: ["himself"],
    explanation: "he의 재귀대명사는 himself입니다.",
  },
  {
    id: "neungryul-unit5-pt3",
    type: "passage",
    mode: "typing",
    context: "This became his (   ) style.",
    question: "빈칸에 들어갈 '독특한'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["unique"],
    explanation: "unique(독특한)는 반 고흐의 화풍을 설명하는 단어입니다.",
  },
  {
    id: "neungryul-unit5-pt4",
    type: "passage",
    mode: "typing",
    context: "To paint a person, a painter needs a (   ).",
    question: "빈칸에 들어갈 '모델'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["model"],
    explanation: "모델은 model입니다.",
  },
  {
    id: "neungryul-unit5-pt5",
    type: "passage",
    mode: "typing",
    context: "These pictures are (   ). (자화상)",
    question: "빈칸에 들어갈 '자화상'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["self-portraits", "self portraits"],
    explanation: "자화상은 self-portrait, 복수는 self-portraits입니다.",
  },
  // ============ 문법 (선택) 19~24 ============
  {
    id: "neungryul-unit5-g1",
    type: "grammar",
    context: "To paint a person, a painter needs a model. ( To paint )",
    question: "밑줄 친 To paint의 쓰임으로 올바른 것은?",
    choices: [
      "목적을 나타내는 부사적 용법",
      "주어로 쓰인 명사적 용법",
      "보어로 쓰인 명사적 용법",
      "형용사적 용법",
    ],
    answerIndex: 0,
    explanation: "'~하기 위해'라는 목적을 나타내는 부사적 용법의 to부정사입니다.",
  },
  {
    id: "neungryul-unit5-g2",
    type: "grammar",
    context:
      "We take selfies ( to remember ) happy moments.",
    question: "밑줄 친 to remember의 쓰임과 같은 것은?",
    choices: [
      "I studied hard to pass the exam.",
      "To know him is to love him.",
      "My hobby is to draw.",
      "I want to sleep.",
    ],
    answerIndex: 0,
    explanation:
      "'~하기 위해'(목적)라는 부사적 용법의 to부정사입니다. ①도 시험에 합격하기 위해라는 목적입니다.",
  },
  {
    id: "neungryul-unit5-g3",
    type: "grammar",
    question: "어법상 틀린 문장은?",
    choices: [
      "I looked at myself in the mirror.",
      "They painted pictures of themselves.",
      "She made this cake herself.",
      "We enjoyed ourself at the party.",
    ],
    answerIndex: 3,
    explanation: "We는 복수이므로 ourselves가 맞습니다. 'enjoy ourselves(~을 즐기다)'입니다.",
  },
  {
    id: "neungryul-unit5-g4",
    type: "grammar",
    question: "다음 중 재귀대명사를 생략할 수 있는 문장은?",
    choices: [
      "I hurt myself.",
      "She introduced herself to us.",
      "He painted himself.",
      "My dad made this chair himself.",
    ],
    answerIndex: 3,
    explanation:
      "'직접, 스스로'라는 강조 용법의 재귀대명사는 생략할 수 있습니다. 나머지는 목적어로 필수예요.",
  },
  {
    id: "neungryul-unit5-g5",
    type: "grammar",
    question: "어법상 옳은 문장은?",
    choices: [
      "They enjoyed himself at the concert.",
      "We express ourselves with art.",
      "She did it herself? No, I did.",
      "I hurt hisself while cooking.",
    ],
    answerIndex: 1,
    explanation:
      "We와 대응하는 재귀대명사는 ourselves이며 'express ourselves(우리 자신을 표현하다)'가 자연스럽습니다.",
  },
  {
    id: "neungryul-unit5-g6",
    type: "grammar",
    question: "다음 빈칸에 들어갈 알맞은 단어는?\n\nThey painted pictures of ______.",
    choices: ["them", "themselves", "theirselves", "they"],
    answerIndex: 1,
    explanation: "주어(they)와 목적어가 같으므로 재귀대명사 themselves를 씁니다.",
  },
  // ============ 문법 단답 (직접 입력) 25~28 ============
  {
    id: "neungryul-unit5-gt1",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 재귀대명사를 쓰세요.\n\nWe enjoyed ______ at the festival.",
    accept: ["ourselves"],
    explanation: "we의 재귀대명사는 ourselves입니다.",
  },
  {
    id: "neungryul-unit5-gt2",
    type: "grammar",
    mode: "typing",
    question: "'~하기 위해'라는 목적의 to부정사를 이용해 빈칸을 채우세요.\n\nI studied hard ______ pass the exam.",
    accept: ["to"],
    explanation: "목적을 나타내는 부사적 용법의 to부정사는 to + 동사원형입니다.",
  },
  {
    id: "neungryul-unit5-gt3",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 재귀대명사를 쓰세요.\n\nShe looked at ______ in the mirror.",
    accept: ["herself"],
    explanation: "she의 재귀대명사는 herself입니다.",
  },
  {
    id: "neungryul-unit5-gt4",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 재귀대명사를 쓰세요.\n\nThe children cleaned the room ______. (스스로)",
    accept: ["themselves"],
    explanation: "the children(3인칭 복수)의 재귀대명사는 themselves입니다.",
  },
  // ============ 대화문 (선택) 29~32 ============
  {
    id: "neungryul-unit5-d1",
    type: "dialogue",
    context:
      "A: What do you think of this painting?\nB: I think it's beautiful.\nA: ______ I like the colors too.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["I agree.", "I don't agree.", "No, thanks.", "Of course not."],
    answerIndex: 0,
    explanation: "상대 의견에 동의하므로 I agree.(나도 동의해)가 자연스럽습니다.",
  },
  {
    id: "neungryul-unit5-d2",
    type: "dialogue",
    context:
      "A: What do you think of this painting?\nB: I think it's strange.\nA: ______ The woman's face looks like a puzzle.\nB: Yes. But I like it. It's very colorful.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["I don't think so.", "I agree.", "You're wrong.", "I have no idea."],
    answerIndex: 1,
    explanation: "B의 의견(이상하다)에 동의하는 표현으로 I agree.가 알맞습니다.",
  },
  {
    id: "neungryul-unit5-d3",
    type: "dialogue",
    context:
      "A: What do you think of this ring?\nB: Wow, it's an old ring.\nA: I think it's pretty.\nB: ______",
    question: "상대 의견에 동의하는 응답으로 알맞은 것은?",
    choices: ["I agree.", "I don't agree.", "I'm sorry.", "Let's go."],
    answerIndex: 0,
    explanation: "상대의 의견(예쁘다)에 동의하므로 I agree.가 자연스럽습니다.",
  },
  {
    id: "neungryul-unit5-d4",
    type: "dialogue",
    context:
      "A: What do you think of The Snail?\nB: I think it's colorful and funny.\nA: ______ I think it's boring.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["I agree.", "I don't agree.", "Same here.", "Me too."],
    answerIndex: 1,
    explanation: "뒤에 '난 지루하다고 생각해'라는 반대 의견이 이어지므로 I don't agree.가 알맞습니다.",
  },
  // ============ 대화 단답 (직접 입력) 33~34 ============
  {
    id: "neungryul-unit5-dt1",
    type: "dialogue",
    mode: "typing",
    context: "A: (   ) do you think of this painting?\nB: I think it's great.",
    question: "'~에 대해 어떻게 생각하니?'라고 묻는 의문사를 쓰세요.",
    accept: ["what"],
    explanation: "What do you think of ~?는 '~에 대해 어떻게 생각하니?'입니다.",
  },
  {
    id: "neungryul-unit5-dt2",
    type: "dialogue",
    mode: "typing",
    context:
      "A: What do you think of this movie?\nB: I (   ) it's boring.",
    question: "빈칸에 들어갈 '~라고 생각하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["think"],
    explanation: "'~라고 생각하다'는 think입니다. I think it's boring.",
  },
  // ============ 어휘 (선택) 35~38 ============
  {
    id: "neungryul-unit5-v1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "capture - 포착하다",
      "similar - 비슷한",
      "unique - 독특한",
      "applied - 선택하다",
    ],
    answerIndex: 3,
    explanation: "applied는 apply(바르다)의 과거형으로 '발랐다'입니다. 선택하다는 choose예요.",
  },
  {
    id: "neungryul-unit5-v2",
    type: "vocab",
    question: "'자신의 모습(자아)을 그린 초상화'의 뜻으로 알맞은 것은?",
    choices: [
      "self-portrait",
      "photograph",
      "landscape",
      "still life",
    ],
    answerIndex: 0,
    explanation: "self-portrait은 화가가 자신을 그린 그림, 즉 자화상입니다.",
  },
  {
    id: "neungryul-unit5-v3",
    type: "vocab",
    question: "'밝은 색'에서 '밝은'을 뜻하는 단어로 알맞은 것은?",
    choices: ["bright", "dark", "scary", "soft"],
    answerIndex: 0,
    explanation: "'bright(밝은)'는 반 고흐가 자화상에 사용한 색을 설명합니다.",
  },
  {
    id: "neungryul-unit5-v4",
    type: "vocab",
    question: "'~처럼 보이다'를 뜻하는 표현으로 알맞은 것은?",
    choices: ["look like", "look at", "look after", "look for"],
    answerIndex: 0,
    explanation: "look like + 명사는 '~처럼 보이다'입니다. ('~처럼'이라는 뜻의 like)",
  },
  // ============ 어휘 단답 (직접 입력) 39~42 ============
  {
    id: "neungryul-unit5-vt1",
    type: "vocab",
    mode: "typing",
    question: "'비슷한'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["similar"],
    explanation: "similar(비슷한)는 셀피와 자화상의 공통점을 설명하는 단어입니다.",
  },
  {
    id: "neungryul-unit5-vt2",
    type: "vocab",
    mode: "typing",
    question: "'감정'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["emotion", "emotions"],
    explanation: "감정은 emotion입니다. 화가들이 색으로 감정을 표현해요.",
  },
  {
    id: "neungryul-unit5-vt3",
    type: "vocab",
    mode: "typing",
    question: "'표정'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["expression", "expressions"],
    explanation: "표정은 expression입니다. 셀피는 표정을 포착합니다.",
  },
  {
    id: "neungryul-unit5-vt4",
    type: "vocab",
    mode: "typing",
    question: "'독특한'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["unique"],
    explanation: "unique(독특한)는 반 고흐의 화풍을 가리키는 단어입니다.",
  },
  // ============ 확충: 본문 이해 (선택) 43~46 ============
  {
    id: "neungryul-unit5-a1",
    type: "passage",
    context:
      "We often look at selfies with our family and friends to bring back those joyful feelings. Similarly, some painters made self-portraits to capture different times in their lives.",
    question: "화가들이 자화상을 그린 까닭으로 가장 알맞은 것은?",
    choices: [
      "인생의 서로 다른 시기를 포착하기 위해",
      "돈을 벌기 위해",
      "남에게 자랑하기 위해",
      "시간을 보내기 위해",
    ],
    answerIndex: 0,
    explanation:
      "'some painters made self-portraits to capture different times in their lives'에서 인생의 다른 시기를 포착하기 위해 그렸습니다.",
  },
  {
    id: "neungryul-unit5-a2",
    type: "passage",
    context:
      "He painted around 90 self-portraits in his life. They show his face from youth to old age.",
    question: "렘브란트의 자화상들이 보여주는 것은?",
    choices: [
      "젊은 시절부터 노년까지의 얼굴",
      "오직 어린 시절의 얼굴",
      "친구들의 얼굴",
      "풍경만",
    ],
    answerIndex: 0,
    explanation: "'from youth to old age' 즉 젊음부터 노년까지의 얼굴을 보여줍니다.",
  },
  {
    id: "neungryul-unit5-a3",
    type: "passage",
    context:
      "Also, a self-portrait shows a painter's personal painting style.",
    question: "자화상이 보여주는 것에 대한 설명으로 옳은 것은?",
    choices: [
      "화가 개인의 화풍",
      "그 시대의 유행",
      "모델의 취향",
      "박물관의 위치",
    ],
    answerIndex: 0,
    explanation: "'a painter's personal painting style' 즉 화가 개인의 화풍을 보여줍니다.",
  },
  {
    id: "neungryul-unit5-a4",
    type: "passage",
    context:
      "Vincent van Gogh didn't have enough money for a model. So he painted himself! When he painted his self-portraits, he chose bright colors and applied a lot of paint.",
    question: "본문의 내용과 일치하지 않는 것은?",
    choices: [
      "반 고흐는 모델을 쓸 돈이 없었다.",
      "반 고흐는 밝은 색을 골랐다.",
      "반 고흐는 많은 물감을 발랐다.",
      "반 고흐는 유명한 모델을 그렸다.",
    ],
    answerIndex: 3,
    explanation:
      "반 고흐는 돈이 없어 모델이 아닌 자신을 그렸습니다. 모델을 그리지 않았어요.",
  },
  // ============ 확충: 본문 단답 (직접 입력) 47~49 ============
  {
    id: "neungryul-unit5-at1",
    type: "passage",
    mode: "typing",
    context: "Rembrandt looked in the (   ) and painted himself.",
    question: "빈칸에 들어갈 '거울'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["mirror"],
    explanation: "거울은 mirror입니다. look in the mirror는 '거울을 보다'라는 뜻이죠.",
  },
  {
    id: "neungryul-unit5-at2",
    type: "passage",
    mode: "typing",
    context: "This became his (   ) style.",
    question: "빈칸에 들어갈 '독특한'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["unique"],
    explanation: "unique(독특한)는 반 고흐만의 화풍을 말합니다.",
  },
  {
    id: "neungryul-unit5-at3",
    type: "passage",
    mode: "typing",
    context: "He is taking a selfie. He wants to (   ) the moment.",
    question: "빈칸에 들어갈 '포착하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["capture"],
    explanation: "capture는 '포착하다, 붙잡다'입니다. 특별한 순간을 포착하죠.",
  },
  // ============ 확충: 문법 (선택) 50~53 ============
  {
    id: "neungryul-unit5-ga1",
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
  {
    id: "neungryul-unit5-ga2",
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
    id: "neungryul-unit5-ga3",
    type: "grammar",
    question: "어법상 올바른 문장은?",
    choices: [
      "I enjoyed himself at the party.",
      "She hurt hisself while cooking.",
      "They painted pictures of themselves.",
      "We looked at myself in the mirror.",
    ],
    answerIndex: 2,
    explanation:
      "③은 주어 they에 대응하는 재귀대명사 themselves로 올바릅니다. 나머지는 주어와 재귀대명사가 일치하지 않아 틀립니다.",
  },
  {
    id: "neungryul-unit5-ga4",
    type: "grammar",
    question: "밑줄 친 to부정사의 부사적 용법에서의 쓰임으로 알맞은 것은?\n\nI am (happy to see you).",
    choices: [
      "감정의 원인",
      "목적",
      "결과",
      "판단의 근거",
    ],
    answerIndex: 0,
    explanation:
      "'만나서 기쁘다'에서 감정의 원인을 나타내는 부사적 용법의 to부정사입니다. (참고: '~하기 위해'는 목적입니다)",
  },
  // ============ 확충: 문법 단답 (직접 입력) 54~56 ============
  {
    id: "neungryul-unit5-gat1",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 재귀대명사를 쓰세요.\n\nHe made this model airplane ______. (스스로)",
    accept: ["himself"],
    explanation: "강조 용법의 재귀대명사 himself가 문장 끝에 온 경우입니다.",
  },
  {
    id: "neungryul-unit5-gat2",
    type: "grammar",
    mode: "typing",
    question: "'~하기 위해'라는 목적의 to부정사를 쓰세요.\n\nI went to the store ______ buy some apples.",
    accept: ["to"],
    explanation: "목적을 나타내는 to부정사는 to + 동사원형입니다.",
  },
  {
    id: "neungryul-unit5-gat3",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 재귀대명사를 쓰세요.\n\nYou can do it ______. (너 스스로)",
    accept: ["yourself"],
    explanation: "you(단수)의 재귀대명사는 yourself입니다.",
  },
  // ============ 확충: 어휘 57~58 ============
  {
    id: "neungryul-unit5-va1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "around - 약, ~쯤",
      "however - 그러나",
      "enough - 충분한",
      "museum - 극장",
    ],
    answerIndex: 3,
    explanation: "museum은 '박물관, 미술관'입니다. 극장은 theater예요.",
  },
  {
    id: "neungryul-unit5-va2",
    type: "vocab",
    question: "'지난 일을 되새기다'를 뜻하는 구동사로 알맞은 것은?",
    choices: ["bring back", "look at", "go out", "get up"],
    answerIndex: 0,
    explanation: "bring back은 '~을 기억나게 하다'라는 뜻의 구동사입니다.",
  },
  // ============ 확충: 어휘 단답 (직접 입력) 59~60 ============
  {
    id: "neungryul-unit5-vat1",
    type: "vocab",
    mode: "typing",
    question: "'그러나'를 뜻하는 접속부사를 영어로 쓰세요.",
    accept: ["however"],
    explanation: "however(그러나)는 셀피와 자화상의 차이점을 말할 때 쓰였습니다.",
  },
  {
    id: "neungryul-unit5-vat2",
    type: "vocab",
    mode: "typing",
    question: "'충분한'을 뜻하는 영어 형용사를 쓰세요.",
    accept: ["enough"],
    explanation: "enough(충분한)는 '충분한 돈(enough money)'처럼 쓰입니다.",
  },
  // ============ 확충: 대화문 61~62 ============
  {
    id: "neungryul-unit5-da1",
    type: "dialogue",
    context:
      "A: What do you think of this movie?\nB: I think it's boring.\nA: ______\nB: Right. Let's watch another one.",
    question: "빈칸에 들어갈 알맞은 동의 응답은?",
    choices: ["I think so, too.", "I don't know.", "Sorry.", "Of course not."],
    answerIndex: 0,
    explanation: "상대의 의견(지루하다)에 동의하는 표현이므로 I think so, too.가 자연스럽습니다.",
  },
  {
    id: "neungryul-unit5-da2",
    type: "dialogue",
    mode: "typing",
    context: "A: I think the painting is strange.\nB: I (   ). I think it's beautiful.",
    question: "'동의하지 않는다'는 뜻의 표현을 쓰세요. (긍정문 2단어)",
    accept: ["don't agree"],
    explanation: "'~에 동의하지 않다'는 don't agree입니다.",
  },
  // ============ 고난도 어법 선택형 (본문 빈칸) 63~ ============
  {
    id: "neungryul-unit5-hf1",
    type: "grammar",
    context:
      "To paint a person, a painter needs a model. Vincent van Gogh didn't have enough money for a model. So he painted (  )!",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["him", "himself", "his", "he"],
    answerIndex: 1,
    explanation:
      "주어(he)와 목적어가 같은 사람이므로 재귀대명사 himself를 씁니다. him을 쓰면 '다른 남자를 그렸다'는 뜻이 돼 틀립니다.",
  },
  {
    id: "neungryul-unit5-hf2",
    type: "grammar",
    context:
      "We take selfies (  ) remember happy moments. Selfies capture the expressions on our faces.",
    question: "빈칸에 들어갈 말로 알맞은 것은? (밑줄 친 부분은 '목적'을 나타냅니다)",
    choices: ["for", "to", "so", "and"],
    answerIndex: 1,
    explanation:
      "'~하기 위해'라는 목적은 부사적 용법의 to부정사(to + 동사원형)로 나타냅니다. → to remember.",
  },
  {
    id: "neungryul-unit5-hf3",
    type: "grammar",
    context:
      "Selfies and self-portraits are similar. When we look at them, we can remember (  ) from that time.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["us", "our", "ourselves", "ours"],
    answerIndex: 2,
    explanation:
      "주어(we)와 목적어가 같으므로 재귀대명사 ourselves를 씁니다. 'remember ourselves(우리 자신을 떠올리다)'.",
  },
  {
    id: "neungryul-unit5-hf4",
    type: "grammar",
    context:
      "① Rembrandt looked in the mirror and painted (  ) many times. ② He painted around 90 self-portraits.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["he", "his", "him", "himself"],
    answerIndex: 3,
    explanation:
      "널브란트가 그린 대상이 '자신'이므로 재귀대명사 himself가 알맞습니다.",
  },
  ...NEUNGRYUL5_PDF_QUESTIONS,
];
