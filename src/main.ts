import { hydrate, mount } from 'svelte';
import App from './App.svelte';
import { restoreLang } from './lib/i18n.svelte';
import './app.css';

// 构建产物里页面已预渲染成英文 HTML,接管它;开发模式(pnpm dev)没有预渲染,直接渲染
const target = document.getElementById('app')!;
if (target.firstElementChild) hydrate(App, { target });
else mount(App, { target });
restoreLang();
