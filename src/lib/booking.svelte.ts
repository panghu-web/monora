import { CURRENCY, PHONE, t } from './i18n.svelte';
import { sourceLabel } from './source.svelte';

// 按个数计价:房间、浴室、厨房、阳台每个 20;厨房必选且固定 1 个,阳台可选、默认 0
const PRICE = { room: 20, bath: 20, kitchen: 20, balcony: 20 };
export const KITCHENS = 1;

// 计算器里选的数量;页面上所有「预订」按钮共用这一份
export const booking = $state({ rooms: 1, baths: 1, balconies: 0 });

export function total() {
  return booking.rooms * PRICE.room + booking.baths * PRICE.bath + KITCHENS * PRICE.kitchen + booking.balconies * PRICE.balcony;
}

/** 预订链接:打开 WhatsApp 对话,带上当前选的房间、浴室、厨房、阳台数量、预估价格和一段写好的消息 */
export function bookingHref() {
  const m = t().mail;
  const body = [
    m.intro,
    '',
    `${t().calc.rooms}: ${booking.rooms}`,
    `${t().calc.baths}: ${booking.baths}`,
    `${t().calc.kitchen}: ${KITCHENS}`,
    `${t().calc.balconies}: ${booking.balconies}`,
    `${t().calc.estimate}: ${total()} ${CURRENCY}`,
    '',
    m.fill,
    `${m.date}: `,
    `${m.address}: `,
    `${m.phone}: `,
    `${m.notes}: `,
    '',
    m.thanks,
    ...sourceLine(),
  ].join('\n');
  return whatsappHref(body);
}

/** 悬浮按钮用的简短咨询消息,同样带来源 */
export function chatHref() {
  return whatsappHref([t().chat.message, ...sourceLine()].join('\n'));
}

function sourceLine(): string[] {
  const label = sourceLabel();
  return label ? ['', `${t().mail.source}: ${label}`] : [];
}

function whatsappHref(text: string) {
  return `https://wa.me/${PHONE.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}
