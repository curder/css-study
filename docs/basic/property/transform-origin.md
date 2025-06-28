# `transform-origin` 属性 {#transform-origin}

[`transform-origin` 函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)用于设置元素变形的原点。

当使用 `transform` 设置元素设置[缩放`scale()`](./transform#scale-function)、[旋转`rotate()`](./transform#rotate-function)或[倾斜`skew()`](./transform#skew-function)时，`transform-origin` 属性定义了变形的中心点。

默认的转换原点是 `center`，即 `transform-origin: center center; `。

## 语法 {#transform-origin-syntax}

```css
 {
  /* <transform-origin> 值 */
  transform-origin: 2px 3px; /* 绝对单位 */
  transform-origin: 5% 10%; /* 相对单位，参考元素本身大小 */
  transform-origin: top; /* 关键字，包含left,center,right,top,bottom */
  transform-origin: top left; /* 两个关键字 */
  transform-origin: left 10px; /* 一个关键字 + 一个长度 */
  transform-origin: 10px bottom; /* 一个长度 + 一个关键字 */

  /* 全局值 */
  transform-origin: inherit;
  transform-origin: initial;
  transform-origin: revert;
  transform-origin: revert-layer;
  transform-origin: unset;
}
```

`transform-origin` 属性可以使用一个、两个或者三个值来指定，其中每个值都表示一个偏移量。

- 设置一个值时，表示 X 轴的偏移量，Y 轴的偏移量默认为 `50%`。
- 设置两个值时，第一个值表示 X 轴的偏移量，第二个值表示 Y 轴的偏移量。
