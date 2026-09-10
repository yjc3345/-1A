// 상점에서 코인으로 구매할 수 있는 아이템 정의
// consumable = 소모성 아이템 (힌트, 5050, 무료뽑기권 등)
// 한 번 구매하면 보유 개수가 올라가고, 사용하면 줄어든다.

export type StoreItemId =
  | "hint"
  | "fiftyFifty"
  | "freeTicket"
  | "skipTicket";

export interface StoreItem {
  id: StoreItemId;
  name: string;
  desc: string;
  price: number;
  icon: string;
  emoji: string;
  color: string;
}

export const STORE_ITEMS: StoreItem[] = [
  {
    id: "hint",
    name: "힌트 보기",
    desc: "문제 풀 때 정답의 첫 글자를 알려줘요. 1문제당 1개 소모돼요.",
    price: 3,
    icon: "ri-lightbulb-flash-line",
    emoji: "💡",
    color: "amber",
  },
  {
    id: "fiftyFifty",
    name: "50·50",
    desc: "4지선다에서 보기 2개를 지워줘요. 1문제당 1개 소모돼요.",
    price: 5,
    icon: "ri-scissors-cut-line",
    emoji: "✂️",
    color: "rose",
  },
  {
    id: "freeTicket",
    name: "무료 뽑기권",
    desc: "코인 없이 뽑기를 1회 할 수 있어요. 코인 대신 사용돼요.",
    price: 15,
    icon: "ri-coupon-3-line",
    emoji: "🎟️",
    color: "emerald",
  },
  {
    id: "skipTicket",
    name: "문제 패스권",
    desc: "모르는 문제를 넘길 수 있어요. 오답노트에 들어가지 않아요.",
    price: 8,
    icon: "ri-skip-forward-line",
    emoji: "⏭️",
    color: "sky",
  },
];

export const STORE_ITEM_MAP: Record<StoreItemId, StoreItem> =
  STORE_ITEMS.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as Record<StoreItemId, StoreItem>,
  );

export function getStoreItem(id: StoreItemId): StoreItem {
  return STORE_ITEM_MAP[id];
}
