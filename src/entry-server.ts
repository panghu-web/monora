// 构建时用:把整页渲染成 HTML 字符串,写进 dist/index.html,搜索引擎不执行 JS 也能看到完整内容
import { render } from 'svelte/server';
import App from './App.svelte';

export function renderApp() {
  return render(App);
}
