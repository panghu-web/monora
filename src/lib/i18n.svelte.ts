// 文案全部在这里。品牌名、电话、邮箱、价格都是占位,上线前替换。

export const BRAND = 'Monora';
export const COMPANY = 'Monora Cleaning Services LLC';
export const PHONE = '+971 50 683 8899';
export const EMAIL = 'monorabuilding@gmail.com';
export const CURRENCY = 'AED';

const zh = {
  nav: { why: '为什么选我们', contact: '联系我们', book: '立即预订' },
  hero: {
    title: ['家里干净了,', '心也跟着松下来。'],
    sub: '上门家居与办公室清洁。在线算好价格,约好时间,剩下的交给我们。',
  },
  calc: {
    rooms: '房间',
    baths: '浴室',
    estimate: '预估价格',
    cta: '按这个价格预订',
  },
  why: {
    title: '为什么选我们',
    body: '我们只做一件事:把清洁这件小事做得省心。保洁员是自己的员工,不转包;价格下单前就定好,不会到了现场再加钱。',
    points: [
      { name: '自有团队', desc: '全员培训上岗,固定人员上门。' },
      { name: '安全用品', desc: '有孩子和宠物的家庭也能放心用。' },
      { name: '明码标价', desc: '下单看到多少,最后就付多少。' },
      { name: '不满意重做', desc: '一天内反馈,免费回来返工。' },
    ],
  },
  compare: { title: '清洁前后', before: '清洁前', after: '清洁后', labels: ['厨房', '卧室', '客厅', '浴室'] },
  reviews: {
    title: '客户怎么说',
    items: [
      { text: '约的是周六上午,准点到,走的时候厨房像新的一样。', name: '林女士', area: '市中心' },
      { text: '退租前做了一次深度清洁,押金全额拿回来了。', name: '陈先生', area: '海滨区' },
      { text: '家里有两只猫,他们提前问了情况,安排得很周到。', name: '王女士', area: '花园区' },
      { text: '办公室每周两次,合作半年没出过岔子。', name: '赵先生', area: '商务区' },
      { text: '价格和网页上算的一分不差,这点很难得。', name: '周女士', area: '湖景区' },
      { text: '有一处没擦到,第二天就有人回来补了,态度很好。', name: '吴先生', area: '老城区' },
    ],
  },
  steps: {
    title: '三步搞定',
    items: [
      { name: '选服务', desc: '挑好套餐,填上房间数,价格马上出来。' },
      { name: '约时间', desc: '留下地址和联系方式,选一个方便的时段。' },
      { name: '等上门', desc: '保洁员按时到,做完你验收就行。' },
    ],
  },
  faq: {
    title: '常见问题',
    items: [
      { q: '日常清洁都做些什么?', a: '地面吸尘拖洗、台面和家具表面除尘、镜面擦拭、倒垃圾;厨房清洗台面、灶台和水槽;浴室清洁洁具并消毒。擦窗、烤箱内部这类项目可以下单时另加。' },
      { q: '需要我准备清洁工具吗?', a: '不用。保洁员会自带清洁剂、抹布和吸尘器。如果你想用自家的用品,提前说一声就可以。' },
      { q: '我不在家可以吗?', a: '可以。所有保洁员都经过身份核验和试岗考核,你可以留下钥匙或门禁方式,做完我们会发消息通知你。' },
      { q: '最快什么时候能上门?', a: '建议提前一到两天预约。临时需要的话直接联系我们,附近有空闲人员时当天也能安排。' },
      { q: '怎么付款?', a: '支持在线刷卡,也可以服务完成后付现金。' },
      { q: '临时有事能改期吗?', a: '开始前 24 小时以上改期或取消都不收费。临近开始才取消的,可能会收一小笔空档费。' },
      { q: '固定预约有优惠吗?', a: '有。每周或隔周固定上门,会安排同一位保洁员,单次价格也比零散预约低。' },
      { q: '一次要多久?', a: '看面积和脏污程度。一居室大约三小时,两到三居室四到五小时,大户型六小时起。' },
    ],
  },
  cta: { title: '现在就约一次', sub: '选个方便的时间,我们准时到。', btn: '去预订' },
  footer: {
    info: '信息',
    contact: '联系我们',
    address: 'UAE. Ras Al Khaimah',
    rights: '保留所有权利',
  },
  cookie: { text: '本站使用 Cookie 来保证基本功能正常运行。', ok: '知道了' },
  mail: {
    intro: '你好,我想预订一次上门清洁,需求如下:',
    fill: '请帮我安排,以下是我的信息:',
    date: '希望上门的日期和时间',
    address: '详细地址',
    phone: '联系电话',
    notes: '其他说明(有无宠物、重点清洁区域等)',
    thanks: '期待回复,谢谢!',
  },
};

const en: typeof zh = {
  nav: { why: 'Why us', contact: 'Contact', book: 'Book now' },
  hero: {
    title: ['A clean home,', 'and one less thing to think about.'],
    sub: 'Home and office cleaning at your door. Get a price online, pick a time, and leave the rest to us.',
  },
  calc: {
    rooms: 'Rooms',
    baths: 'Bathrooms',
    estimate: 'Estimated price',
    cta: 'Book at this price',
  },
  why: {
    title: 'Why us',
    body: 'We do one thing: make cleaning easy to hand off. Our cleaners are our own staff, never subcontracted, and the price is fixed before you book.',
    points: [
      { name: 'In-house team', desc: 'Trained staff, the same faces each visit.' },
      { name: 'Safe products', desc: 'Fine for homes with children and pets.' },
      { name: 'Clear pricing', desc: 'What you see at booking is what you pay.' },
      { name: 'Redo guarantee', desc: 'Tell us within a day and we fix it free.' },
    ],
  },
  compare: { title: 'Before and after', before: 'Before', after: 'After', labels: ['Kitchen', 'Bedroom', 'Living room', 'Bathroom'] },
  reviews: {
    title: 'What customers say',
    items: [
      { text: 'Booked Saturday morning, they arrived on the dot and the kitchen looked new.', name: 'Ms Lin', area: 'City centre' },
      { text: 'Had a deep clean before moving out and got the full deposit back.', name: 'Mr Chen', area: 'Waterfront' },
      { text: 'We have two cats. They asked ahead and planned around them.', name: 'Ms Wang', area: 'Garden district' },
      { text: 'Twice a week at our office for six months without a hiccup.', name: 'Mr Zhao', area: 'Business district' },
      { text: 'The bill matched the online estimate exactly, which is rare.', name: 'Ms Zhou', area: 'Lakeside' },
      { text: 'One spot was missed and someone came back the next day to sort it.', name: 'Mr Wu', area: 'Old town' },
    ],
  },
  steps: {
    title: 'Three steps',
    items: [
      { name: 'Choose', desc: 'Pick a plan, enter your rooms and see the price.' },
      { name: 'Schedule', desc: 'Leave your address and contact, then choose a slot.' },
      { name: 'Relax', desc: 'The cleaner arrives on time. You just check the result.' },
    ],
  },
  faq: {
    title: 'FAQ',
    items: [
      { q: 'What does a regular clean cover?', a: 'Vacuuming and mopping, dusting surfaces, wiping mirrors and taking out rubbish. Kitchen worktops, hob and sink are washed, and bathroom fittings are cleaned and disinfected. Windows and oven interiors can be added when you book.' },
      { q: 'Do I need to supply anything?', a: 'No. Cleaners bring products, cloths and a vacuum. If you prefer your own supplies, just let us know beforehand.' },
      { q: 'Can I be out during the visit?', a: 'Yes. Every cleaner passes identity checks and a trial shift. Leave a key or access details and we will message you when the job is done.' },
      { q: 'How soon can you come?', a: 'One to two days ahead is best. For urgent jobs contact us directly, and same-day visits are possible when someone is free nearby.' },
      { q: 'How do I pay?', a: 'By card online, or in cash once the job is finished.' },
      { q: 'Can I reschedule?', a: 'Changes and cancellations are free up to 24 hours before the start. Later cancellations may carry a small fee.' },
      { q: 'Is a regular booking cheaper?', a: 'Yes. With weekly or fortnightly visits you get the same cleaner and a lower price per visit.' },
      { q: 'How long does it take?', a: 'It depends on size and condition. Roughly three hours for one bedroom, four to five for two or three, and six or more for larger homes.' },
    ],
  },
  cta: { title: 'Book your first visit', sub: 'Pick a time that suits you and we will be there.', btn: 'Book now' },
  footer: {
    info: 'Information',
    contact: 'Contact',
    address: 'UAE. Ras Al Khaimah',
    rights: 'All rights reserved',
  },
  cookie: { text: 'This site uses cookies to keep basic features working.', ok: 'Got it' },
  mail: {
    intro: 'Hello, I would like to book a home cleaning with the following details:',
    fill: 'Please arrange a visit. My details are below:',
    date: 'Preferred date and time',
    address: 'Full address',
    phone: 'Contact number',
    notes: 'Other notes (pets, areas needing extra attention, etc.)',
    thanks: 'Looking forward to your reply. Thank you!',
  },
};

const dicts = { zh, en };
export type Lang = keyof typeof dicts;
export const LANGS: { code: Lang; short: string }[] = [
  { code: 'zh', short: '中' },
  { code: 'en', short: 'EN' },
];

const STORAGE_KEY = 'lang';

// 首次访问按浏览器语言定:偏好列表里先出现中文就用中文,否则英文;手动切换过的以用户选择为准
function detect(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in dicts) return saved as Lang;
  } catch {
    // 隐私模式下读不了存储,按浏览器语言走
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag.toLowerCase().split('-')[0];
    if (code in dicts) return code as Lang;
  }
  return 'en';
}

export const i18n = $state({ lang: detect() });

export function setLang(lang: Lang) {
  i18n.lang = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // 存不了就只在本次访问生效
  }
}

export function t() {
  return dicts[i18n.lang];
}
