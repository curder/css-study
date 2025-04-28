# CSS 元素定位 {#css-position}

## 标准流 (Normal Flow) {#normal-flow}

默认情况下，元素都是按照标准流进行布局的。

标准流中的元素按照文档的顺序**从上到下**、**从左到右**依次排列。

且在默认情况下，**互相之间不存在层叠现象**。

在标准流中，使用 `margin` 和 `padding` 进行元素的定位。

但是会存在一些明显的问题：

1. 设置一个元素时会影响到其他元素的位置。
2. 不便于实现元素层叠的效果

如果需要某些元素跳出标准六，可以使用 `position` 属性对某个元素进行定位。

## position 属性 {#position}

`position` 属性用于指定一个元素在文档中的定位方式。

`position` 属性有以下值：

- `static`：默认值。元素遵循正常的文档流。
- `relative`：元素相对于其正常位置进行定位。
- `fixed`：元素相对于浏览器窗口进行定位。
- `absolute`：元素相对于其最近的已定位父元素进行定位。
- `sticky`：元素在跨越特定阈值前为相对定位，之后为固定定位。

### 静态定位 `static` {#position-static}

`static` 是 `position` 属性的默认值，`static` 元素遵循正常的文档流。

`left`、`top`、`right`、`bottom` 属性对 `static` 元素无效。

### 相对定位 `relative` {#position-relative}

`relative` 元素相对于其正常位置进行定位。

`left`、`top`、`right`、`bottom` 属性用于指定元素相对于其正常位置的偏移量。

```html {3-5}
<style>
  strong {
    position: relative;
    left: 30px;
    top: 30px;
  }
</style>
<div>
  <span>span 标签内容</span>
  <strong>strong 标签内容</strong>
  <a href="#">a 标签内容</a>
  <p>p 标签内容</p>
</div>
```

:::tip 应用场景
在不影响其他元素位置的前提下，对当前元素位置进行微调。
:::

:::details 图片居中案例：将 1920px &times; 489px 的图片居中。
::: tabs

=== 使用背景图居中

```html {8,9}
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .box {
    height: 489px;
    background: url(./images/mhxy.jpg) no-repeat;
    background-position: center; /* 居中 */
  }
</style>

<div class="box"></div>
```

=== 绝对定位居中

```html {11-15}
<style>
  body {
    margin: 0;
    padding: 0;
  }
  .box {
    height: 489px;
    overflow: hidden;
  }
  .box img {
    position: relative;
    transform: translate(-50%); /* 百分比相对于自身 */
    margin-left: 50%; /* 向右移动div宽度的一半距离 */
  }
</style>
<div class="box">
  <img src="./images/mhxy.jpg" alt="" />
</div>
```

:::

### 固定定位 `fixed` {#position-fixed}

`fixed` 元素相对于浏览器窗口进行定位，当画布滚动时，固定不动。

`left`、`top`、`right`、`bottom` 属性用于指定元素相对于浏览器窗口的偏移量。

```html {3-5}
<style>
  .fixed {
    position: fixed; /* 固定定位 */
    right: 30px; /* 距离右侧 30px */
    bottom: 30px; /* 距离底部 30px */
  }
</style>

<div>
  <span>span 标签内容</span>
  <strong class="fixed">strong 标签内容</strong>
  <a href="#">a 标签内容</a>
  <p>p 标签内容</p>
</div>
```

### 绝对定位 `absolute` {#position-absolute}

`absolute` 元素相对于其**最近的定位祖先元素(`position`值为`relative`、`fixed`或`absolute`)进行定位**，如果没有找到符合条件的祖先元素，相对的是窗口。

`left`、`top`、`right`、`bottom` 属性用于指定元素相对于其最近的已定位父元素的偏移量。

在大多数情况下，字元素的绝对定位都是相对于父元素进行定位。

当期望子元素相对于父元素进行定位，又不希望父元素脱标，常用解决方案是：

- 父元素设置`position: relative`（让父元素成为定位元素，而且父元素不脱离标准流）
- 子元素设置`position: absolute`

```html {3,9,17}
<style>
  .container {
    position: relative; /* 让父元素成为定位元素 */
    width: 600px;
    height: 500px;
    border: 1px solid red;
  }
  .box {
    position: absolute; /* 子元素绝对定位 */
    bottom: 0;
    right: 0;
    width: 500px;
    height: 300px;
    border: 1px solid blue;
  }
  strong {
    position: absolute; /* 子元素绝对定位 */
    left: 0;
    bottom: 0;
  }
</style>

<div class="container">
  <div class="box">
    <span>span 标签</span>
    <strong>strong 标签</strong>
    <p>p 标签</p>
  </div>
</div>
```

### 粘性定位 `sticky` {#position-sticky}

`sticky` 元素在跨越特定阈值前为相对定位，之后为固定定位。

它可以看作是相对定位和固定(绝对)定位的结合体，它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点时，就会变成固定(绝对)定位。

`left`、`top`、`right`、`bottom` 属性用于指定元素相对于其最近的已定位父元素的偏移量。

```html {5,6}
<style>
  .nav {
    background-color: #f00;
    color: #fff;
    position: sticky; /* 粘性定位 */
    top: 0; /* 距离顶部的距离 */
  }
</style>
<h1>标题</h1>
<div class="nav">
  <span>手机</span>
  <span>电脑</span>
  <span>衣服</span>
  <span>鞋子</span>
</div>

<ul>
  <li>列表数据01</li>
  <li>......</li>
</ul>
```

::: tip
`position: sticky;` 是相对于最近的滚动祖先包含滚动视口的。
:::

## position 定位总结 {#position-summary}

| 定位方式            | 脱离标准流         | 定位元素           | 绝对定位元素       | 定位参照对象                                                        |
| ------------------- | ------------------ | ------------------ | ------------------ | ------------------------------------------------------------------- |
| 静态定位 `static`   | :x:                | :x:                | :x:                | :x:                                                                 |
| 相对定义 `relative` | :x:                | :white_check_mark: | :x:                | 元素自己原来的位置                                                  |
| 绝对定位 `absolute` | :white_check_mark: | :white_check_mark: | :white_check_mark: | <small>最邻近的定位祖先元素<br />（不存在则相对浏览器窗口）</small> |
| 固定定位 `fixed`    | :white_check_mark: | :white_check_mark: | :white_check_mark: | 浏览器窗口                                                          |

### 绝对定位元素 {#absolutely-positioned-element}

将绝对定位元素（元素的 `position` 属性设置为 `absolute` 或 `fixed` 元素）的特点：

- 可以随意设置宽高，如果不设置宽高，默认大小是内容的大小
- 不再受标准流的约束
  - 不再严格按照从上到下、从左到右排布
  - 不再严格区分块级(block)、行内级(inline)，行内块级(inline-block)的很多特性都会消失
- 不再给父元素汇报宽高数据

  ```html
  <style>
    .container {
      background-color: red;
    }
    .container strong {
      position: absolute; /* 开启绝对定位后，父元素 .container 的高度没有了 */
    }
  </style>

  <div class="container">
    <strong>strong 元素</strong>
  </div>
  ```

- 脱标元素内部默认还是按照标准流布

- 定位参照对象的宽度 = `left` + `right` + `margin-left` + `margin-right` + 绝对定位元素的实际占用宽度

- 定位参照对象的高度 = `top` + `bottom` + `margin-top` + `margin-bottom` + 绝对定位元素的实际占用高度

- 如果需要设置绝对定位元素的宽高和定位参照对象一样，可以给绝对定位元素设置以下属性：`left: 0; right: 0; top: 0; bottom: 0; margin:0`

- 如果需要设置绝对定位元素在定位参照对象中居中显示，可以给绝对定位元素设置以下属性: `left: 0; right: 0; top: 0; bottom: 0; margin: auto`

::: tabs

=== 水平居中

```html {6,13-16}
<style>
  .container {
    width: 800px;
    height: 400px;
    background-color: #eee;
    position: relative;
  }
  /* 水平居中定位方案 */
  .container .box {
    width: 200px;
    height: 200px;
    background-color: #f00;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>
```

=== 垂直居中

```html:line-numbers {6,13-16}
<style>
  .container {
    width: 800px;
    height: 400px;
    background-color: #eee;
    position: relative;
  }
  /* 垂直居中定位方案 */
  .container .box {
    width: 200px;
    height: 200px;
    background-color: #f00;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>
```

=== 水平、垂直居中

```html:line-numbers {6,13-18}
<style>
  .container {
    width: 800px;
    height: 400px;
    background-color: #eee;
    position: relative;
  }
  /* 水平、垂直居中定位方案 */
  .container .box {
    width: 200px;
    height: 200px;
    background-color: #f00;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>
<div class="container">
  <div class="box"></div>
</div>
```

:::
