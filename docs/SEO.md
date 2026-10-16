# Monora 网站 SEO 进度

最后更新:2026-10-16

线上地址:https://monorabuilding.com

每一项待办都可以单独开一个会话处理。开工前先读完「基本信息」和「操作须知」两节。

---

## 基本信息

| 项目 | 值 |
|---|---|
| 公司 | Monora Cleaning Services LLC |
| 业务 | 上门家居与公寓清洁 |
| 地区 | UAE. Ras Al Khaimah(拉斯海马) |
| 电话 / WhatsApp | +971 50 683 8899 |
| 邮箱 | monorabuilding@gmail.com |
| 价格 | 房间、浴室、厨房每个 20 AED,厨房固定 1 个,起步 60 AED |
| 域名 | `monorabuilding.com`,在 tenten.vn 注册,解析后台 https://domain.tenten.vn/ApiDnsSetting |
| 托管 | GitHub Pages,仓库 `panghu-web/monora`,推送 `main` 自动发布 |
| 默认语言 | 英文;页面右上角可切中文(同一网址,靠按钮切换) |

## 操作须知

**代码与发布**

- 技术栈:Vite + Svelte 5 + TypeScript,需要 Node 20(`~/.nvm/versions/node/v20.19.3/bin`)
- 文案全部在 `src/lib/i18n.svelte.ts`(中英文各一份);价格在 `src/lib/booking.svelte.ts`;政策在 `src/lib/policies.ts`
- `pnpm build` 会先构建、再预渲染成完整 HTML(`scripts/prerender.mjs`)。改完务必跑一次,确认输出 `prerendered dist/index.html`
- 页面头部的标题、描述、分享卡片、商家结构化数据在 `index.html`
- 推送:本机 SSH 默认密钥不是 GitHub 那把,而且没记录过 GitHub 的主机指纹。推送要指定密钥,并用 GitHub 官方接口取主机公钥校验:

  ```bash
  gh api meta --jq '.ssh_keys[] | "github.com " + .' > /tmp/gh_known_hosts
  GIT_SSH_COMMAND="ssh -i ~/.ssh/id -o IdentitiesOnly=yes -o UserKnownHostsFile=/tmp/gh_known_hosts" git push origin main
  ```

- 推送后等 GitHub Actions 跑完,再用 `https://monorabuilding.com/?v=<提交号>` 绕开缓存核对线上

**浏览器操作**

- 用 Claude in Chrome 在用户自己的 Chrome 里操作,用户已登录的账号可以直接用
- 不代输密码,不代收验证码;遇到登录、短信 / 视频 / 明信片验证,停下来请用户本人完成
- 提交表单、保存设置前,把要提交的内容列给用户确认
- tenten 解析后台现有 5 条记录(4 条 `@` 的 A 记录指向 `185.199.108–111.153`,`www` 的 CNAME 指向 `panghu-web.github.io`),**不能删改**,只能新增

**内容底线**

- 页面上的「客户评价」是占位内容,不是真实客户。用户决定暂时保留在页面上
- **不把评价或评分写进结构化数据**,也不在任何平台发布虚构评价。原因:违反 Google 政策会被人工处罚;商家自己网站上的评价从 2019 年起不再显示星级,也不计入排名
- 写进页面和商家资料的信息必须是真实的(地址、电话、服务范围、价格、承诺)

---

## 已完成

| 项目 | 完成日期 |
|---|---|
| 独立域名 + HTTPS;`www`、`http` 均跳转到 `https://monorabuilding.com` | 2026-10-16 |
| 构建时预渲染,搜索引擎不执行 JS 也能看到全部内容 | 2026-10-16 |
| 标题 / 描述含「Ras Al Khaimah」和服务关键词;规范网址 | 2026-10-16 |
| 分享卡片(Open Graph,分享图 `og-image.jpg`) | 2026-10-16 |
| 本地商家结构化数据(LocalBusiness,只含真实信息) | 2026-10-16 |
| `robots.txt`、`sitemap.xml` | 2026-10-16 |
| 首屏图与 logo 转 WebP;对比图延迟加载 | 2026-10-16 |
| 「Home cleaning in Ras Al Khaimah」服务板块;对比图带描述文字 | 2026-10-16 |
| FAQ 与实际做法对齐(删「擦窗另加」;付款改为确认预约时约定) | 2026-10-16 |

---

## 待办

按建议顺序排列。状态:⬜ 未开始 · 🟡 进行中 · ✅ 完成 · ⏸ 等用户决定

### 1. Google Search Console ⬜

- 目标:让 Google 收录网站,看到搜索词和收录问题
- 步骤:用户 Chrome 里打开 https://search.google.com/search-console → 添加「网域」资源 `monorabuilding.com` → 拿到 TXT 验证记录 → 在 tenten 解析后台新增这条 TXT(名称 `@`)→ 等生效后回 Search Console 点验证 → 提交 `https://monorabuilding.com/sitemap.xml` → 对首页「请求编入索引」
- 需要用户:Chrome 里已登录要用的 Google 账号
- 完成标志:Search Console 显示所有权已验证,站点地图状态「成功」

### 2. Google 商家资料(Google Business Profile)⬜

- 目标:出现在 Google 地图和本地搜索,收集真实评价。对本地生意是最重要的一项
- 步骤:https://business.google.com → 用和 Search Console 同一个 Google 账号创建商家 → 名称 `Monora Cleaning Services` → 类别选清洁服务类 → 选「上门服务、不对外开放实体店面」,服务区域 Ras Al Khaimah → 电话、网站 → 营业时间(问用户)→ 验证
- 需要用户:营业时间;验证(Google 可能要求视频、电话或明信片,只能用户本人完成)
- 完成标志:商家资料已验证并公开;拿到「请客户评价」的专属链接,记到本文件

### 3. 收集评价:WhatsApp 跟进模板 + 网站评价按钮 ⬜(依赖 2)

- 写中英文两段 WhatsApp 跟进消息,服务结束后发给客户,附 Google 评价链接
- 网站上加「在 Google 上评价我们」按钮,指向评价链接
- 等有了真实评价,用户决定是否把页面上的占位评价换成真实评价(真实的也不写进结构化数据)

### 4. 服务片区 ⏸

- 需要用户提供:实际上门覆盖拉斯海马哪些片区
- 拿到后:写进 `i18n.svelte.ts` 的 `area` 板块(中英文),`index.html` 结构化数据的 `areaServed` 改为片区列表;Google 商家资料的服务区域同步更新
- 不要自己编片区名

### 5. Bing Webmaster Tools ⬜(依赖 1)

- https://www.bing.com/webmasters → 选择从 Google Search Console 导入,一步完成验证和站点地图

### 6. 中文版独立网址 ⏸

- 现状:中英文同一网址靠按钮切换,搜索引擎只收录英文
- 方案:预渲染出 `/` (英文)和 `/zh/` (中文)两份 HTML,互相加 `hreflang` 标注,`sitemap.xml` 两条;语言切换按钮改为跳转对应网址
- 需要用户决定:要不要做

### 7. 阿拉伯语版 ⏸

- 本地客户常用阿拉伯语。需要整页从右到左排版,文案需要靠谱的翻译
- 需要用户决定:要不要做;翻译由谁审

### 8. 社交账号与本地目录 ⬜

- Facebook 主页、Instagram 账号,以及阿联酋本地商家目录
- 名称、电话、地址与网站完全一致,都链回 `https://monorabuilding.com`
- 需要用户:注册账号与登录(不代建账号、不代输密码)

---

## 预期

新域名从提交到出现在搜索结果里,一般几天到几周;排名稳定要几个月。在此之前,Google 商家资料、WhatsApp 和社交媒体带来的客户会更快。
