<script lang="ts">
  import { CURRENCY, t } from './i18n.svelte';

  // 示例价格,上线前替换
  const PRICE = {
    standard: { base: 200, room: 60, bath: 40, window: 15 },
    deep: { base: 320, room: 90, bath: 60, window: 15 },
  };
  type Plan = keyof typeof PRICE;

  let plan = $state<Plan>('standard');
  let rooms = $state(1);
  let baths = $state(1);
  let windows = $state(0);

  const total = $derived.by(() => {
    const p = PRICE[plan];
    return p.base + (rooms - 1) * p.room + (baths - 1) * p.bath + windows * p.window;
  });

  const rows = $derived([
    { label: t().calc.rooms, get: () => rooms, set: (v: number) => (rooms = v), min: 1 },
    { label: t().calc.baths, get: () => baths, set: (v: number) => (baths = v), min: 1 },
    { label: t().calc.windows, get: () => windows, set: (v: number) => (windows = v), min: 0 },
  ]);
</script>

<div class="calc">
  <div class="tabs" role="tablist">
    {#each ['standard', 'deep'] as const as p}
      <button role="tab" aria-selected={plan === p} class:active={plan === p} onclick={() => (plan = p)}>
        {t().calc[p]}
      </button>
    {/each}
  </div>

  {#each rows as row}
    <div class="row">
      <span>{row.label}</span>
      <div class="stepper">
        <button aria-label="-" disabled={row.get() <= row.min} onclick={() => row.set(row.get() - 1)}>−</button>
        <output>{row.get()}</output>
        <button aria-label="+" disabled={row.get() >= 20} onclick={() => row.set(row.get() + 1)}>+</button>
      </div>
    </div>
  {/each}

  <div class="total">
    <span>{t().calc.estimate}</span>
    <strong>{total} {CURRENCY}</strong>
  </div>
  <a class="btn btn-dark" href="#book">{t().calc.cta}</a>
</div>

<style>
  .calc {
    width: min(100%, 420px);
    padding: 20px;
    border-radius: var(--radius-lg);
    background: var(--surface);
    color: var(--ink);
    box-shadow: var(--shadow);
    display: grid;
    gap: 12px;
  }
  .tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .tabs button {
    padding: 10px;
    border-radius: 10px;
    background: var(--muted);
    font-weight: 600;
  }
  .tabs button.active {
    background: var(--accent);
    color: #fff;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 12px;
    background: var(--muted);
    font-weight: 600;
  }
  .stepper {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .stepper button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--surface);
    font-size: 18px;
    line-height: 1;
  }
  .stepper button:disabled {
    opacity: 0.35;
    cursor: default;
  }
  .stepper output {
    width: 28px;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }
  .total {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 4px 2px 0;
  }
  .total strong {
    font-size: 26px;
    font-variant-numeric: tabular-nums;
  }
  .btn {
    text-align: center;
  }
</style>
