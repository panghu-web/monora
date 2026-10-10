<script lang="ts">
  import { t } from './i18n.svelte';

  // 没有素材时用渐变占位;有图后传 before / after 图片地址
  let { label, before, after }: { label: string; before?: string; after?: string } = $props();
  let pos = $state(50);
</script>

<figure class="compare" style:--pos="{pos}%">
  <div class="pane after" style:background-image={after ? `url(${after})` : undefined}>
    <span class="tag right">{t().compare.after}</span>
  </div>
  <div class="pane before" style:background-image={before ? `url(${before})` : undefined}>
    <span class="tag">{t().compare.before}</span>
  </div>
  <div class="handle" aria-hidden="true">↔</div>
  <input type="range" min="0" max="100" bind:value={pos} aria-label={label} />
  <figcaption>{label}</figcaption>
</figure>

<style>
  .compare {
    position: relative;
    margin: 0;
    aspect-ratio: 4 / 3;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  .pane {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
  }
  .after {
    background-image: linear-gradient(135deg, #f4f1ea, #cfe3da 60%, #9fc4b5);
  }
  .before {
    background-image: linear-gradient(135deg, #8a8073, #6b6257 60%, #4d463e);
    clip-path: inset(0 calc(100% - var(--pos)) 0 0);
  }
  .tag {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background: rgb(0 0 0 / 0.55);
    color: #fff;
    font-size: 12px;
  }
  .tag.right {
    left: auto;
    right: 12px;
  }
  .handle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--pos);
    width: 2px;
    background: #fff;
    display: grid;
    place-items: center;
    color: var(--ink);
    pointer-events: none;
  }
  .handle::before {
    content: '';
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #fff;
    box-shadow: var(--shadow);
    z-index: -1;
  }
  input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: ew-resize;
  }
  figcaption {
    position: absolute;
    left: 12px;
    bottom: 12px;
    padding: 4px 10px;
    border-radius: 999px;
    background: var(--surface);
    font-size: 13px;
    font-weight: 600;
    pointer-events: none;
  }
</style>
