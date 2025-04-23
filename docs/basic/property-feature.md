# CSS 属性特性

## 继承性

CSS 的某些属性具备继承性，在元素上设置了这些属性，那么它的子元素也会继承这些属性。

常见的继承属性包括：

- `font-size` 字体大小
- `font-family` 字体
- `font-weight` 字体粗细
- `line-height` 行高
- `color` 前景色
- `text-align` 文本对齐方式
- `cursor` 鼠标样式
- `font-style` 字体风格
- `font-variant` 字体变形
- `letter-spacing` 字符间距
- `font` 字体

```html
<style>
  div {
    font-size: 14px;
  }
</style>

<div>
  <p>我是 p 标签</p>
</div>
```

> [!TIP]
> 继承的属性是计算值，而不是设置值。

使用 `inherit` 可以让元素继承父元素的属性。

```html
<style>
  div {
    border: 1px solid #f00;
  }
  p {
    border: inherit;
  }
</style>
<div>
  <p>我是 p 标签</p>
</div>
```

## 层叠性

CSS 的属性具备层叠性，即多个选择器选中同一个元素，那么这些选择器的相同属性会互相覆盖，最终只有一个生效。

```html
<style>
  div {
    color: red;
  }
  .box {
    color: green;
  }
  .pink {
    color: pink;
  }
</style>
<div class="box pink">div tag</div>
```

判断优先级的方法：

- 判断一：选择器的权重, 权重大的生效, 根据权重可以判断出优先级
- 判断二：先后顺序, 权重相同时, 后面设置的生效

### 选择器权重

为了方便比较 CSS 属性的优先级，可以给 CSS 属性所处的环境定义一个权重：

- !important：`10000`
- 内联样式：`1000`
- ID 选择器：`100`
- 类选择器、属性选择器、伪类选择器：`10`
- 标签选择器、伪元素选择器：`1`
- 通配符选择器：`0`

```html
<style>
  div {
    color: red;
  }
  #box {
    color: green;
  }
  .pink {
    color: pink !important;
  }
</style>
<div id="box" class="pink" style="color: #ff0aaa">div tag</div>
```

## 元素类型

HTML 元素有很多，比如 `h` 元素、`p` 元素、`div` 元素、`span` 元素、`img` 元素、`a` 元素等等。

HTML 元素分为两类：

- **块级元素**(block-level elements)：独占父元素的一行
- **行内元素**(inline-level elements)：多个行内级元素可以在父元素的同一行中显示

### 修改元素类型

可以使用 `display` 属性修改元素的元素类型。

- `block`：将元素设置为块级元素
- `inline`：将元素设置为行内元素
- `inline-block`：将元素设置为行内块元素
- `flex`: 将元素设置为弹性盒子元素
- `none`：将元素设置为不显示

```html
<style>
  /* 将 div 元素类型修改为 inline 行内元素 */
  div {
    display: inline;
  }
</style>

<div>我是 div 元素</div>
<p>我是 p 元素</p>
```

### 元素类型特点

1. block/inline-block 块级/行内块元素一般情况下可以包含其它任何元素（包括块级元素、行内级元素、inline-block 元素）。

   > [!TIP]
   > 特殊情况，`<p>` 元素不能包含其他块级元素

2. inline 行内级元素（比如 `<a>`、`<span>`、`<strong>` 等）一般情况下，只能包含行内级元素。

#### 块级元素 `block`

1. **元素独占一行**
2. **可以设置宽高**，默认宽度为父元素的 100%，默认高度为元素内容的高度。

常见的块级元素包括：`<div>`、`<p>`、`<h1>`~`<h6>`、`<ul>`、`<ol>`、`<li>`、`<form>`、`<header>`、`<footer>`、`<section>`、`<article>`、`<aside>`、`<nav>`、`<main>` 等。

#### 行内级元素 `inline`

1. **元素不会独占一行**，跟其他行内级元素在同一行显示
2. **不可以随意设置宽高**，默认宽高由内容决定。

常见的行内级元素包括：`<span>`、`<a>`、`<input>`、`<select>`、`<textarea>`、`<button>` 等。

常见的行内级伪元素包括：`::before`、`::after` 等。

#### 行内块元素 `inline-block`

1. **元素不会独占一行**，跟其他行内级元素在同一行显示
2. **可以设置宽高**，默认宽高由内容决定。

#### 弹性盒子元素 `flex`

flex **元素可以设置宽高**，默认宽度为父元素的 100%，默认高度为元素内容的高度。

#### 隐藏元素 `none`

none **元素不会显示，不占位置，不可以设置宽高**。

### 元素隐藏方法

#### display

`display: none` 的特点：

1. 不占位置

2. 不可以设置宽高

```html
<style>
  /* 将 div 元素类型修改为 none 隐藏元素 */
  div {
    display: none;
  }
</style>
<div>我是 div 元素</div>
```

#### visibility

`visibility: hidden` 的特点：

1. 会占位置

2. 可以设置宽高

```html
<style>
  /* 将 div 元素类型修改为 hidden 隐藏元素 */
  div {
    visibility: hidden;
  }
</style>
<div>我是 div 元素</div>
```

> [!TIP]
>
> `visibility`的默认值为 `visible`, 元素是可见的。

#### rgba

`rgba(0, 0, 0, 0)` 的特点：

rgba 的 a 设置的是 alpha 值, 可以设置透明度, 不影响子元素

```html
<style>
  /* 将 div 元素类型修改为 rgba 隐藏元素 */
  div {
    background-color: rgba(0, 0, 0, 0);
  }
</style>
<div>我是 div 元素</div>
```

#### opacity

`opacity: 0` 的特点：

1. 设置整个元素的透明度, 会影响所有的子元素

2. 会占据位置

```html
<style>
  /* 将 div 元素类型修改为 opacity 隐藏元素 */
  div {
    opacity: 0;
  }
</style>
<div>我是 div 元素</div>
```

> [!TIP]
>
> `opacity`的默认值为 `1`, 元素是可见的。

### overflow 溢出处理

`overflow` 用于控制内容溢出时的行为。

- `visible`：默认值，内容不会被裁剪，会呈现在元素框之外
- `hidden`：内容会被裁剪，超出的部分会被隐藏
- `scroll`：内容会被裁剪，超出的部分会被隐藏，但是会添加滚动条
- `auto`：如果内容被裁剪，则会添加滚动条

```html
<style>
  div {
    width: 200px;
    height: 200px;
    border: 1px solid #f00;
    overflow: visible;
    /* overflow: auto;*/
    /* overflow: hidden; */
    /* overflow: scroll; */
  }
</style>
<div>
  样式表层叠——简单的说，就是 CSS
  规则的顺序很重要；当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。
  下面的示例中，我们有两个关于
  的规则。最后显示蓝色——这两个规则来自同一个源，且具有相同的元素选择器，有相同的优先级，所以顺序在最后的生效。
  你好世界。
</div>
```
