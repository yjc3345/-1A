// 중1 능률(김기택) 6과 문제 은행: Happy Hangeul Day (Amazing Korea)
// 교과서 본문(한글날 인터뷰) + 지각동사(look/sound + 형용사, look like) + because/because of +
// What is ~? / Why don't we ~? 를 동아(윤)와 동일한 형식으로 반복 접하며 익힌다. (총 62문항)
import type { Question } from "../questions";

export const NEUNGRYUL6_QUESTIONS: Question[] = [
  // ============ 본문 이해 (선택) 1~7 ============
  {
    id: "neungryul-unit6-p1",
    type: "passage",
    context:
      "Today is October 9, a special day for Hangeul, the Korean alphabet. I'm at a Hangeul festival now. People are enjoying fun activities here. They look happy and excited.",
    question: "위 본문의 내용과 일치하는 것은?",
    choices: [
      "10월 9일은 한글을 기념하는 특별한 날이다.",
      "리포터는 내일 한글 축제에 간다.",
      "사람들은 축제에서 슬퍼 보인다.",
      "한글은 영어 알파벳이다.",
    ],
    answerIndex: 0,
    explanation:
      "'Today is October 9, a special day for Hangeul'에서 10월 9일의 특별한 날이라고 했습니다.",
  },
  {
    id: "neungryul-unit6-p2",
    type: "passage",
    context:
      "Pueng: I like Hangeul because it is easy to learn. I learned the 24 letters of Hangeul, and I am able to read any Korean word now.",
    question: "Pueng에 대한 설명으로 옳지 않은 것은?",
    choices: [
      "한글이 배우기 쉬워서 좋아한다.",
      "한글 24자를 배웠다.",
      "이제 어떤 한국어 단어든 읽을 수 있다.",
      "한글을 배우는 데 매우 오래 걸렸다.",
    ],
    answerIndex: 3,
    explanation:
      "본문에는 배우는 데 오래 걸렸다는 내용이 없습니다. 오히려 'easy to learn'이라 했습니다.",
  },
  {
    id: "neungryul-unit6-p3",
    type: "passage",
    context:
      "Anna: The shapes of Hangeul look unique and beautiful. I like the Korean word for Switzerland, 'seu-wi-seu'. It looks like a soldier between two mountains.",
    question: "Anna가 'seu-wi-seu'를 좋아하는 까닭으로 가장 알맞은 것은?",
    choices: [
      "산 사이에 선 병사처럼 보여서",
      "발음하기 쉬워서",
      "글자가 예뻐서",
      "스위스가 유명해서",
    ],
    answerIndex: 0,
    explanation:
      "'It looks like a soldier between two mountains.' 즉 두 산 사이에 선 병사처럼 보이기 때문입니다.",
  },
  {
    id: "neungryul-unit6-p4",
    type: "passage",
    context:
      "William: I like Hangeul because its history is amazing. A long time ago, most Koreans couldn't read or write. King Sejong felt bad about this, so he created a new alphabet for his people.",
    question: "세종대왕이 새 문자를 만든 까닭으로 가장 알맞은 것은?",
    choices: [
      "한국인들이 읽고 쓸 수 없어서 안타까워서",
      "글자를 예쁘게 만들고 싶어서",
      "외국인에게 자랑하기 위해",
      "먹을 것이 필요해서",
    ],
    answerIndex: 0,
    explanation:
      "대부분의 한국인이 읽고 쓸 수 없다는 사실에 안타까워(King Sejong felt bad about this) 새 문자를 만들었습니다.",
  },
  {
    id: "neungryul-unit6-p5",
    type: "passage",
    context:
      "Pueng: I'm a big fan of K-pop songs. Because I wanted to sing Korean songs, I started learning Hangeul.",
    question: "Pueng이 한글을 배우기 시작한 까닭은?",
    choices: [
      "한국 노래를 부르고 싶어서",
      "한국에서 살고 싶어서",
      "한국 친구가 생겨서",
      "시험을 준비하기 위해",
    ],
    answerIndex: 0,
    explanation:
      "'Because I wanted to sing Korean songs' 즉 한국 노래를 부르고 싶어서 한글을 배우기 시작했습니다.",
  },
  {
    id: "neungryul-unit6-p6",
    type: "passage",
    context:
      "Anna: I was interested in using Hangeul in my designs. So I studied the shapes of Hangeul. I can make unique patterns for clothes with Hangeul.",
    question: "Anna가 할 수 있는 것으로 알맞은 것은?",
    choices: [
      "한글로 옷의 독특한 패턴을 만들 수 있다.",
      "한국 노래를 부를 수 있다.",
      "한글의 역사를 가르칠 수 있다.",
      "한국어를 통역할 수 있다.",
    ],
    answerIndex: 0,
    explanation:
      "'I can make unique patterns for clothes with Hangeul.' 즉 옷 패턴을 만들 수 있다고 했습니다.",
  },
  {
    id: "neungryul-unit6-p7",
    type: "passage",
    context:
      "William: I wanted to teach the science of Hangeul to my students. Some letters look like the shape of the mouth and tongue for their sounds. King Sejong made it that way. It's very scientific.",
    question: "윌리엄이 가르치고 싶어 한 것은?",
    choices: [
      "한글의 과학적 원리",
      "한글 노래 부르기",
      "한국 요리",
      "한국 춤",
    ],
    answerIndex: 0,
    explanation: "'teach the science of Hangeul' 즉 한글의 과학을 가르치고 싶어 했습니다.",
  },
  // ============ 본문 어법 · 빈칸 채우기 (선택) 8~13 ============
  {
    id: "neungryul-unit6-pf1",
    type: "passage",
    context: "They look (  ) and excited.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["happy", "happily", "happiness", "happy is"],
    answerIndex: 0,
    explanation: "look은 주격 보어로 형용사를 취합니다. look + 형용사(happy)입니다.",
  },
  {
    id: "neungryul-unit6-pf2",
    type: "passage",
    context: "The shapes of Hangeul look (  ) and beautiful.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["unique", "uniquely", "uniqueness", "unique is"],
    answerIndex: 0,
    explanation: "look + 형용사 구조로, beautiful과 나란히 형용사 unique가 와야 합니다.",
  },
  {
    id: "neungryul-unit6-pf3",
    type: "passage",
    context: "It (  ) like a soldier between two mountains.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["looks", "looks like", "look at", "looking"],
    answerIndex: 1,
    explanation: "'~처럼 보이다'라는 뜻은 look like + 명사 구조입니다.",
  },
  {
    id: "neungryul-unit6-pf4",
    type: "passage",
    context: "I like Hangeul (  ) it is easy to learn.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["because", "because of", "so", "but"],
    answerIndex: 0,
    explanation: "'그 이유는'이라는 뜻으로, 뒤에 주어+동사의 절이 오므로 접속사 because가 맞습니다.",
  },
  {
    id: "neungryul-unit6-pf5",
    type: "passage",
    context: "King Sejong felt bad (  ) this.",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["because", "because of", "so", "although"],
    answerIndex: 1,
    explanation: "뒤에 명사(this)가 오므로 '~때문에'라는 전치사구 because of를 씁니다.",
  },
  {
    id: "neungryul-unit6-pf6",
    type: "passage",
    context: "People are enjoying fun (  ) here.",
    question: "빈칸에 들어갈 알맞은 단어는?",
    choices: ["activities", "activity", "actives", "active"],
    answerIndex: 0,
    explanation: "'재미있는 활동들'이라는 뜻으로 복수 명사 activities가 알맞습니다.",
  },
  // ============ 본문 단답 (직접 입력) 14~18 ============
  {
    id: "neungryul-unit6-pt1",
    type: "passage",
    mode: "typing",
    context: "They look (   ) and excited.",
    question: "빈칸에 들어갈 '행복한'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["happy"],
    explanation: "look + 형용사 구조로 happy(행복한)가 알맞습니다.",
  },
  {
    id: "neungryul-unit6-pt2",
    type: "passage",
    mode: "typing",
    context: "I am (   ) to read any Korean word now.",
    question: "빈칸에 들어갈 '~할 수 있는'을 뜻하는 표현을 쓰세요. (can과 같은 뜻)",
    accept: ["able"],
    explanation: "be able to + 동사원형은 '~할 수 있다'라는 뜻으로 can과 같습니다.",
  },
  {
    id: "neungryul-unit6-pt3",
    type: "passage",
    mode: "typing",
    context: "A long time ago, most Koreans couldn't read or (   ).",
    question: "빈칸에 들어갈 '쓰다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["write"],
    explanation: "read or write에서 write(쓰다)가 알맞습니다.",
  },
  {
    id: "neungryul-unit6-pt4",
    type: "passage",
    mode: "typing",
    context: "King Sejong (   ) a new alphabet for his people.",
    question: "빈칸에 들어갈 '만들었다(create)'의 과거형을 쓰세요.",
    accept: ["created"],
    explanation: "create(창조하다, 만들다)의 과거형은 created입니다.",
  },
  {
    id: "neungryul-unit6-pt5",
    type: "passage",
    mode: "typing",
    context: "I'm going to (   ) three Hangeul lovers.",
    question: "빈칸에 들어갈 '인터뷰하다'를 뜻하는 영어 동사를 쓰세요.",
    accept: ["interview"],
    explanation: "interview는 '인터뷰하다'입니다. 세 명의 한글 애호가를 인터뷰할 예정이죠.",
  },
  // ============ 문법 (선택) 19~24 ============
  {
    id: "neungryul-unit6-g1",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nThis soup tastes ______.",
    choices: ["good", "well", "goods", "goodly"],
    answerIndex: 0,
    explanation: "taste는 주격 보어로 형용사를 취하므로 good이 알맞습니다. (well은 '잘'이라는 부사)",
  },
  {
    id: "neungryul-unit6-g2",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nThe music sounds ______.",
    choices: ["great", "greatly", "greatness", "greater"],
    answerIndex: 0,
    explanation: "sound + 형용사: '~하게 들리다'. great(좋다, 멋지다)가 알맞습니다.",
  },
  {
    id: "neungryul-unit6-g3",
    type: "grammar",
    question: "어법상 틀린 문장은?",
    choices: [
      "The flowers smell good.",
      "She looks happy.",
      "The cake tastes sweetly.",
      "That sounds great.",
    ],
    answerIndex: 2,
    explanation:
      "taste는 형용사를 취하므로 sweetly가 아니라 sweet가 맞습니다. → tastes sweet.",
  },
  {
    id: "neungryul-unit6-g4",
    type: "grammar",
    question:
      "빈칸에 because 또는 because of 중 알맞은 것은?\n\nHe stayed home ______ the heavy rain.",
    choices: ["because", "because of", "so", "but"],
    answerIndex: 1,
    explanation: "뒤에 명사(the heavy rain)가 오므로 전치사구 because of가 맞습니다.",
  },
  {
    id: "neungryul-unit6-g5",
    type: "grammar",
    question: "빈칸에 because 또는 because of 중 알맞은 것은?\n\nI like Hangeul ______ it is easy to learn.",
    choices: ["because", "because of", "so", "but"],
    answerIndex: 0,
    explanation:
      "뒤에 주어+동사의 절(it is easy to learn)이 오므로 접속사 because가 맞습니다.",
  },
  {
    id: "neungryul-unit6-g6",
    type: "grammar",
    question: "다음 빈칸에 알맞은 단어는?\n\nThat man is wearing a unique hat. It ______ nice.",
    choices: ["looks", "looks like", "looking", "look"],
    answerIndex: 0,
    explanation: "look + 형용사(nice) 구조로 looks가 알맞습니다. (look like는 뒤에 명사가 와요)",
  },
  // ============ 문법 단답 (직접 입력) 25~28 ============
  {
    id: "neungryul-unit6-gt1",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 단어를 쓰세요.\n\nThey (look) ______ happy.",
    accept: ["look"],
    explanation: "look이 그대로 쓰이며 그 뒤에 형용사 happy가 옵니다.",
  },
  {
    id: "neungryul-unit6-gt2",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 because 또는 because of 중 알맞은 것을 쓰세요.\n\nI was late ______ the traffic.",
    accept: ["because of"],
    explanation: "뒤에 명사(the traffic)가 오므로 because of가 알맞습니다.",
  },
  {
    id: "neungryul-unit6-gt3",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞게 쓰세요.\n\nShe (look) ______ like a princess.",
    accept: ["looks"],
    explanation: "looks like + 명사(a princess)로 '~처럼 보이다'입니다. 주어가 3인칭 단수이므로 looks입니다.",
  },
  {
    id: "neungryul-unit6-gt4",
    type: "grammar",
    mode: "typing",
    question: "'~하게 들리다'라는 뜻으로 쓰일 때 sound 뒤에는 명사가 아니라 ______(품사)가 와야 합니다. 알맞은 품사를 영어로 쓰세요.",
    accept: ["adjective", "형용사", "adjective(형용사)"],
    explanation: "sound/taste/look/smell 등 지각동사 뒤에는 형용사가 옵니다.",
  },
  // ============ 대화문 (선택) 29~32 ============
  {
    id: "neungryul-unit6-d1",
    type: "dialogue",
    context:
      "A: What is nongak?\nB: It is traditional Korean music.\nA: ______ we go and watch them?\nB: That sounds great!",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["Why don't", "What about", "How about", "Shall"],
    answerIndex: 0,
    explanation: "'~하자'라는 제안 명령문 Why don't we + 동사원형?이 자연스럽습니다.",
  },
  {
    id: "neungryul-unit6-d2",
    type: "dialogue",
    context:
      "A: What is nongak?\nB: It is traditional Korean music. Look at the performers' colorful clothes!\nA: Wow, ______\nB: Yeah. They even dance and play at the same time.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: [
      "their clothes look nice.",
      "their clothes look nicely.",
      "their clothes looking nice.",
      "their clothes are look nice.",
    ],
    answerIndex: 0,
    explanation:
      "감각동사 look 뒤에는 형용사가 옵니다. look + nice(형용사)가 맞고, 부사 nicely나 어법에 맞지 않는 나머지는 틀립니다.",
  },
  {
    id: "neungryul-unit6-d3",
    type: "dialogue",
    context:
      "A: What is tuho?\nB: It's a traditional Korean game. You throw sticks into a pot. Then you get points.\nA: It looks fun! ______ play it.\nB: Okay!",
    question: "빈칸에 들어갈 알맞은 표현은?",
    choices: ["Let's", "Why don't you", "What about", "How about"],
    answerIndex: 0,
    explanation: "'~하자'는 Let's + 동사원형(~하자)으로 표현합니다.",
  },
  {
    id: "neungryul-unit6-d4",
    type: "dialogue",
    context:
      "A: What is yunnori?\nB: It's a traditional Korean board game. It's simple. You just throw four sticks, and they decide your moves.\nA: Why don't we play the game?\nB: ______ That sounds fun!",
    question: "빈칸에 들어갈 알맞은 긍정 응답은?",
    choices: ["Okay.", "I'm sorry.", "No, thanks.", "I can't."],
    answerIndex: 0,
    explanation: "제안에 동의하며 즐겁게 받아들이므로 Okay.(좋아)가 자연스럽습니다.",
  },
  // ============ 대화 단답 (직접 입력) 33~34 ============
  {
    id: "neungryul-unit6-dt1",
    type: "dialogue",
    mode: "typing",
    context: "A: Why don't we (   ) watch them?\nB: That sounds great!",
    question: "제안 명령문 Why don't we ~?에서 동사원형을 쓰세요.",
    accept: ["go", "go and"],
    explanation: "Why don't we + 동사원형? 형태로 go(가다)가 알맞습니다.",
  },
  {
    id: "neungryul-unit6-dt2",
    type: "dialogue",
    mode: "typing",
    context: "A: What is janggu?\nB: It (   ) a traditional Korean instrument.",
    question: "빈칸에 알맞은 be동사를 쓰세요.",
    accept: ["is"],
    explanation: "앞에 'What is ~?'로 묻고 대답하므로 It is ~.로 받습니다.",
  },
  // ============ 어휘 (선택) 35~38 ============
  {
    id: "neungryul-unit6-v1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "alphabet - 알파벳",
      "festival - 축제",
      "soldier - 군인",
      "traditional - 현대적인",
    ],
    answerIndex: 3,
    explanation: "traditional은 '전통적인'입니다. '현대적인'은 modern이죠.",
  },
  {
    id: "neungryul-unit6-v2",
    type: "vocab",
    question: "'글자의 모양'을 뜻하는 영어 단어로 알맞은 것은?",
    choices: ["shape", "sound", "letter", "paint"],
    answerIndex: 0,
    explanation: "shape는 '모양'입니다. 한글 자모의 모양(shape)을 말합니다.",
  },
  {
    id: "neungryul-unit6-v3",
    type: "vocab",
    question: "'~할 수 있다'를 뜻하는 표현으로 알맞은 것은? (can과 같은 뜻)",
    choices: ["be able to", "be famous for", "be full of", "be afraid of"],
    answerIndex: 0,
    explanation: "be able to + 동사원형은 '~할 수 있다'로 can과 같은 뜻입니다. 본문의 'I am able to read'에서 쓰였어요.",
  },
  {
    id: "neungryul-unit6-v4",
    type: "vocab",
    question: "'동시에'를 뜻하는 표현으로 알맞은 것은?",
    choices: ["at the same time", "at any time", "at last", "at first"],
    answerIndex: 0,
    explanation: "'at the same time'은 '동시에'라는 뜻입니다. 춤추고 악기를 연주하는 모습에서 쓰였죠.",
  },
  // ============ 어휘 단답 (직접 입력) 39~42 ============
  {
    id: "neungryul-unit6-vt1",
    type: "vocab",
    mode: "typing",
    question: "'전통적인'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["traditional"],
    explanation: "traditional(전통적인)은 전통 문화를 말할 때 쓰는 단어입니다.",
  },
  {
    id: "neungryul-unit6-vt2",
    type: "vocab",
    mode: "typing",
    question: "'역사'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["history"],
    explanation: "history(역사)는 윌리엄이 좋아하는 한글의 특징입니다.",
  },
  {
    id: "neungryul-unit6-vt3",
    type: "vocab",
    mode: "typing",
    question: "'신문·방송에서 사람들에게 묻는 사람(기자)'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["reporter"],
    explanation: "reporter(기자)는 이 본문의 인터뷰어를 말합니다.",
  },
  {
    id: "neungryul-unit6-vt4",
    type: "vocab",
    mode: "typing",
    question: "'~에 관심이 있는'을 뜻하는 두 단어를 쓰세요. (be ~ in ~)",
    accept: ["interested"],
    explanation: "be interested in ~은 '~에 관심이 있다'입니다.",
  },
  // ============ 확충: 본문 이해 (선택) 43~46 ============
  {
    id: "neungryul-unit6-a1",
    type: "passage",
    context:
      "Anna: I was interested in using Hangeul in my designs. So I studied the shapes of Hangeul.",
    question: "Anna가 한글의 모양을 공부한 까닭으로 가장 알맞은 것은?",
    choices: [
      "자신의 디자인에 한글을 활용하고 싶어서",
      "한국어 시험을 봐야 해서",
      "한국 노래를 부르기 위해서",
      "외국에 가기 위해서",
    ],
    answerIndex: 0,
    explanation: "'interested in using Hangeul in my designs' 즉 디자인에 한글을 쓰고 싶어 했기 때문입니다.",
  },
  {
    id: "neungryul-unit6-a2",
    type: "passage",
    context:
      "Pueng: I'm a big fan of K-pop songs. Because I wanted to sing Korean songs, I started learning Hangeul. Now I can sing many K-pop songs!",
    question: "Pueng에 대한 설명으로 옳은 것은?",
    choices: [
      "K-팝 노래의 팬이다.",
      "한글을 아직 못 읽는다.",
      "한국어를 가르치는 선생님이다.",
      "한국에 가본 적 없다.",
    ],
    answerIndex: 0,
    explanation: "'I'm a big fan of K-pop songs.' 즉 K-팝 노래의 열렬한 팬이라고 했습니다.",
  },
  {
    id: "neungryul-unit6-a3",
    type: "passage",
    context:
      "Reporter: Thank you for sharing your stories. Enjoy this festival!",
    question: "리포터가 마지막에 한 말의 내용으로 알맞은 것은?",
    choices: [
      "이야기를 나눠줘서 고맙고 축제를 즐기라고 한다.",
      "축제를 취소한다고 한다.",
      "내일 다시 오라고 한다.",
      "인터뷰가 끝났다고 말한다.",
    ],
    answerIndex: 0,
    explanation:
      "'Thank you for sharing your stories. Enjoy this festival!' 즉 고맙다는 말과 함께 축제를 즐기라고 합니다.",
  },
  {
    id: "neungryul-unit6-a4",
    type: "passage",
    context:
      "People are enjoying fun activities here. They look happy and excited. I'm going to interview three Hangeul lovers.",
    question: "위 본문의 내용과 일치하지 않는 것은?",
    choices: [
      "사람들이 재미있는 활동을 즐기고 있다.",
      "사람들이 행복하고 신나 보인다.",
      "리포터는 세 명을 인터뷰할 예정이다.",
      "리포터가 한글 애호가들 중 한 명이다.",
    ],
    answerIndex: 3,
    explanation:
      "'going to interview three Hangeul lovers' 즉 세 명을 인터뷰할 예정이지 리포터가 애호가가 아닙니다.",
  },
  // ============ 확충: 본문 단답 (직접 입력) 47~49 ============
  {
    id: "neungryul-unit6-at1",
    type: "passage",
    mode: "typing",
    context: "Today is October 9, a special day for Hangeul, the Korean (   ).",
    question: "빈칸에 들어갈 '알파벳(문자)'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["alphabet"],
    explanation: "alphabet(알파벳, 문자)은 한글을 설명하는 단어입니다.",
  },
  {
    id: "neungryul-unit6-at2",
    type: "passage",
    mode: "typing",
    context: "I'm at a Hangeul (   ) now.",
    question: "빈칸에 들어갈 '축제'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["festival"],
    explanation: "festival(축제)은 한글 축제를 말합니다.",
  },
  {
    id: "neungryul-unit6-at3",
    type: "passage",
    mode: "typing",
    context: "Some letters look like the shape of the mouth and (   ) for their sounds.",
    question: "빈칸에 들어갈 '혀'를 뜻하는 영어 단어를 쓰세요.",
    accept: ["tongue"],
    explanation: "tongue(혀)는 말소리를 낼 때의 입과 혀의 모양을 뜻합니다.",
  },
  // ============ 확충: 문법 (선택) 50~53 ============
  {
    id: "neungryul-unit6-ga1",
    type: "grammar",
    question: "다음 중 어법상 옳은 문장은?",
    choices: [
      "The milk tastes sour.",
      "She looks happily.",
      "That sounds strangely.",
      "I feel hungrily.",
    ],
    answerIndex: 0,
    explanation: "지각동사 뒤에는 형용사(sour)가 와야 합니다. 나머지는 부사가 쓰여 틀렸습니다.",
  },
  {
    id: "neungryul-unit6-ga2",
    type: "grammar",
    question: "다음 빈칸에 들어갈 알맞은 단어는?\n\nIt ______ like a good idea.",
    choices: ["sounds", "sounds like", "sound", "sounding"],
    answerIndex: 1,
    explanation: "'~처럼 들리다'는 sound like + 명사 구조입니다. a good idea가 명사구이므로 sounds like입니다.",
  },
  {
    id: "neungryul-unit6-ga3",
    type: "grammar",
    question: "다음 중 because of가 쓰여야 할 문장은?",
    choices: [
      "She was late ______ she woke up late.",
      "He stayed home ______ the rain.",
      "I like it ______ it is easy.",
      "We couldn't go ______ it was hot.",
    ],
    answerIndex: 1,
    explanation: "②는 뒤에 명사(the rain)가 오므로 because of를 씁니다. 나머지는 절이 와서 because입니다.",
  },
  {
    id: "neungryul-unit6-ga4",
    type: "grammar",
    question: "다음 중 어법상 틀린 문장은?",
    choices: [
      "I am able to read now.",
      "The boy looks like his father.",
      "We were late because of the traffic.",
      "This soup tastes well.",
    ],
    answerIndex: 3,
    explanation:
      "taste는 형용사를 취하므로 'tastes well'이 아니라 'tastes good'이 맞습니다.",
  },
  // ============ 확충: 문법 단답 (직접 입력) 54~56 ============
  {
    id: "neungryul-unit6-gat1",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 단어를 쓰세요.\n\nThese flowers (smell) ______ good.",
    accept: ["smell"],
    explanation: "smell + 형용사: '~한 냄새가 나다'. 주어가 복수이므로 smell 그대로입니다.",
  },
  {
    id: "neungryul-unit6-gat2",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 because 또는 because of 중 알맞은 것을 쓰세요.\n\nWe stayed home ______ it rained.",
    accept: ["because"],
    explanation: "뒤에 절(주어+동사)이 오므로 접속사 because를 씁니다.",
  },
  {
    id: "neungryul-unit6-gat3",
    type: "grammar",
    mode: "typing",
    question: "빈칸에 알맞은 단어를 쓰세요.\n\nThis cake (taste) ______ sweet.",
    accept: ["tastes"],
    explanation: "taste + 형용사: '~한 맛이 나다'. 주어가 3인칭 단수이므로 tastes입니다.",
  },
  // ============ 확충: 어휘 57~58 ============
  {
    id: "neungryul-unit6-va1",
    type: "vocab",
    question: "다음 중 단어와 뜻이 잘못 짝지어진 것은?",
    choices: [
      "create - 만들다",
      "pattern - 문양",
      "instrument - 악기",
      "difficult - 쉬운",
    ],
    answerIndex: 3,
    explanation: "difficult는 '어려운'입니다. '쉬운'은 easy예요.",
  },
  {
    id: "neungryul-unit6-va2",
    type: "vocab",
    question: "'(몸에) 옷 등을 입어 보다'를 뜻하는 구동사로 알맞은 것은?",
    choices: ["try on", "wear", "take off", "put aside"],
    answerIndex: 0,
    explanation: "try on은 '입어(신어) 보다'입니다. 옷을 시험해 보는 표현이죠.",
  },
  // ============ 확충: 어휘 단답 (직접 입력) 59~60 ============
  {
    id: "neungryul-unit6-vat1",
    type: "vocab",
    mode: "typing",
    question: "'군인'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["soldier"],
    explanation: "soldier(군인)는 '스위스'를 닮은 한글 단어에서 두 산 사이의 모습을 설명할 때 쓰였습니다.",
  },
  {
    id: "neungryul-unit6-vat2",
    type: "vocab",
    mode: "typing",
    question: "'과학적인'을 뜻하는 영어 단어를 쓰세요.",
    accept: ["scientific"],
    explanation: "scientific(과학적인)은 한글의 과학적 특징을 설명하는 단어입니다.",
  },
  // ============ 확충: 대화문 61~62 ============
  {
    id: "neungryul-unit6-da1",
    type: "dialogue",
    context:
      "A: What is gat?\nB: It's a traditional Korean hat.\nA: I see. It looks nice.\nB: Yes. It's light and cool. Why don't we try on a gat?\nA: ______ Where can we do that?",
    question: "빈칸에 들어갈 알맞은 동의 응답은?",
    choices: ["Sure.", "I'm sorry.", "No, thanks.", "I can't."],
    answerIndex: 0,
    explanation: "갓을 써 보자는 제안에 동의하며 '어디서 할 수 있지?'라고 이어지므로 Sure.가 자연스럽습니다.",
  },
  {
    id: "neungryul-unit6-da2",
    type: "dialogue",
    mode: "typing",
    context: "A: (   ) is nongak?\nB: It is traditional Korean music.",
    question: "'~이 무엇이니?'라고 묻는 의문사를 쓰세요.",
    accept: ["what"],
    explanation: "What is ~?는 '~은 무엇입니까?'라는 뜻입니다.",
  },
  // ============ 고난도 어법 선택형 (본문 빈칸) 63~ ============
  {
    id: "neungryul-unit6-hf1",
    type: "grammar",
    context:
      "People are enjoying fun activities here. They look (  ) and excited.",
    question: "빈칸에 들어갈 어법상 알맞은 것은?",
    choices: ["happily", "happy", "happiness", "to happy"],
    answerIndex: 1,
    explanation:
      "감각동사 look은 주격 보어로 형용사를 취합니다. excited와 나란히 형용사 happy가 와야 합니다. 부사 happily는 틀립니다.",
  },
  {
    id: "neungryul-unit6-hf2",
    type: "grammar",
    context:
      "Anna: I like the Korean word 'seu-wi-seu'. It (  ) a soldier between two mountains.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (뒤에 명사구가 옵니다)",
    choices: ["looks", "looks like", "looks at", "is looking"],
    answerIndex: 1,
    explanation:
      "뒤에 명사(a soldier)가 오므로 '~처럼 보이다'는 look like + 명사를 씁니다. look + 형용사와 헷갈리면 안 돼요.",
  },
  {
    id: "neungryul-unit6-hf3",
    type: "grammar",
    context:
      "William: I like Hangeul (  ) its history is amazing.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (뒤에 '주어+동사' 절이 옵니다)",
    choices: ["because of", "because", "so", "but"],
    answerIndex: 1,
    explanation:
      "뒤에 절(its history is amazing)이 오므로 접속사 because를 씁니다. 뒤에 명사만 오면 because of예요.",
  },
  {
    id: "neungryul-unit6-hf4",
    type: "grammar",
    context:
      "A long time ago, most Koreans couldn't read or write. King Sejong felt bad (  ) this, so he created a new alphabet.",
    question: "빈칸에 들어갈 어법상 알맞은 것은? (뒤에 명사 this가 옵니다)",
    choices: ["because", "because of", "about", "so"],
    answerIndex: 2,
    explanation:
      "feel bad about ~는 '~에 대해 안타깝게 여기다'라는 숙어입니다. 이유를 이끌 때는 because(절)/because of(명사)를 쓰지만 여기서는 felt bad about이 자연스럽습니다.",
  },
];