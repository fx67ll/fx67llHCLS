const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const write = (p, c) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, c, 'utf8'); };
const repeatDiv = (n) => Array.from({ length: n }, () => '<div></div>').join('\n      ');

const awesomeLoaders = [
  { id: 'ball-climbing-dot',  name: 'Ball Climbing Dot',  cls: 'la-ball-climbing-dot',  divs: 4, bg: '#79bbb5', desc: '小球沿阶梯向上攀爬，阶梯依次出现的趣味动画。' },
  { id: 'ball-clip-rotate',   name: 'Ball Clip Rotate',   cls: 'la-ball-clip-rotate',   divs: 1, bg: '#f6d860', desc: '半圆环不断旋转，最常用的圈圈型加载效果之一。' },
  { id: 'ball-fall',          name: 'Ball Fall',          cls: 'la-ball-fall',          divs: 3, bg: '#f4696b', desc: '三个小球依次从上向下坠落、循环播放。' },
  { id: 'ball-newton-cradle', name: 'Ball Newton Cradle', cls: 'la-ball-newton-cradle', divs: 4, bg: '#fd9372', desc: '模拟牛顿摆，两端的球轮流摆动。' },
  { id: 'ball-pulse',         name: 'Ball Pulse',         cls: 'la-ball-pulse',         divs: 3, bg: '#9b7ad5', desc: '三个圆球依次脉冲缩放，简洁且经典。' },
  { id: 'ball-running-dots',  name: 'Ball Running Dots',  cls: 'la-ball-running-dots',  divs: 5, bg: '#9b7fe6', desc: '一串小点排成轨道、首尾循环奔跑。' },
  { id: 'ball-scale-pulse',   name: 'Ball Scale Pulse',   cls: 'la-ball-scale-pulse',   divs: 2, bg: '#fec54f', desc: '两个圆球同心放大、缩小，类似涟漪效果。' },
  { id: 'ball-scale',         name: 'Ball Scale',         cls: 'la-ball-scale',         divs: 1, bg: '#87c4a3', desc: '单个圆球持续放大并淡出，简洁明快。' },
  { id: 'ball-spin-clockwise',name: 'Ball Spin Clockwise',cls: 'la-ball-spin-clockwise',divs: 8, bg: '#9787ea', desc: '八个圆点环形排列，依次顺时针闪烁。' },
  { id: 'ball-spin-rotate',   name: 'Ball Spin Rotate',   cls: 'la-ball-spin-rotate',   divs: 2, bg: '#5fa5d2', desc: '两个小球围绕中心旋转，配合缩放节奏。' },
  { id: 'ball-spin',          name: 'Ball Spin',          cls: 'la-ball-spin',          divs: 8, bg: '#3ccad1', desc: '八个圆点环形排列、依次淡入淡出，类似 iOS 加载圈。' },
  { id: 'line-scale',         name: 'Line Scale',         cls: 'la-line-scale',         divs: 5, bg: '#dbbe39', desc: '五条竖线按节奏缩放，常用于音频/播放界面。' },
  { id: 'pacman',             name: 'Pacman',             cls: 'la-pacman',             divs: 6, bg: '#fec54f', desc: '吃豆人造型动画，一边吃豆一边追逐。' },
  { id: 'square-jelly-box',   name: 'Square Jelly Box',   cls: 'la-square-jelly-box',   divs: 2, bg: '#79bbb5', desc: '方块翻滚弹跳，下方还有阴影联动。' },
  { id: 'square-loader',      name: 'Square Loader',      cls: 'la-square-loader',      divs: 1, bg: '#f6d860', desc: '方框旋转并被内部填充，简约风格。' },
  { id: 'timer',              name: 'Timer',              cls: 'la-timer',              divs: 1, bg: '#79bbb5', desc: '钟表样式的加载效果，时针、分针不停转动。' },
];

const betterLoaders = [
  { id: 'better-circle',        name: 'Circle',         dataLoader: 'circle',        desc: '常见的圆环加载，单段缺口持续旋转。' },
  { id: 'better-circle-side',   name: 'Circle Side',    dataLoader: 'circle-side',   desc: '半透明圆环加一段醒目高亮。' },
  { id: 'better-arrow-circle',  name: 'Arrow Circle',   dataLoader: 'arrow-circle',  desc: '圆环两端各有一支箭头，反向旋转。' },
  { id: 'better-ball-scale',    name: 'Ball Scale',     dataLoader: 'ball-scale',    desc: '一个圆持续放大并淡出。' },
  { id: 'better-ball-circle',   name: 'Ball Circle',    dataLoader: 'ball-circle',   desc: '两个圆球交替沿四角移动。' },
  { id: 'better-rectangle',     name: 'Rectangle',      dataLoader: 'rectangle',     desc: '三根条形依次跳起，类似音柱。' },
  { id: 'better-heart',         name: 'Heart',          dataLoader: 'heart',         desc: '心形持续放大、缩小，可爱风格。' },
  { id: 'better-ball-rotate',   name: 'Ball Rotate',    dataLoader: 'ball-rotate',   desc: '三个圆球绕中心旋转并缩放。' },
  { id: 'better-ball-pulse',    name: 'Ball Pulse',     dataLoader: 'ball-pulse',    desc: '左右两个圆球交替脉冲。' },
  { id: 'better-jumping',       name: 'Jumping',        dataLoader: 'jumping',       desc: '两个方块跳起、翻转，带 3D 透视。' },
  { id: 'better-satellite',     name: 'Satellite',      dataLoader: 'satellite',     desc: '一颗卫星围绕中心月球旋转。' },
];

const multipleLoaders = [
  { id: 'demo1',  name: 'Demo 1 · 3D 翻转方块', file: 'demo1.html',  bg: '#bd4932', desc: '正方体沿 X、Y 轴轮流翻转，类似投影骰子的视觉效果。' },
  { id: 'demo2',  name: 'Demo 2 · 八点旋转方阵', file: 'demo2.html',  bg: '#db9e36', desc: '一个大方块四周八个小方块依次平移，整体呈 45° 倾斜。' },
  { id: 'demo8',  name: 'Demo 8 · 四方块循环',   file: 'demo8.html',  bg: '#2c3e50', desc: '四个方块同时向四个方向弹出再回归，整体旋转。' },
  { id: 'demo11', name: 'Demo 11 · 三圆缩放',    file: 'demo11.html', bg: '#374140', desc: '三个圆点错峰缩放至消失，简洁干净。' },
  { id: 'demo12', name: 'Demo 12 · 八点圆形方阵',file: 'demo12.html', bg: '#dc3522', desc: '与 Demo 2 类似，但所有方块改为圆形。' },
  { id: 'demo16', name: 'Demo 16 · 四点旋转散开',file: 'demo16.html', bg: '#cf4a30', desc: '四个圆点在旋转的同时向外散开再聚拢。' },
  { id: 'demo17', name: 'Demo 17 · 横向四点',    file: 'demo17.html', bg: '#ed8c2b', desc: '横向排列的四个圆点旋转加散开，节奏感强。' },
  { id: 'demo18', name: 'Demo 18 · 波浪奔跑',    file: 'demo18.html', bg: '#db5800', desc: '五个圆点排成行，从右向左跳跃式波浪奔跑。' },
  { id: 'demo19', name: 'Demo 19 · 九宫格脉冲',  file: 'demo19.html', bg: '#ff9000', desc: '九个圆点排成 3x3 方阵依次脉冲缩放。' },
  { id: 'demo23', name: 'Demo 23 · 飞行方块',    file: 'demo23.html', bg: '#334d5c', desc: '一个长方块在屏幕中央来回飞行并自转。' },
];

const singleLoaders = [
  { id: 'engine-loader', name: 'Engine Loader', file: 'engine-loader.html', bg: 'tomato',  desc: '五个气缸活塞同步运动，拼出 ROBOT 字样。' },
  { id: 'solar-loader',  name: 'Solar Loader',  file: 'solar-loader.html',  bg: '#000',    desc: '太阳系九大行星各自旋转，氛围拉满。' },
  { id: 'turn-book',     name: 'Turn Book',     file: 'turn-book.html',     bg: '#fc440f', desc: '翻书效果加载动画，模拟一页页翻开。' },
  { id: 'windows-loader',name: 'Windows Loader',file: 'windows-loader.html',bg: '#68abad', desc: 'Windows 风格的四色方块旋转加载。' },
];

const all = [
  ...awesomeLoaders.map(l => ({ ...l, category: 'awesome', categoryName: 'Load Awesome' })),
  ...betterLoaders.map(l => ({ ...l, category: 'better',   categoryName: 'Load Better' })),
  ...multipleLoaders.map(l => ({ ...l, category: 'multiple', categoryName: 'Load Multiple' })),
  ...singleLoaders.map(l => ({ ...l, category: 'single',   categoryName: 'Load Single' })),
];

// Common stylesheet for all generated pages
const COMMON_CSS = `
  *,*::before,*::after { box-sizing: border-box; }
  :root {
    --bg: #f7f8fa;
    --card: #ffffff;
    --border: #e6e8ec;
    --text: #1a1d24;
    --text-muted: #6b7280;
    --accent: #3b82f6;
    --accent-hover: #2563eb;
    --code-bg: #0f172a;
    --code-text: #e2e8f0;
    --shadow: 0 1px 2px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.05);
  }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
                 "Hiragino Sans GB", "Microsoft YaHei", Roboto, "Helvetica Neue", sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  a { color: var(--accent); text-decoration: none; }
  a:hover { color: var(--accent-hover); }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  pre {
    background: var(--code-bg);
    color: var(--code-text);
    padding: 18px 20px;
    border-radius: 10px;
    overflow-x: auto;
    font-size: 13.5px;
    line-height: 1.65;
    margin: 0;
  }
  code {
    font-family: "SF Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  p code, li code {
    background: rgba(99,102,241,.08);
    color: #4338ca;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }
`;

const HEADER_HTML = (subtitle) => `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${subtitle ? '../' : ''}index.html" class="brand">
        <span class="brand-dot"></span>
        <span>Loading 效果集</span>
      </a>
      ${subtitle ? `<a href="../index.html" class="back-btn">← 返回首页</a>` : ''}
    </div>
  </header>
`;

const FOOTER_HTML = `
  <footer class="site-footer">
    <div class="container">
      <p>共收录 ${all.length} 个 loading 动画 · 资源整理自 loader-awesome / loader-better / loader-multiple / loader-single</p>
    </div>
  </footer>
`;

// =============== Build single detail page ===============
function detailPage(l) {
  let previewHtml = '';
  let htmlSnippet = '';
  let cssSnippet = '';
  let usageHtml = '';
  let extraHead = '';
  const isIframe = l.category === 'multiple' || l.category === 'single';

  if (l.category === 'awesome') {
    extraHead = `<link rel="stylesheet" href="../loader-awesome/css/${l.id}.min.css">`;
    previewHtml = `
        <div class="${l.cls} la-2x">
          ${repeatDiv(l.divs)}
        </div>`;
    htmlSnippet = `<div class="${l.cls}">\n  ${Array.from({length: l.divs}, () => '<div></div>').join('\n  ')}\n</div>`;
    usageHtml = `
      <ol>
        <li>在 <code>&lt;head&gt;</code> 中引入 CSS：<br>
          <code>&lt;link rel="stylesheet" href="loader-awesome/css/${l.id}.min.css"&gt;</code>
        </li>
        <li>在页面中使用对应的 HTML 结构（见下方代码）。</li>
        <li>可选尺寸修饰类：<code>.la-sm</code>（小）、<code>.la-2x</code>（2 倍）、<code>.la-3x</code>（3 倍）。</li>
        <li>可选主题修饰类：<code>.la-dark</code>（深色），或在元素上设置 <code>color</code> 自定义颜色。</li>
      </ol>`;
    cssSnippet = `详见仓库内 <a href="../loader-awesome/css/${l.id}.css" target="_blank">loader-awesome/css/${l.id}.css</a>（已经是完整可复用样式）。`;
  } else if (l.category === 'better') {
    extraHead = `<link rel="stylesheet" href="../loader-better/css/loaders.min.css">`;
    previewHtml = `
        <div data-loader="${l.dataLoader}"></div>`;
    htmlSnippet = `<div data-loader="${l.dataLoader}"></div>`;
    usageHtml = `
      <ol>
        <li>在 <code>&lt;head&gt;</code> 中引入：<br>
          <code>&lt;link rel="stylesheet" href="loader-better/css/loaders.min.css"&gt;</code>
        </li>
        <li>在页面中放置 <code>&lt;div data-loader="${l.dataLoader}"&gt;&lt;/div&gt;</code> 即可。</li>
        <li>该套样式默认使用白色，建议放在深色背景上。</li>
        <li>同一份 CSS 内还包含 11 种风格，仅修改 <code>data-loader</code> 的值即可切换。</li>
      </ol>`;
    cssSnippet = `详见仓库内 <a href="../loader-better/css/loaders.css" target="_blank">loader-better/css/loaders.css</a>（一份样式表包含全部 11 种 loader）。`;
  } else {
    // multiple / single - iframe the original full-page demo
    const dirName = l.category === 'multiple' ? 'loader-multiple' : 'loader-single';
    previewHtml = `
        <iframe class="iframe-preview" src="../${dirName}/${l.file}" loading="lazy" title="${esc(l.name)} 预览"></iframe>`;
    // Read original file & extract style + body
    const origPath = path.join(ROOT, dirName, l.file);
    const orig = fs.readFileSync(origPath, 'utf8');
    const styleMatch = orig.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    const bodyMatch = orig.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    htmlSnippet = bodyMatch ? bodyMatch[1].trim() : '';
    cssSnippet = styleMatch ? styleMatch[1].trim() : '';
    usageHtml = `
      <ol>
        <li>该 loader 通常用作整页加载遮罩。复制下方 CSS 与 HTML 结构到你的页面。</li>
        <li>外层 <code>#loading</code> 默认使用 <code>position: fixed</code> 占满全屏，可根据需要改为 <code>absolute</code>，并放入相对定位的容器中以适配局部加载。</li>
        <li>如需修改背景色，可调整 <code>#loading</code> 的 <code>background-color</code>。</li>
        <li>页面加载完成后通过 JS 移除 <code>#loading</code> 元素或将其 <code>display</code> 设为 <code>none</code> 即可隐藏。</li>
      </ol>`;
  }

  const previewWrapStyle = isIframe ? '' : `style="background:${l.bg}"`;

  return `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(l.name)} · Loading 效果集</title>
${extraHead}
<style>${COMMON_CSS}
  .site-header {
    background: var(--card);
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 10;
    backdrop-filter: blur(10px);
  }
  .header-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
  .brand { display: flex; align-items: center; gap: 10px; font-weight: 600; color: var(--text); }
  .brand-dot { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #ec4899); display: inline-block; }
  .back-btn {
    padding: 6px 14px; border-radius: 999px; background: #f3f4f6; color: var(--text);
    font-size: 14px; transition: background .2s;
  }
  .back-btn:hover { background: #e5e7eb; color: var(--text); }

  .detail-hero { padding: 32px 0 24px; }
  .breadcrumb { color: var(--text-muted); font-size: 13px; margin-bottom: 8px; }
  .breadcrumb .tag {
    display: inline-block; padding: 2px 10px; border-radius: 999px;
    background: #eef2ff; color: #4f46e5; font-weight: 500;
    margin-right: 6px;
  }
  .detail-title { font-size: 32px; margin: 0 0 8px; font-weight: 700; }
  .detail-desc { color: var(--text-muted); margin: 0; font-size: 15.5px; }

  .preview-wrap {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow);
    margin-bottom: 32px;
  }
  .preview-wrap .preview-bar {
    display: flex; align-items: center; gap: 6px;
    padding: 12px 18px; border-bottom: 1px solid var(--border);
    background: #fafbfc;
  }
  .preview-wrap .dot {
    width: 10px; height: 10px; border-radius: 50%; background: #d1d5db;
  }
  .preview-wrap .dot.r { background: #f87171; }
  .preview-wrap .dot.y { background: #fbbf24; }
  .preview-wrap .dot.g { background: #34d399; }
  .preview-bar-title { margin-left: 12px; color: var(--text-muted); font-size: 13px; }

  .preview-stage {
    min-height: 380px;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    position: relative;
  }
  .iframe-preview {
    width: 100%; height: 480px; border: 0; display: block;
  }

  section.docs { display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 56px; }
  .doc-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 22px 24px;
    box-shadow: var(--shadow);
  }
  .doc-card h2 { margin: 0 0 14px; font-size: 18px; }
  .doc-card p, .doc-card li { color: #374151; }
  .doc-card ol { margin: 0; padding-left: 22px; }
  .doc-card ol li { margin-bottom: 8px; }

  .site-footer { padding: 32px 0 48px; color: var(--text-muted); font-size: 13px; text-align: center; }

  @media (max-width: 600px) {
    .detail-title { font-size: 24px; }
    .preview-stage { min-height: 280px; }
    .iframe-preview { height: 360px; }
  }
</style>
</head>
<body>
${HEADER_HTML('detail')}

<main>
  <div class="container detail-hero">
    <div class="breadcrumb">
      <span class="tag">${l.categoryName}</span>
    </div>
    <h1 class="detail-title">${esc(l.name)}</h1>
    <p class="detail-desc">${esc(l.desc || '')}</p>
  </div>

  <div class="container">
    <div class="preview-wrap">
      <div class="preview-bar">
        <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
        <span class="preview-bar-title">实时预览</span>
      </div>
      ${isIframe ? previewHtml : `<div class="preview-stage" ${previewWrapStyle}>${previewHtml}</div>`}
    </div>

    <section class="docs">
      <div class="doc-card">
        <h2>HTML 结构</h2>
        <pre><code class="lang-html">${esc(htmlSnippet)}</code></pre>
      </div>

      <div class="doc-card">
        <h2>CSS 样式</h2>
        ${l.category === 'awesome' || l.category === 'better'
          ? `<p>${cssSnippet}</p>`
          : `<pre><code class="lang-css">${esc(cssSnippet)}</code></pre>`}
      </div>

      <div class="doc-card">
        <h2>使用说明</h2>
        ${usageHtml}
      </div>
    </section>
  </div>
</main>

${FOOTER_HTML}
</body>
</html>`;
}

// =============== Build index page ===============
function indexPage() {
  // Build all preview snippets per category
  const cardsHtml = all.map((l) => {
    let previewSlot = '';
    if (l.category === 'awesome') {
      previewSlot = `<div class="preview-stage" style="background:${l.bg}">
        <div class="${l.cls}">${repeatDiv(l.divs)}</div>
      </div>`;
    } else if (l.category === 'better') {
      previewSlot = `<div class="preview-stage better-bg"><div data-loader="${l.dataLoader}"></div></div>`;
    } else {
      const dirName = l.category === 'multiple' ? 'loader-multiple' : 'loader-single';
      previewSlot = `<iframe class="card-iframe" src="${dirName}/${l.file}" loading="lazy" title="${esc(l.name)} 预览" tabindex="-1"></iframe>`;
    }
    return `
    <a class="loader-card" href="details/${l.id}.html" data-cat="${l.category}">
      <div class="card-preview">${previewSlot}</div>
      <div class="card-meta">
        <div class="card-title">${esc(l.name)}</div>
        <div class="card-bottom">
          <span class="card-tag tag-${l.category}">${l.categoryName}</span>
          <span class="card-link">查看详情 →</span>
        </div>
      </div>
    </a>`;
  }).join('\n');

  // Provide CSS for all loader-awesome (link to combined assets/loaders.css) + loader-better
  return `<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading 效果集 · ${all.length} 款 CSS 加载动画</title>
<link rel="stylesheet" href="loader-awesome/assets/loaders.css">
<link rel="stylesheet" href="loader-better/css/loaders.min.css">
<style>${COMMON_CSS}
  .site-header {
    background: var(--card);
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 10;
    backdrop-filter: blur(10px);
  }
  .header-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; }
  .brand { display: flex; align-items: center; gap: 10px; font-weight: 600; color: var(--text); }
  .brand-dot { width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #ec4899); }

  .hero {
    padding: 64px 0 40px;
    background: linear-gradient(180deg, #ffffff 0%, var(--bg) 100%);
    text-align: center;
    border-bottom: 1px solid var(--border);
  }
  .hero h1 {
    font-size: 40px; margin: 0 0 14px; font-weight: 700;
    background: linear-gradient(135deg, #1a1d24 0%, #6366f1 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .hero p { color: var(--text-muted); margin: 0; font-size: 16px; }
  .hero .stats { margin-top: 18px; display: inline-flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
  .hero .stat {
    background: var(--card); border: 1px solid var(--border);
    border-radius: 999px; padding: 6px 14px; font-size: 13px; color: var(--text-muted);
  }
  .hero .stat strong { color: var(--text); margin-right: 4px; }

  .filters {
    display: flex; flex-wrap: wrap; gap: 8px;
    padding: 28px 0 8px;
  }
  .filter-btn {
    padding: 6px 14px; border-radius: 999px; border: 1px solid var(--border);
    background: var(--card); color: var(--text); font-size: 13.5px; cursor: pointer;
    transition: all .15s ease;
  }
  .filter-btn:hover { border-color: var(--accent); color: var(--accent); }
  .filter-btn.active { background: var(--text); color: #fff; border-color: var(--text); }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 18px;
    padding: 24px 0 56px;
  }

  .loader-card {
    display: flex; flex-direction: column;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 14px;
    overflow: hidden;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
    color: inherit;
  }
  .loader-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(0,0,0,.08);
    border-color: #c7d2fe;
  }

  .card-preview {
    height: 180px; position: relative; overflow: hidden;
    background: #f3f4f6;
  }
  .card-preview .preview-stage {
    width: 100%; height: 100%;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
  }
  .card-preview .preview-stage.better-bg { background: #475569; }
  .card-preview .card-iframe {
    width: 100%; height: 100%; border: 0; display: block;
    pointer-events: none;
  }

  .card-meta { padding: 14px 16px 16px; }
  .card-title {
    font-size: 15px; font-weight: 600; margin-bottom: 8px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .card-bottom { display: flex; justify-content: space-between; align-items: center; }
  .card-tag {
    font-size: 11.5px; padding: 2px 8px; border-radius: 999px;
    background: #f3f4f6; color: #4b5563;
  }
  .tag-awesome   { background:#fff7ed; color:#c2410c; }
  .tag-better   { background:#eef2ff; color:#4338ca; }
  .tag-multiple { background:#ecfdf5; color:#047857; }
  .tag-single   { background:#fdf2f8; color:#be185d; }
  .card-link { font-size: 12.5px; color: var(--accent); }

  .site-footer { padding: 32px 0 48px; color: var(--text-muted); font-size: 13px; text-align: center; }

  @media (max-width: 600px) {
    .hero { padding: 48px 0 32px; }
    .hero h1 { font-size: 30px; }
    .grid { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; }
    .card-preview { height: 160px; }
  }
</style>
</head>
<body>
${HEADER_HTML(null)}

<section class="hero">
  <div class="container">
    <h1>Loading 效果集</h1>
    <p>整理来自四个开源仓库的 ${all.length} 款 CSS 加载动画，点击卡片查看代码与使用方式。</p>
    <div class="stats">
      <span class="stat"><strong>${awesomeLoaders.length}</strong> Load Awesome</span>
      <span class="stat"><strong>${betterLoaders.length}</strong> Load Better</span>
      <span class="stat"><strong>${multipleLoaders.length}</strong> Load Multiple</span>
      <span class="stat"><strong>${singleLoaders.length}</strong> Load Single</span>
    </div>
  </div>
</section>

<main>
  <div class="container">
    <div class="filters" id="filters">
      <button class="filter-btn active" data-cat="all">全部</button>
      <button class="filter-btn" data-cat="awesome">Load Awesome</button>
      <button class="filter-btn" data-cat="better">Load Better</button>
      <button class="filter-btn" data-cat="multiple">Load Multiple</button>
      <button class="filter-btn" data-cat="single">Load Single</button>
    </div>
    <div class="grid" id="grid">${cardsHtml}
    </div>
  </div>
</main>

${FOOTER_HTML}

<script>
  const grid = document.getElementById('grid');
  document.getElementById('filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    const cat = btn.dataset.cat;
    grid.querySelectorAll('.loader-card').forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
    });
  });
</script>
</body>
</html>`;
}

// Generate everything
all.forEach(l => write(path.join(ROOT, 'details', `${l.id}.html`), detailPage(l)));
write(path.join(ROOT, 'index.html'), indexPage());
console.log(`Generated index.html and ${all.length} detail pages.`);
