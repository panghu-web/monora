// 三份政策的正文。按本站实际做法写的:没有账号和表单、不设跟踪 Cookie、预订走 WhatsApp。
// 业务做法变了(比如接入统计工具、线上支付)要同步改这里。上线前建议请当地法律顾问过一遍。
import { COMPANY, EMAIL, PHONE, type Lang } from './i18n.svelte';

export const POLICY_UPDATED = '2026-10-10';

type Policy = { title: string; sections: { h: string; p: string }[] };

export const policies: Record<Lang, { updated: string; close: string; items: Policy[] }> = {
  zh: {
    updated: '最后更新',
    close: '关闭',
    items: [
      {
        title: '隐私政策',
        sections: [
          { h: '我们是谁', p: `本网站由 ${COMPANY} 运营。有关个人信息的任何问题,可以通过 ${EMAIL} 或 ${PHONE} 联系我们。` },
          { h: '我们收集哪些信息', p: '本网站没有注册、登录和在线表单,浏览时我们不会要求你填写任何个人信息。只有当你通过 WhatsApp、邮件或电话联系我们预订时,我们才会收到你主动提供的内容,通常包括称呼、联系电话、上门地址、房屋的房间和浴室数量、希望的上门时间,以及你补充的说明。' },
          { h: '我们怎么使用', p: '这些信息只用于报价、安排上门、服务过程中的沟通以及售后跟进。我们不会出售你的信息,也不会拿它做与清洁服务无关的推广。' },
          { h: '会分享给谁', p: '为了完成服务,上门的保洁人员会知道你的地址、联系方式和清洁要求。除此之外,只有在法律要求时我们才会向主管部门提供信息。你使用 WhatsApp 或邮件联系我们时,消息由这些服务的提供方传输和保存,适用它们各自的隐私政策。' },
          { h: '网站的技术记录', p: '本网站托管在第三方平台上。和大多数网站一样,托管方会自动记录访问时的 IP 地址、浏览器类型和访问时间,用于保障安全和稳定运行。我们不会用这些记录来识别你的身份。' },
          { h: '保存多久,你有什么权利', p: '我们只在提供服务和履行法定义务所需的期间内保存你的信息。你可以随时联系我们,要求查看、更正或删除我们持有的你的信息。' },
        ],
      },
      {
        title: 'Cookie 政策',
        sections: [
          { h: '我们不用跟踪 Cookie', p: '本网站目前不设置任何用于广告或跟踪的 Cookie,也没有接入第三方统计或广告工具。' },
          { h: '保存在你设备上的两项设置', p: '为了让网站用起来顺手,我们在你的浏览器本地存储里保存两项内容:你选择的页面语言,以及你是否已经关闭过底部的提示条。它们只留在你的设备上,不会发送给我们,也不包含任何能识别你身份的信息。' },
          { h: '第三方', p: '网站的托管方会保留基本的访问记录,详见隐私政策。当你点击预订按钮打开 WhatsApp,或点击邮箱地址时,你会离开本网站,之后适用对应服务自己的规则。' },
          { h: '怎么清除', p: '在浏览器设置里清除本网站的站点数据,就能删除上面两项设置。清除后,页面会重新按浏览器语言显示,提示条也会再出现一次。' },
          { h: '以后的变化', p: '如果我们今后接入统计或其他会使用 Cookie 的工具,会先更新本政策,并在需要时征得你的同意。' },
        ],
      },
      {
        title: '使用条款',
        sections: [
          { h: '关于本网站', p: `本网站由 ${COMPANY} 运营,用于介绍我们的上门清洁服务并方便你发起预订。使用本网站即表示你同意以下条款。` },
          { h: '价格与预订', p: '网站上的价格计算器给出的是根据房间和浴室数量得出的预估价格,不构成最终报价。你发来预订请求后,需经我们回复确认时间和价格,预订才算成立。如果现场情况与你提供的信息明显不符,我们会在开始前与你沟通并重新确认价格。' },
          { h: '付款', p: '付款方式和时间在确认预订时与你约定。' },
          { h: '改期与取消', p: '在约定开始时间 24 小时之前改期或取消不收取费用。临近开始才取消的,我们可能会收取一笔合理的空档费。' },
          { h: '需要你配合的事', p: '请确保保洁人员能在约定时间进入房屋,提前收好现金、首饰等贵重物品,并告知家里是否有宠物,以及需要特别小心的表面或物品。' },
          { h: '服务质量与问题处理', p: '如果你对清洁结果不满意,或发现物品在服务中受损,请在服务结束后 24 小时内告诉我们。我们会核实情况,并安排免费返工或与你协商合理的解决办法。' },
          { h: '网站内容', p: '本网站上的文字、图片和标识归我们或相应权利人所有,未经许可请勿复制用于商业用途。' },
          { h: '适用法律与条款变更', p: '本条款适用阿拉伯联合酋长国法律。我们可能不时更新条款,更新后的版本会发布在本页,并标明更新日期。' },
        ],
      },
    ],
  },
  en: {
    updated: 'Last updated',
    close: 'Close',
    items: [
      {
        title: 'Privacy policy',
        sections: [
          { h: 'Who we are', p: `This website is operated by ${COMPANY}. For any question about personal information, contact us at ${EMAIL} or ${PHONE}.` },
          { h: 'What we collect', p: 'This website has no accounts, logins or online forms, and browsing it does not require you to enter any personal information. We only receive what you choose to send when you contact us to book by WhatsApp, email or phone. That usually includes your name, phone number, the address to be cleaned, the number of rooms and bathrooms, your preferred time, and any notes you add.' },
          { h: 'How we use it', p: 'We use this information only to prepare a quote, arrange the visit, communicate with you during the service and follow up afterwards. We do not sell your information or use it for promotion unrelated to our cleaning services.' },
          { h: 'Who we share it with', p: 'To carry out the service, the cleaners visiting you will know your address, contact details and cleaning requirements. Beyond that, we disclose information only when the law requires it. When you reach us through WhatsApp or email, your messages are carried and stored by those providers under their own privacy policies.' },
          { h: 'Technical records', p: 'This website is hosted on a third-party platform. As with most websites, the host automatically records the IP address, browser type and time of each visit to keep the service secure and stable. We do not use these records to identify you.' },
          { h: 'Retention and your rights', p: 'We keep your information only for as long as needed to provide our services and meet legal obligations. You may contact us at any time to ask to see, correct or delete the information we hold about you.' },
        ],
      },
      {
        title: 'Cookie policy',
        sections: [
          { h: 'No tracking cookies', p: 'This website does not currently set any advertising or tracking cookies and does not use third-party analytics or advertising tools.' },
          { h: 'Two settings stored on your device', p: 'To make the site convenient to use, we keep two items in your browser\'s local storage: the page language you selected, and whether you have dismissed the notice at the bottom of the page. They stay on your device, are not sent to us, and contain nothing that identifies you.' },
          { h: 'Third parties', p: 'The website host keeps basic access records, as described in the privacy policy. When you tap a booking button to open WhatsApp, or tap our email address, you leave this website and the rules of that service apply.' },
          { h: 'How to clear them', p: 'Clearing this site\'s data in your browser settings removes both items. Afterwards the page will follow your browser language again and the notice will appear once more.' },
          { h: 'Future changes', p: 'If we later add analytics or other tools that use cookies, we will update this policy first and ask for your consent where required.' },
        ],
      },
      {
        title: 'Terms of use',
        sections: [
          { h: 'About this website', p: `This website is operated by ${COMPANY} to present our home cleaning services and let you start a booking. By using it you agree to the terms below.` },
          { h: 'Prices and bookings', p: 'The price calculator on this website gives an estimate based on the number of rooms and bathrooms. It is not a final quote. A booking is made only once we have replied to your request and confirmed the time and price. If the property differs noticeably from the details you gave, we will discuss this with you and reconfirm the price before starting.' },
          { h: 'Payment', p: 'The method and timing of payment are agreed with you when the booking is confirmed.' },
          { h: 'Rescheduling and cancellation', p: 'You may reschedule or cancel free of charge up to 24 hours before the agreed start time. For later cancellations we may charge a reasonable fee for the reserved slot.' },
          { h: 'What we need from you', p: 'Please make sure the cleaners can enter the property at the agreed time, put away cash, jewellery and other valuables beforehand, and tell us about any pets and any surfaces or items that need special care.' },
          { h: 'Quality and problems', p: 'If you are not satisfied with the result, or find that something was damaged during the service, please tell us within 24 hours of the visit. We will look into it and either return to put it right at no charge or agree a reasonable solution with you.' },
          { h: 'Website content', p: 'The text, images and logos on this website belong to us or their respective owners. Please do not copy them for commercial use without permission.' },
          { h: 'Governing law and changes', p: 'These terms are governed by the laws of the United Arab Emirates. We may update them from time to time. The updated version will be published on this page with its date.' },
        ],
      },
    ],
  },
};
