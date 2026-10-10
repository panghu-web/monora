<script lang="ts">
  import { CURRENCY, t } from './i18n.svelte';

  // 起步价含 1 个房间 + 1 个浴室,每多一间各加一份
  const PRICE = { base: 40, room: 20, bath: 20 };

  let rooms = $state(1);
  let baths = $state(1);

  const total = $derived(PRICE.base + (rooms - 1) * PRICE.room + (baths - 1) * PRICE.bath);

  const rows = $derived([
    { label: t().calc.rooms, get: () => rooms, set: (v: number) => (rooms = v), min: 1 },
    { label: t().calc.baths, get: () => baths, set: (v: number) => (baths = v), min: 1 },
  ]);
</script>

<div class="calc">
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
