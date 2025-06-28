# `transform-origin` 属性 {#transform-origin}

[`transform-origin` 函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)用于设置元素变形的原点。

默认的转换原点是 `center`，即 `transform-origin: center center; `。

## 语法 {#transform-origin-syntax}

```css
/* <transform-origin> 值 */
transform-origin: 2px 3px; /* 绝对单位 */
transform-origin: 5% 10%; /* 相对单位 */
transform-origin: top; /* 关键字 */
transform-origin: top left; /* 两个关键字 */
transform-origin: left 10px; /* 一个关键字 + 一个长度 */
transform-origin: 10px bottom; /* 一个长度 + 一个关键字 */

/* 全局值 */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

`transform-origin` 属性可以使用一个、两个或者三个值来指定，其中每个值都表示一个偏移量。

