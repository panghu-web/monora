<script lang="ts">
  import { t } from './i18n.svelte';

  // 只有一张图时,「清洁前」用同一张图加滤镜做旧;有真实的前后对照图就传 before
  let { label, img, before }: { label: string; img: string; before?: string } = $props();
  let pos = $state(50);
</script>

<figure class="compare" style:--pos="{pos}%">
  <div class="pane after" style:background-image="url({img})">
    <span class="tag right">{t().compare.after}</span>
  </div>
  <div class="pane before" class:aged={!before} style:background-image="url({before ?? img})">
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
  .aged {
    filter: grayscale(0.75) sepia(0.35) brightness(0.62) contrast(0.85);
  }
  .before {
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
