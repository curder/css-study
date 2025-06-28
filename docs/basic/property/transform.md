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

[`translate()` 函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate)用于移动元素在平面上的位置。

它是 `translateX()` 函数和 `translateY()` 函数的缩写。

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

在实际开发场景中，可以[使用 `translate()` 函数实现元素的垂直居中](/tips/horizontal-and-vertical-center.md#use-vertical-center)。

### 缩放 `scale()` 函数 {#scale-function}

[`scale()` 函数](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale)可以改变元素的大小，包括宽度和高度。

它是 `scaleX()` 函数和 `scaleY()` 函数的缩写。

提供一个值时，设置 X 轴的缩放，提供两个值时，同时设置 X 和 Y 轴的缩放。

```css
.box {
  transform: scale(1); /* 元素不缩放 */
  transform: scale(2); /* 元素宽度放大一倍 */
  transform: scale(2, 0.5); /* 元素宽度放大一倍，高度缩小一倍 */
}
```

鼠标悬浮时，元素会放大一倍，示例代码如下：

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
    &:hover {
      transform: scale(2);
    }
  }
</style>

<div class="container">
  <div class="box"></div>
</div>
```
