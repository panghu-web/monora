import { CURRENCY, PHONE, t } from './i18n.svelte';

// 起步价含 1 个房间 + 1 个浴室;房间、浴室各自计:第 2 个 +20,第 3 个起每个 +10
const PRICE = { base: 75, second: 20, more: 10 };

function extra(count: number) {
  if (count <= 1) return 0;
  return PRICE.second + (count - 2) * PRICE.more;
}

// 计算器里选的数量;页面上所有「预订」按钮共用这一份
export const booking = $state({ rooms: 1, baths: 1 });

export function total() {
  return PRICE.base + extra(booking.rooms) + extra(booking.baths);
}

/** 预订链接:打开 WhatsApp 对话,带上当前选的房间数、浴室数、预估价格和一段写好的消息 */
export function bookingHref() {
  const m = t().mail;
  const body = [
    m.intro,
    '',
    `${t().calc.rooms}: ${booking.rooms}`,
    `${t().calc.baths}: ${booking.baths}`,
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
