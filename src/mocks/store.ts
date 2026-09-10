// 상점에서 코인으로 구매할 수 있는 아이템
// 현재 상품: 8시 학원 하원 쿠폰 (100코인)

export type StoreItemId = "leaveCoupon" | "weekendMakeupExemption";

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
    id: "leaveCoupon",
    name: "8시 학원 하원 쿠폰",
    desc: "100코인으로 구매하면, 이름과 날짜를 적어 하원 쿠폰 이미지를 만들 수 있어요. 카톡으로 보내거나 저장해서 선생님께 보여주세요.",
    price: 100,
    icon: "ri-ticket-2-line",
    emoji: "🎫",
    color: "emerald",
  },
  {
    id: "weekendMakeupExemption",
    name: "주말 보강 면제 쿠폰(고림전용)",
    desc: "이름과 면제 받을 날짜를 입력해 쿠폰을 발급해주세요.",
    price: 50,
    icon: "ri-calendar-close-line",
    emoji: "🗓️",
    color: "violet",
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
