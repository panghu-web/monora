<script lang="ts">
  import { KITCHENS, booking, bookingHref, total } from './booking.svelte';
  import { CURRENCY, t } from './i18n.svelte';

  const rows = $derived([
    { label: t().calc.rooms, get: () => booking.rooms, set: (v: number) => (booking.rooms = v), min: 1, fixed: false },
    { label: t().calc.baths, get: () => booking.baths, set: (v: number) => (booking.baths = v), min: 1, fixed: false },
    // 厨房必选、数量固定,两个按钮都不可点
    { label: t().calc.kitchen, get: () => KITCHENS, set: () => {}, min: KITCHENS, fixed: true },
  ]);
</script>

<div class="calc">
  {#each rows as row}
    <div class="row">
      <span>{row.label}</span>
      <div class="stepper">
        <button aria-label="-" disabled={row.get() <= row.min} onclick={() => row.set(row.get() - 1)}>−</button>
        <output>{row.get()}</output>
        <button aria-label="+" disabled={row.fixed || row.get() >= 20} onclick={() => row.set(row.get() + 1)}>+</button>
      </div>
    </div>
  {/each}

  <div class="total">
    <span>{t().calc.estimate}</span>
    <strong>{total()} {CURRENCY}</strong>
  </div>
  <a class="btn btn-dark" href={bookingHref()} target="_blank" rel="noopener">{t().calc.cta}</a>
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
