# Loading 效果集

整理自四个开源仓库的 **41 款 CSS 加载动画**，提供在线预览与代码复制。

## 分类

| 分类 | 数量 | 来源目录 |
| --- | --- | --- |
| Load Awesome | 16 | `loader-awesome/` |
| Load Better | 11 | `loader-better/` |
| Load Multiple | 10 | `loader-multiple/` |
| Load Single | 4 | `loader-single/` |

## 目录结构

```
build.cjs                 # 构建脚本，生成 index.html 与 details/*.html
index.html                # 首页（由 build.cjs 生成，勿手改）
details/                  # 各 loader 详情页（由 build.cjs 生成，勿手改）
loader-awesome/           # Load Awesome 资源（css/ + assets/loaders.css）
loader-better/            # Load Better 资源（css/loaders.min.css）
loader-multiple/          # 整页加载 demo 原始页面
loader-single/            # 整页加载 demo 原始页面
```

## 构建

无需任何依赖，纯 Node 内置模块：

```bash
node build.cjs
```

修改 `build.cjs` 顶部的 loader 列表后重新执行即可重新生成首页与全部详情页。

## 资源来源

- loader-awesome：[load-awesome](https://github.com/danielcardoso/load-awesome)
- loader-better：[CSS-Loaders](https://github.com/raphaelameaume/css-loaders)
- loader-multiple / loader-single：网上收集的整页加载 demo
