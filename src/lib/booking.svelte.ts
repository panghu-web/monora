import { CURRENCY, PHONE, t } from './i18n.svelte';

// 按个数计价:房间、浴室、厨房每个 20;厨房必选且固定 1 个
const PRICE = { room: 20, bath: 20, kitchen: 20 };
export const KITCHENS = 1;

// 计算器里选的数量;页面上所有「预订」按钮共用这一份
export const booking = $state({ rooms: 1, baths: 1 });

export function total() {
  return booking.rooms * PRICE.room + booking.baths * PRICE.bath + KITCHENS * PRICE.kitchen;
}

/** 预订链接:打开 WhatsApp 对话,带上当前选的房间数、浴室数、预估价格和一段写好的消息 */
export function bookingHref() {
  const m = t().mail;
  const body = [
    m.intro,
    '',
    `${t().calc.rooms}: ${booking.rooms}`,
    `${t().calc.baths}: ${booking.baths}`,
    `${t().calc.kitchen}: ${KITCHENS}`,
    `${t().calc.estimate}: ${total()} ${CURRENCY}`,
    '',
    m.fill,
    `${m.date}: `,
    `${m.address}: `,
    `${m.phone}: `,
    `${m.notes}: `,
    '',
    m.thanks,
  ].join('\n');
  return `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`;
}
