# CSS 元素定位

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
- `absolute`：元素相对于其最近的已定位父元素进行定位。
- `fixed`：元素相对于浏览器窗口进行定位。
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
