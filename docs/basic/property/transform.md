# CSS 属性 transform {#css-property-transform}

CSS [`transform` 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)允许对某个元素进行形变，包括旋转、缩放、平移、倾斜等。

::: danger 注意

1. 并非所有盒模型都支持 `transform` 的转换。
2. 对于行内级非替换元素，比如 `span`、`a` 和 `strong`元素等不支持 `transform` 的转换。

:::

## transform 语法 {#transform-syntax}

transform 属性可以指定为关键字值 `none`，或者是一个/多个 `<transform-function>` 值。

::: details 展开语法

```css
 {
  /* 关键字值 */
  transform: none;

  /* 函数值 */
  transform: matrix(1, 2, 3, 4, 5, 6);
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transform: perspective(17px);
  transform: rotate(0.5turn);
  transform: rotate3d(1, 2, 3, 10deg);
  transform: rotateX(10deg);
  transform: rotateY(10deg);
  transform: rotateZ(10deg);
  transform: translate(12px, 50%);
  transform: translate3d(12px, 50%, 3em);
  transform: translateX(2em);
  transform: translateY(3in);
  transform: translateZ(2px);
  transform: scale(2, 0.5);
  transform: scale3d(2.5, 1.2, 0.3);
  transform: scaleX(2);
  transform: scaleY(0.5);
  transform: scaleZ(0.3);
  transform: skew(30deg, 20deg);
  transform: skewX(30deg);
  transform: skewY(1.07rad);

  /* 多个函数值 */
  transform: translateX(10px) rotate(10deg) translateY(5px);
  transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

  /* 全局值 */
  transform: inherit;
  transform: initial;
  transform: revert;
  transform: revert-layer;
  transform: unset;
}
```

:::
transform 属性函数很多，常用的函数包括：

- `translate(x, y)` 位移
- `scale(x, y)` 缩放
- `rotate(angle)` 旋转
- `skew(x-angle, y-angle)` 倾斜

### 位移 `transalte()` 函数 {#transalte-function}

`translate()` 函数用于移动元素在平面上的位置。

```css
.box {
  transform: translate(100px); /* 设置x轴平移100像素 */
  transform: translate(100px, 200px); /* 设置x轴平移100像素，y轴平移200像素 */
}
```

`translate()` 函数的值可以使用：

1. 具体像素数值
2. 百分比数值

   - 设置 X 轴平移，参照的是元素自身的宽度
   - 设置 Y 轴平移，参照的是元素自身的高度
