import { CURRENCY, EMAIL, t } from './i18n.svelte';

// 起步价含 1 个房间 + 1 个浴室,每多一间各加一份
const PRICE = { base: 40, room: 20, bath: 20 };

// 计算器里选的数量;页面上所有「预订」按钮共用这一份
export const booking = $state({ rooms: 1, baths: 1 });

export function total() {
  return PRICE.base + (booking.rooms - 1) * PRICE.room + (booking.baths - 1) * PRICE.bath;
}

/** 预订邮件链接:带上当前选的房间数、浴室数、预估价格和一段写好的正文 */
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
  return `mailto:${EMAIL}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(body)}`;
}
