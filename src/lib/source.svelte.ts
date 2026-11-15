// 访客从哪个渠道来:推广链接带 ?src=xx(也认 utm_source),记在本机 30 天,
// WhatsApp 预填消息末尾带上「来源」,商家看消息就知道客户从哪来。
// 直接打开网站、或者 30 天前来过的,不带来源。

const KEY = 'src';
const TTL_MS = 30 * 24 * 60 * 60 * 1000;

// 已知渠道:链接里的代号 → 消息里显示的名称。没登记的代号原样显示
export const SOURCES: Record<string, string> = {
  fb: 'Facebook',
  ig: 'Instagram',
  gmb: 'Google Maps',
  group: 'Community group',
  wa: 'WhatsApp status',
  flyer: 'Flyer / QR code',
  ref: 'Referral',
};

export const source = $state({ code: '' });

function clean(raw: string | null): string {
  // 只留字母数字和横线,截到 20 位,防止有人在链接里塞乱七八糟的内容进消息
  return (raw ?? '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 20);
}

/** 打开页面时调一次:链接带了来源就记下(新来源覆盖旧的),没带就读本机记录 */
export function captureSource() {
  const params = new URLSearchParams(location.search);
  const fromUrl = clean(params.get('src') ?? params.get('utm_source'));
  try {
    if (fromUrl) {
      localStorage.setItem(KEY, JSON.stringify({ code: fromUrl, at: Date.now() }));
      source.code = fromUrl;
      return;
    }
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null') as { code: string; at: number } | null;
    if (saved && Date.now() - saved.at < TTL_MS) source.code = clean(saved.code);
  } catch {
    // 隐私模式下存不了:只认本次链接里带的来源
    if (fromUrl) source.code = fromUrl;
  }
}

/** 消息里显示的来源名称;没有来源返回空串 */
export function sourceLabel(): string {
  return source.code ? (SOURCES[source.code] ?? source.code) : '';
}
