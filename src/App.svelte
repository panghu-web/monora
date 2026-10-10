<script lang="ts">
  import Calculator from './lib/Calculator.svelte';
  import Compare from './lib/Compare.svelte';
  import Wipe from './lib/Wipe.svelte';
  import { bookingHref } from './lib/booking.svelte';
  import { POLICY_UPDATED, policies } from './lib/policies';
  import { BRAND, COMPANY, EMAIL, LANGS, PHONE, i18n, setLang, t } from './lib/i18n.svelte';

  const BASE = import.meta.env.BASE_URL;
  const HERO_IMG = `${import.meta.env.BASE_URL}hero.jpg`;
  const COMPARE_IMGS = ['kitchen', 'bedroom', 'living', 'bathroom'].map((n) => ({
    after: `${BASE}${n}.jpg`,
    before: `${BASE}${n}-before.jpg`,
  }));

  let dialog: HTMLDialogElement;
  let policyIndex = $state(0);
  const policy = $derived(policies[i18n.lang].items[policyIndex]);

  function openPolicy(index: number) {
    policyIndex = index;
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  const COOKIE_KEY = 'cookie-ok';

  // 点过「知道了」就记在本地,之后不再弹
  function readCookieOk() {
    try {
      return localStorage.getItem(COOKIE_KEY) === '1';
    } catch {
      return false; // 读不了存储就每次都提示
    }
  }
  let cookieOk = $state(readCookieOk());

  function acceptCookie() {
    cookieOk = true;
    try {
      localStorage.setItem(COOKIE_KEY, '1');
    } catch {
      // 存不了就只在本次访问生效
    }
  }

  $effect(() => {
    document.documentElement.lang = i18n.lang;
  });
</script>

<header class="nav">
  <a class="brand" href="#top"><img src="{BASE}logo-wordmark.png" alt={COMPANY} width="720" height="149" /></a>
  <nav>
    <a href="#why">{t().nav.why}</a>
    <a href="#contact">{t().nav.contact}</a>
  </nav>
  <div class="langs">
    {#each LANGS as lang}
      <button class:active={i18n.lang === lang.code} aria-pressed={i18n.lang === lang.code} onclick={() => setLang(lang.code)}>
        {lang.short}
      </button>
    {/each}
  </div>
  <a class="btn btn-accent" href={bookingHref()} target="_blank" rel="noopener">{t().nav.book}</a>
</header>

<main id="top">
  <section class="hero" style:background-image="url({HERO_IMG})">
    <Wipe src={HERO_IMG} />
    <div class="hero-body">
      <h1>{t().hero.title[0]}<br />{t().hero.title[1]}</h1>
      <p>{t().hero.sub}</p>
      <Calculator />
    </div>
  </section>

  <section id="why" class="band">
    <div class="wrap split">
      <div>
        <h2>{t().why.title}</h2>
        <p>{t().why.body}</p>
      </div>
      <div class="grid two">
        {#each t().why.points as point}
          <article class="card flat">
            <h3>{point.name}</h3>
            <p>{point.desc}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <section class="wrap">
    <h2>{t().compare.title}</h2>
    <div class="grid three">
      {#each t().compare.labels as label, i}
        <Compare {label} img={COMPARE_IMGS[i].after} before={COMPARE_IMGS[i].before} />
      {/each}
    </div>
  </section>

  <section class="wrap">
    <h2>{t().reviews.title}</h2>
    <div class="grid three">
      {#each t().reviews.items as review}
        <article class="card">
          <span class="stars" aria-label="5/5">★★★★★</span>
          <p>{review.text}</p>
          <footer><b>{review.name}</b> · {review.area}</footer>
        </article>
      {/each}
    </div>
  </section>

  <section class="band">
    <div class="wrap">
      <h2>{t().steps.title}</h2>
      <ol class="grid three steps">
        {#each t().steps.items as step, i}
          <li>
            <span class="badge">{i + 1}</span>
            <h3>{step.name}</h3>
            <p>{step.desc}</p>
          </li>
        {/each}
      </ol>
    </div>
  </section>

  <section class="wrap narrow">
    <h2>{t().faq.title}</h2>
    {#each t().faq.items as item}
      <details>
        <summary>{item.q}</summary>
        <p>{item.a}</p>
      </details>
    {/each}
  </section>

  <section id="book" class="wrap">
    <div class="cta">
      <h2>{t().cta.title}</h2>
      <p>{t().cta.sub}</p>
      <a class="btn btn-accent" href={bookingHref()} target="_blank" rel="noopener">{t().cta.btn}</a>
    </div>
  </section>
</main>

<footer id="contact" class="footer">
  <div class="wrap grid three">
    <div>
      <img class="mark" src="{BASE}logo-mark.png" alt={BRAND} width="512" height="470" />
      <small>© {new Date().getFullYear()} {COMPANY} · {t().footer.rights}</small>
    </div>
    <div>
      <h3>{t().footer.info}</h3>
      {#each policies[i18n.lang].items as item, i}
        <button class="link" onclick={() => openPolicy(i)}>{item.title}</button>
      {/each}
    </div>
    <div>
      <h3>{t().footer.contact}</h3>
      <a href="tel:{PHONE.replaceAll(' ', '')}">{PHONE}</a>
      <a href="https://wa.me/{PHONE.replace(/\D/g, '')}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="mailto:{EMAIL}">{EMAIL}</a>
      <span>{t().footer.address}</span>
    </div>
  </div>
</footer>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} class="policy" onclick={(e) => e.target === dialog && dialog.close()}>
  <article>
    <header>
      <h2>{policy.title}</h2>
      <button class="close" aria-label={policies[i18n.lang].close} onclick={() => dialog.close()}>×</button>
    </header>
    <small>{policies[i18n.lang].updated}: {POLICY_UPDATED}</small>
    {#each policy.sections as section}
      <h3>{section.h}</h3>
      <p>{section.p}</p>
    {/each}
  </article>
</dialog>

{#if !cookieOk}
  <div class="cookie" role="status">
    <span>{t().cookie.text}</span>
    <button class="btn btn-dark" onclick={acceptCookie}>{t().cookie.ok}</button>
  </div>
{/if}

<style>
  .nav {
    position: fixed;
    z-index: 10;
    top: 12px;
    left: 50%;
    translate: -50% 0;
    width: min(calc(100% - 32px), var(--max));
    padding: 10px 12px 10px 22px;
    border-radius: 999px;
    background: rgb(14 13 11 / 0.9);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    border: 1px solid rgb(201 164 92 / 0.28);
    color: #f1e9d8;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .nav nav {
    display: flex;
    gap: 24px;
    margin-inline: auto;
    font-weight: 500;
  }
  .brand img {
    display: block;
    height: 34px;
    width: auto;
  }
  .nav nav a:hover {
    color: var(--accent);
  }
  .mark {
    width: 96px;
    height: auto;
  }

  .hero {
    position: relative;
    min-height: 100svh;
    padding: 120px 16px 64px;
    display: grid;
    align-content: center;
    color: #fff;
    background: var(--brand) center / cover no-repeat;
  }
  .hero-body {
    position: relative;
    display: grid;
    justify-items: center;
    gap: 20px;
    text-align: center;
    text-shadow: 0 2px 14px rgb(0 0 0 / 0.55);
  }
  .hero-body :global(.calc) {
    text-shadow: none;
  }
  .hero h1 {
    font-size: clamp(32px, 6vw, 60px);
    line-height: 1.15;
  }
  .hero p {
    max-width: 560px;
  }

  .wrap {
    width: min(calc(100% - 32px), var(--max));
    margin-inline: auto;
    padding-block: 72px;
  }
  .band > .wrap {
    padding-block: 72px;
  }
  .narrow {
    max-width: 760px;
  }
  .band {
    background: var(--brand);
    color: #fff;
  }
  h2 {
    font-size: clamp(26px, 4vw, 40px);
    margin-bottom: 28px;
  }
  h3 {
    font-size: 18px;
  }

  .grid {
    display: grid;
    gap: 20px;
  }
  .two {
    grid-template-columns: repeat(2, 1fr);
  }
  .three {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  .split {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    align-items: center;
  }

  .card {
    padding: 24px;
    border-radius: var(--radius-lg);
    background: var(--surface);
    box-shadow: var(--shadow);
    display: grid;
    gap: 10px;
    align-content: start;
  }
  .card p {
    color: var(--ink-soft);
  }
  .card.flat {
    background: rgb(255 255 255 / 0.08);
    box-shadow: none;
  }
  .card.flat p {
    color: rgb(255 255 255 / 0.75);
  }
  .card footer {
    font-size: 14px;
    color: var(--ink-soft);
  }
  .badge {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: var(--brand);
    color: var(--accent);
    border: 1px solid rgb(201 164 92 / 0.4);
    font-weight: 700;
  }
  .stars {
    color: #e0a526;
    letter-spacing: 2px;
  }

  .steps {
    list-style: none;
    padding: 0;
  }
  .steps li {
    display: grid;
    gap: 10px;
  }
  .steps p {
    color: rgb(255 255 255 / 0.75);
  }

  details {
    border-bottom: 1px solid var(--line);
  }
  summary {
    padding: 18px 0;
    font-weight: 600;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: '+';
    font-size: 22px;
    line-height: 1;
    color: var(--accent-ink);
  }
  details[open] summary::after {
    content: '−';
  }
  details p {
    padding-bottom: 18px;
    color: var(--ink-soft);
  }

  .cta {
    padding: 56px 24px;
    border-radius: var(--radius-lg);
    background: var(--brand);
    color: #fff;
    text-align: center;
    display: grid;
    justify-items: center;
    gap: 12px;
  }
  .cta h2 {
    margin: 0;
  }

  .footer {
    background: #060605;
    color: rgb(255 255 255 / 0.8);
    font-size: 14px;
  }
  .footer .wrap {
    padding-block: 48px;
  }
  .footer .wrap > div {
    display: grid;
    gap: 8px;
    align-content: start;
  }
  .footer h3 {
    color: #fff;
    font-size: 15px;
  }
  .langs {
    display: flex;
    padding: 3px;
    border-radius: 999px;
    border: 1px solid rgb(201 164 92 / 0.35);
    font-size: 13px;
    font-weight: 600;
  }
  .langs button {
    padding: 4px 10px;
    border-radius: 999px;
  }
  .langs button.active {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--on-accent);
  }


  .link {
    text-align: left;
  }
  .link:hover,
  .footer a:hover {
    color: var(--accent);
  }
  .policy {
    width: min(calc(100% - 32px), 680px);
    max-height: min(84svh, 760px);
    padding: 0;
    border: 0;
    border-radius: var(--radius-lg);
    background: var(--surface);
    color: var(--ink);
    box-shadow: var(--shadow);
  }
  .policy::backdrop {
    background: rgb(0 0 0 / 0.6);
  }
  .policy article {
    padding: 28px;
    display: grid;
    gap: 10px;
  }
  .policy header {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 16px;
  }
  .policy h2 {
    margin: 0;
    font-size: 26px;
  }
  .policy h3 {
    margin-top: 10px;
    font-size: 16px;
  }
  .policy p,
  .policy small {
    color: var(--ink-soft);
  }
  .close {
    width: 36px;
    height: 36px;
    flex: none;
    border-radius: 50%;
    background: var(--muted);
    font-size: 22px;
    line-height: 1;
  }

  .cookie {
    position: fixed;
    z-index: 10;
    bottom: 16px;
    left: 50%;
    translate: -50% 0;
    width: min(calc(100% - 32px), 560px);
    padding: 12px 12px 12px 20px;
    border-radius: 999px;
    background: var(--surface);
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: 14px;
  }

  @media (max-width: 720px) {
    .cookie {
      border-radius: var(--radius-lg);
    }
    .nav nav {
      display: none;
    }
    .nav {
      gap: 8px;
      padding-left: 16px;
    }
    .brand {
      margin-right: auto;
    }
    .brand img {
      height: 26px;
    }
    .nav :global(.btn) {
      padding: 10px 14px;
      font-size: 14px;
    }
    .split,
    .two {
      grid-template-columns: 1fr;
    }
    .wrap,
    .band > .wrap {
      padding-block: 48px;
    }
  }
</style>
