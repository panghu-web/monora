# 推广链接与来源识别

每个渠道用自己的链接。客户从哪个链接进网站,之后点 WhatsApp 发来的消息末尾就会多一行「Source: 渠道名」(中文页面显示「来源: 渠道名」),看消息就知道客户是从哪来的。

## 链接表

| 渠道 | 链接 | 消息里显示 |
|---|---|---|
| Facebook 主页、帖子 | https://monorabuilding.com/?src=fb | Source: Facebook |
| Instagram 简介、帖子 | https://monorabuilding.com/?src=ig | Source: Instagram |
| Google 商家资料的网站栏 | https://monorabuilding.com/?src=gmb | Source: Google Maps |
| 本地居民群、Facebook 小组 | https://monorabuilding.com/?src=group | Source: Community group |
| WhatsApp 状态 | https://monorabuilding.com/?src=wa | Source: WhatsApp status |
| 传单、名片上的二维码 | https://monorabuilding.com/?src=flyer | Source: Flyer / QR code |
| 老客户转发 | https://monorabuilding.com/?src=ref | Source: Referral |

- 想细分可以自己编代号,比如在两个不同的群发 `?src=group-a`、`?src=group-b`,消息里会原样显示 `group-a`。代号只认字母、数字和横线,最长 20 位
- 也认通用的 `utm_source` 参数,以后投广告可以直接用广告平台生成的链接
- 直接输入网址、或从搜索结果进来的,消息里不带来源

## 规则

- 来源记在访客自己的浏览器里 30 天:今天从 Facebook 进来、过几天直接打开网站再预订,消息里仍然显示 Facebook
- 后来又从别的渠道链接进来,以最新的为准
- 访客换了手机或浏览器、开了无痕模式,就识别不到之前的来源
- 消息是预填在客户的 WhatsApp 输入框里的,客户发送前可以删掉这行,所以统计会有少量遗漏,只用来看大致比例

## 代码位置

渠道代号和显示名称在 `src/lib/source.svelte.ts` 的 `SOURCES`,新增渠道在这里加一行。
