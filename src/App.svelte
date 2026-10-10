<script lang="ts">
  import Calculator from './lib/Calculator.svelte';
  import Compare from './lib/Compare.svelte';
  import Wipe from './lib/Wipe.svelte';
  import { BRAND, CURRENCY, EMAIL, LANGS, PHONE, i18n, t } from './lib/i18n.svelte';

  const HERO_IMG = `${import.meta.env.BASE_URL}hero.svg`;
  const PLAN_PRICES = [200, 320, null, null]; // 示例价格;null = 按需报价
  let cookieOk = $state(false);

  $effect(() => {
    document.documentElement.lang = i18n.lang;
  });
</script>

<header class="nav">
  <a class="brand" href="#top">{BRAND}</a>
  <nav>
    <a href="#services">{t().nav.services}</a>
    <a href="#why">{t().nav.why}</a>
    <a href="#contact">{t().nav.contact}</a>
  </nav>
  <a class="btn btn-dark" href="#book">{t().nav.book}</a>
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

  <section id="services" class="wrap">
    <p class="kicker">{t().plans.kicker}</p>
    <h2>{t().plans.title}</h2>
    <div class="grid four">
      {#each t().plans.items as item, i}
        {@const price = PLAN_PRICES[i]}
        <article class="card">
          <span class="badge">{i + 1}</span>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
          <strong>{price ? `${price} ${CURRENCY} ${t().plans.from}` : t().plans.quote}</strong>
          <a class="btn btn-outline" href="#book">{price ? t().plans.pick : t().plans.ask}</a>
        </article>
      {/each}
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
      {#each t().compare.labels as label}
        <Compare {label} />
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
      <a class="btn btn-accent" href="mailto:{EMAIL}">{t().cta.btn}</a>
    </div>
  </section>
</main>

<footer id="contact" class="footer">
  <div class="wrap grid three">
    <div>
      <b class="brand">{BRAND}</b>
      <div class="langs">
        {#each LANGS as lang}
          <button class:active={i18n.lang === lang.code} onclick={() => (i18n.lang = lang.code)}>
            {lang.label}
          </button>
        {/each}
      </div>
      <small>© {new Date().getFullYear()} {BRAND} · {t().footer.rights}</small>
    </div>
    <div>
      <h3>{t().footer.info}</h3>
      {#each t().footer.links as link}
        <a href="#top">{link}</a>
      {/each}
    </div>
    <div>
      <h3>{t().footer.contact}</h3>
      <a href="tel:{PHONE.replaceAll(' ', '')}">{PHONE}</a>
      <a href="mailto:{EMAIL}">{EMAIL}</a>
      <span>{t().footer.address}</span>
    </div>
  </div>
</footer>

{#if !cookieOk}
  <div class="cookie" role="status">
    <span>{t().cookie.text}</span>
    <button class="btn btn-dark" onclick={() => (cookieOk = true)}>{t().cookie.ok}</button>
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
    background: rgb(255 255 255 / 0.92);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .nav nav {
    display: flex;
    gap: 24px;
    margin-inline: auto;
    font-weight: 500;
  }
  .brand {
    font-size: 20px;
    font-weight: 800;
    color: var(--accent);
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
  .kicker {
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 4px;
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
  .four {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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
  .card .btn {
    margin-top: 6px;
    text-align: center;
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
    background: var(--accent);
    color: #fff;
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
    color: var(--accent);
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
    background: #0d2420;
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
  .footer .brand {
    color: #fff;
  }
  .langs {
    display: flex;
    gap: 8px;
  }
  .langs button {
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid rgb(255 255 255 / 0.3);
    color: inherit;
  }
  .langs button.active {
    background: #fff;
    color: var(--ink);
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
    .nav nav {
      display: none;
    }
    .nav {
      justify-content: space-between;
    }
    .split,
    .two {
      grid-template-columns: 1fr;
    }
    .wrap,
    .band > .wrap {
      padding-block: 48px;
    }
    .cookie {
      border-radius: var(--radius-lg);
    }
  }
</style>
