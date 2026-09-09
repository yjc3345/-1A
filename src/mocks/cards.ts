// 호기심 상식 카드 컬렉션
// 뽑기 성공 시 이 카드 중 하나를 획득한다. 중등부 눈높이의 흥미로운 지식들로 구성.

export type CardRarity = "common" | "rare" | "legend";

export interface CuriosityCard {
  id: string;
  title: string; // 카드 제목 (핵심 호기심)
  fact: string; // 짧은 설명
  emoji: string;
  category: string; // 분류
  rarity: CardRarity;
}

export const RARITY_META: Record<
  CardRarity,
  { label: string; chip: string; grad: string; ring: string }
> = {
  common: {
    label: "일반",
    chip: "bg-emerald-100 text-emerald-700",
    grad: "from-emerald-400 to-teal-500",
    ring: "ring-emerald-200",
  },
  rare: {
    label: "레어",
    chip: "bg-amber-100 text-amber-700",
    grad: "from-amber-400 to-orange-500",
    ring: "ring-amber-200",
  },
  legend: {
    label: "전설",
    chip: "bg-rose-100 text-rose-700",
    grad: "from-rose-400 to-pink-500",
    ring: "ring-rose-200",
  },
};

export const CURIOSITY_CARDS: CuriosityCard[] = [
  {
    id: "c-honey",
    title: "벌 한 마리의 평생 꿀 생산량",
    fact: "벌 한 마리는 평생 만드는 꿀이 단 1/12 티스푼도 안 돼요. 그래서 꿀 한 통에는 수십만 마리 벌의 노력이 담겨 있어요.",
    emoji: "🍯",
    category: "동물",
    rarity: "common",
  },
  {
    id: "c-letterE",
    title: "영어에서 가장 자주 쓰는 문자는?",
    fact: "영어 본문에서 가장 많이 등장하는 문자는 'E'이고, 가장 적게 쓰이는 문자는 'Z'예요. Z는 상위 1%도 안 되는 희귀 문자랍니다.",
    emoji: "🔤",
    category: "영어",
    rarity: "common",
  },
  {
    id: "c-giraffe",
    title: "기린의 혀는 보라색?",
    fact: "기린의 혀는 무려 50cm나 길고, 색깔은 보랏빛을 띠어요. 길고 튼튼한 혀로 가시가 있는 잎도 거뜬히 먹어요.",
    emoji: "🦒",
    category: "동물",
    rarity: "common",
  },
  {
    id: "c-grass",
    title: "바나나는 나무가 아니라 풀이다",
    fact: "바나나는 나무가 아니라 세상에서 가장 큰 '풀'이에요. 줄기가 나무처럼 단단해서 속는 경우가 많죠.",
    emoji: "🍌",
    category: "식물",
    rarity: "common",
  },
  {
    id: "c-cloud",
    title: "구름 한 개의 무게",
    fact: "평범해 보이는 구름 한 개의 무게는 약 50만 kg, 코끼리 100마리보다 무거워요. 구름은 '떠 있는 물방울 덩어리'거든요.",
    emoji: "☁️",
    category: "과학",
    rarity: "common",
  },
  {
    id: "c-palindrome",
    title: "앞뒤로 읽어도 같은 단어",
    fact: "'level', 'radar', 'mom'처럼 앞뒤로 읽어도 같은 단어를 회문(palindrome)이라고 해요. 영어에도 재밌는 단어가 참 많죠.",
    emoji: "🔁",
    category: "영어",
    rarity: "common",
  },
  {
    id: "c-eiffel",
    title: "여름에 커지는 에펠탑",
    fact: "금속은 더우면 늘어나요. 그래서 에펠탑은 여름이 되면 최대 15cm 정도 키가 커진다고 해요.",
    emoji: "🗼",
    category: "과학",
    rarity: "rare",
  },
  {
    id: "c-octopus",
    title: "문어는 심장이 3개",
    fact: "문어는 심장이 3개이고, 혈액은 파란색이에요. 놀라운 능력을 가진 지구 최고의 몰래카메라 전문가랍니다.",
    emoji: "🐙",
    category: "동물",
    rarity: "rare",
  },
  {
    id: "c-bubble",
    title: "비눗방울이 무지개색인 이유",
    fact: "비눗방울 표면은 얇은 막인데, 빛이 그 막에 반사되며 서로 간섭해 알록달록 무지개빛이 보여요.",
    emoji: "🫧",
    category: "과학",
    rarity: "rare",
  },
  {
    id: "c-set",
    title: "뜻이 가장 많은 영단어 'set'",
    fact: "영어에서 뜻이 가장 많은 단어는 'set'이에요. 옥스퍼드 사전에 등록된 뜻만 464가지나 된다고 해요.",
    emoji: "📚",
    category: "영어",
    rarity: "rare",
  },
  {
    id: "c-korea",
    title: "Korea는 '고려'에서 왔다",
    fact: "한국의 영어 이름 'Korea'는 고려 왕조의 '고려(Koryo)'에서 유래했어요. 세계가 이 이름으로 부르기 시작한 건 고려 시대부터랍니다.",
    emoji: "🏯",
    category: "역사",
    rarity: "legend",
  },
  {
    id: "c-snail",
    title: "달팽이는 3년까지 잘 수 있다",
    fact: "달팽이는 겨울잠과 여름잠을 합쳐 길면 3년까지 잠을 잘 수 있어요. 잠꾸러기 세계 챔피언이라 불러도 손색없죠.",
    emoji: "🐌",
    category: "동물",
    rarity: "rare",
  },
];

export function getCardById(id: string): CuriosityCard | undefined {
  return CURIOSITY_CARDS.find((c) => c.id === id);
}