<script lang="ts">
  // 擦拭遮罩:画布上盖一层去色发灰的同一张图,指针划过处擦掉,露出父元素的原图背景。
  // 监听挂在父元素上(画布在内容层之下,自己收不到指针事件)。
  let { src, brush = 150 }: { src: string; brush?: number } = $props();
  let canvas: HTMLCanvasElement;

  $effect(() => {
    const host = canvas.parentElement!;
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    let dpr = 1;
    let last: { x: number; y: number } | null = null;

    function paint() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = host.clientWidth;
      const h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      if (!img.naturalWidth) return;

      // 与 CSS background-size: cover + center 同一套算法,保证上下两层对齐
      const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.globalCompositeOperation = 'source-over';
      ctx.drawImage(img, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh);
      ctx.globalCompositeOperation = 'saturation';
      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgb(58 54 50 / 0.5)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function wipe(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      const point = { x: (e.clientX - rect.left) * dpr, y: (e.clientY - rect.top) * dpr };
      const from = last ?? point;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = brush * dpr;
      ctx.shadowColor = '#000';
      ctx.shadowBlur = 24 * dpr;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      ctx.shadowBlur = 0;
      last = point;
    }

    const reset = () => (last = null);
    const resize = new ResizeObserver(() => {
      last = null;
      paint();
    });

    img.onload = paint;
    img.src = src;
    resize.observe(host);
    host.addEventListener('pointermove', wipe);
    host.addEventListener('pointerleave', reset);
    host.addEventListener('pointercancel', reset);

    return () => {
      resize.disconnect();
      host.removeEventListener('pointermove', wipe);
      host.removeEventListener('pointerleave', reset);
      host.removeEventListener('pointercancel', reset);
    };
  });
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
  canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
</style>
