// 用服务端构建产物把页面渲染成 HTML,填进客户端构建出的 dist/index.html
import { readFile, rm, writeFile } from 'node:fs/promises';

const { renderApp } = await import('../dist-ssr/entry-server.js');
const { head, body } = renderApp();

const file = new URL('../dist/index.html', import.meta.url);
const html = await readFile(file, 'utf8');
const placeholder = '<div id="app"></div>';
if (!html.includes(placeholder)) throw new Error('dist/index.html 里找不到挂载点');

await writeFile(
  file,
  html.replace('</head>', `${head}</head>`).replace(placeholder, `<div id="app">${body}</div>`),
);
await rm(new URL('../dist-ssr', import.meta.url), { recursive: true, force: true });
console.log(`prerendered dist/index.html (${body.length} chars of markup)`);
