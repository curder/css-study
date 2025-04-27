# CSS 盒模型 {#box-model}

在 CSS 中，所有的元素都可以看作是一个盒子，这个盒子由内容、内边距、边框和外边距组成。

CSS 盒模型具备下面的 4 个属性：

- 内容 `content`：元素的内容 `width`和`height`
- 内边距 `padding`：元素和内容之间的间距
- 边框 `border`：元素自己的边框
- 外边距 `margin`：元素和其他元素之间的间距

::: tip
内边距 `padding`、边框 `border` 和外边距 `margin` 都包括 `top`、`right`、`bottom` 和 `left` 四个边的属性。
:::

## 内容 content {#content}

### 宽度和高度 {#width-and-height}

内容的宽度和高度由 `width` 和 `height` 两个属性控制。

- `width`：元素的宽度，默认值为 `auto`

  ::: tip
  默认宽度 `auto`，对于块元素 block 是独占一行的，对于行内级元素 inline 是包裹内容的，对于行内块元素 inline-block 是包裹内容的，对于替换元素 `img`、`video` 等是包裹内容的。
  :::

- `height`：元素的高度

  ::: tip
  对于行内级非替换元素来说, 设置宽高是无效的。
  :::

### 最大宽度和高度 {#max-width-and-height}

除了可以设置 `width` 和 `height` 之外，还可以设置 `min-width`、`max-width`、`min-height` 和 `max-height` 来限制元素的最小/最大的宽度/高度。

- `min-width`：最小宽度，无论内容多少，宽度都大于或等于 `min-width`
- `max-width`：最大宽度，无论内容多少，宽度都小于或等于 `max-width`

- `min-height`：最小高度，无论内容多少，高度都大于或等于`min-height`
- `max-height`：最大高度，无论内容多少，高度都小于或等于`max-height`

## 内边距 padding {#padding}

[`padding`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding) 属性用于设置元素的内边距，即**边框和内容之间的间距**。

padding 包括 4 个方向的取值：

- `padding-top`：上内边距
- `padding-right`：右内边距
- `padding-bottom`：下内边距
- `padding-left`：左内边距

`padding` 是 `padding-top`、`padding-right`、`padding-bottom`、`padding-left`的简写属性，使用 padding 可以同时设置 4 个方向的内边距。

| 数量 | 示例                            | 代表的含义                                                             |
| ---- | ------------------------------- | ---------------------------------------------------------------------- |
| 4    | `padding: 10px 20px 30px 40px;` | top: 10px, right: 20px, bottom: 30px, left: 40px;                      |
| 3    | `padding: 10px 20px 30px;`      | 缺少 left, left 使用 right 的值 20px;                                  |
| 2    | `padding: 10px 20px;`           | 缺少 left, 使用 right 的值 20px;<br/> 缺少 bottom, 使用 top 的值 10px; |
| 1    | `padding: 10px;`                | top/right/bottom/left 都使用 10px;                                     |

`padding` 缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左的顺序。

## 边框 border {#border}

[`border`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border) 属性用于设置元素的边框。

`border` 相比于 `content`、`padding` 和 `margin` 来说，它有自己的特殊性：

- `border` 边框具备宽度 `width`
- `border` 边框具备样式 `style`
- `border` 边框具备颜色 `color`
- `border` 边框具备圆角 `radius`

在设置边框时，可以使用 `border-top`、`border-right`、`border-bottom` 和 `border-left` 来分别设置四个方向的边框。

- `border-top`：顶部边框

- `border-right`：右侧边框

- `border-bottom`：底部边框

- `border-left`：左侧边框

也可以使用 `border` 统一的设置所有的边框。

```css
/* 统一设置所有方向上的边框 */
border: 1px solid red;

/* 分别设置上、右、下、左方向的边框 */
border-top: 1px solid red;
border-right: 1px solid red;
border-bottom: 1px solid red;
border-left: 1px solid red;
```

::: danger 请注意
使用上面的方式编写的边框颜色、宽度和样式时顺序任意。
:::

### 边框宽度 border-width {#border-width}

[`border-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-width) 设置边框宽度。

可以使用下面的四个属性来分别设置四个方向的边框宽度。

- `border-top-width` 顶部边框宽度
- `border-right-width` 右侧边框宽度
- `border-bottom-width` 底部边框宽度
- `border-left-width` 左侧边框宽度

```css
/* 统一设置所有方向上的边框宽度 */
border-width: 1px;

/* 分别设置上、右、下、左方向的边框宽度 */
border-top-width: 1px;
border-right-width: 1px;
border-bottom-width: 1px;
border-left-width: 1px;
```

### 边框样式 border-style {#border-style}

[`border-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) 设置边框样式。

可以使用下面的四个属性来分别设置四个方向的边框样式。

- `border-top-style` 顶部边框样式
- `border-right-style` 右侧边框样式
- `border-bottom-style` 底部边框样式
- `border-left-style` 左侧边框样式

```css
/* 统一设置所有方向上的边框样式 */
border-style: solid;

/* 分别设置上、右、下、左方向的边框样式 */
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;
```

### 边框颜色 border-color {#border-color}

[`border-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-color) 设置边框颜色。

可以使用下面的四个属性来分别设置四个方向的边框颜色。

- `border-top-color` 顶部边框颜色
- `border-right-color` 右侧边框颜色
- `border-bottom-color` 底部边框颜色
- `border-left-color` 左侧边框颜色

```css
/* 统一设置所有方向上的边框颜色 */
border-color: red;

/* 分别设置上、右、下、左方向的边框颜色 */
border-top-color: red;
border-right-color: red;
border-bottom-color: red;
border-left-color: red;
```

### 边框圆角 border-radius {#border-radius}

[border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius) 设置边框圆角。

可以使用下面的四个属性来分别设置四个方向的边框圆角。

- `border-top-left-radius` 左上角边框圆角
- `border-top-right-radius` 右上角边框圆角
- `border-bottom-right-radius` 右下角边框圆角
- `border-bottom-left-radius` 左下角边框圆角

```css
/* 统一设置所有方向上的边框圆角 */
border-radius: 10px;

/* 分别设置上、右、下、左方向的边框圆角 */
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
```

`border-radius` 常用值：

- 数值：通常用来设置小的圆角, 比如 `6px`
- 百分比：通常用来设置大的圆角, 比如 `50%`

::: tip

如果一个元素是一个正方形，那么设置 `border-radius: 50%` 可以将其变成一个圆形。

```css
.square {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
```

:::

## 外边距 margin {#margin}

[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 属性用于设置元素的外边距，即**元素和其他元素之间的间距**。

`margin` 包括 4 个方向的取值：

- `margin-top`：上外边距
- `margin-right`：右外边距
- `margin-bottom`：下外边距
- `margin-left`：左外边距

`margin` 是 `margin-top`、`margin-right`、`margin-bottom`、`margin-left`的简写属性，使用 margin 可以同时设置 4 个方向的外边距。
| 数量 | 示例 | 代表的含义 |
| ---- | ------------------------------- | ---------------------------------------------------------------------- |
| 4 | `margin: 10px 20px 30px 40px;` | top: 10px, right: 20px, bottom: 30px, left: 40px; |
| 3 | `margin: 10px 20px 30px;` | 缺少 left, left 使用 right 的值 20px; |
| 2 | `margin: 10px 20px;` | 缺少 left, 使用 right 的值 20px;<br/> 缺少 bottom, 使用 top 的值 10px; |
| 1 | `margin: 10px;` | top/right/bottom/left 都使用 10px; |

`margin` 缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左的顺序。

::: tip
外边距 `margin` 可以为负值。
:::

### margin 传递 {#margin-pass}

外边距 `margin` 传递是指当两个元素的外边距相遇时，会发生外边距的传递。

- `margin-top` 传递：当块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的 `margin-top` 值会传递给父元素。

- `margin-bottom` 传递：当块级元素的底部线和父元素的底部线重叠且父元素的高是 auto 时，那么这个块级元素的 `margin-bottom` 值会传递给父元素。

如何防止外边距传递？

- 通过给父元素设置 `padding-top` 或 `padding-bottom` 来解决
- 给父元素设置 `border` 属性
- 给父元素设置 `overflow: auto` (BFC)

::: tip
**`margin` 和 `padding` 设置间距的建议**

- `margin` 一般是用来设置兄弟元素之间的间距
- `padding` 一般是用来设置父子元素之间的间距
  :::

### margin 折叠 {#margin-collapse}

垂直方向上相邻的 2 个外边距 margin（`margin-top` 和`margin-bottom`）有可能会合并为 1 个 外边距 margin，这种现象叫做折叠（collapse）。

而对于水平方向上的外边距 margin（`margin-left`、`margin-right`）永远不会折叠。

对于折叠后的外边距 margin 的计算规则，是取 2 个外边距 margin 中的较大值。

```html
<style>
  /* box1 和 box2 之间的间距最终取值为 50px */
  .box1 {
    height: 100px;
    background-color: bisque;
    margin-bottom: 40px;
  }
  .box2 {
    height: 100px;
    background-color: aqua;
    margin-top: 50px;
  }
</style>

<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
```

在真实开发中，通过设置一个元素的外边距 `margin` 来防止垂直方向的折叠是比较常见的做法。

### margin 水平居中 {#margin-auto}

在一些需求中，需要元素在父元素中水平居中显示（父元素一般都是块级元素、inline-block）

- 对于块级元素 block 来说，使用 `margin: 0 auto` 可以实现水平居中。

  ```html
  <style>
    body {
      margin: 0;
    }
    .box {
      width: 200px;
      height: 200px;
      background-color: red;
      margin: 0 auto;
    }
  </style>
  <body>
    <div class="box"></div>
  </body>
  ```

  ::: warning 注意
  `margin: 0 auto` 可以让块级元素 block 水平居中。

  **`margin: 0 auto` 属性应该设置在块级元素上。**
  :::

- 对于行内级元素 inline 和行内块级元素 inline-block 来说，使用 `text-align: center` 可以实现水平居中。

  ```html
  <style>
    body {
      margin: 0;
      text-align: center;
    }
    .box {
      width: 200px;
      height: 200px;
      background-color: red;
      display: inline-block;
    }
  </style>
  <body>
    <div class="box"></div>
  </body>
  ```

  ::: warning 注意
  `text-align` 可以让行内级元素 inline 和行内块级元素 inline-block 水平居中。

  **`text-align` 属性应该设置在父元素上。**
  :::

## 其它 {#other}

### 外轮廓 outline {#outline}

[`outline`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline) 是元素的外轮廓。

`outline` 相对于 `border` 来说，它有自己的特殊性：`outline` 不占据空间，显示在 border 的外面

`outline` 相关的属性有：

- `outline-width`：外轮廓宽度
- `outline-style`：外轮廓样式
- `outline-color`：外轮廓颜色
- `outline-offset`：外轮廓偏移量

`outline` 作为 `outline-width`、`outline-style`、`outline-color` 的简写属性，使用 `outline` 可以同时设置 3 个属性。

```css
/* 统一设置所有方向上的外轮廓 */
outline: 1px solid red;

/* 分别设置外轮廓宽度、样式和颜色 */
outline-width: 1px;
outline-style: solid;
outline-color: red;
```

::: danger 请注意
使用上面的方式编写的外轮廓颜色、宽度和样式时顺序任意。
:::

`outline` 经常用于去除元素的默认焦点样式。

```css
a,
input {
  /* 去除元素的默认焦点样式 */
  outline: none;
}
```

### 盒子阴影 `box-shadow` {#box-shadow}

[`box-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 属性可以设置一个或者多个阴影。

当需要设置多个阴影时，使用逗号分隔。

常见格式：`box-shadow: h-shadow v-shadow blur spread color inset;`

| 属性     | 描述                                   |
| -------- | -------------------------------------- |
| h-shadow | 必需。水平阴影的位置。允许负值         |
| v-shadow | 必需。垂直阴影的位置。允许负值         |
| blur     | 可选。模糊距离                         |
| spread   | 可选。阴影的大小                       |
| color    | 可选。阴影的颜色                       |
| inset    | 可选。将外部阴影（outset）改为内部阴影 |

```css
.box {
  box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.1);
}
```

::: tip
如果需要在线调试 `box-shadow` 的效果，可以访问 [box-shadow.dev](https://box-shadow.dev/) 或者 [box-shadow-generator](https://cssgenerator.pl/en/box-shadow-generator/)。
:::

### 文字阴影 `text-shadow` {#text-shadow}

[`text-shadow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow) 属性可以设置一个或者多个文字的阴影。

用法类似于 `box-shadow`。

格式：`text-shadow: h-shadow v-shadow blur color;`

| 属性     | 描述                           |
| -------- | ------------------------------ |
| h-shadow | 必需。水平阴影的位置。允许负值 |
| v-shadow | 必需。垂直阴影的位置。允许负值 |
| blur     | 可选。模糊距离                 |
| color    | 可选。阴影的颜色               |

```css
.box {
  text-shadow: 8px 4px 14px rgba(127, 127, 127);
}
```

::: tip
如果需要在线调试 `text-shadow` 的效果，可以访问 [text-shadow-generator](https://cssgenerator.pl/en/text-shadow-generator/)。
:::

### 行内非替换元素 {#inline-non-replacement}

常见的行内非替换元素有：`<span>`、`<a>`、`<strong>`、`<label>` 和 `<code>` 等。

对于行内非替换元素来说，除了设置宽、高无效外，还有如下的属性对其无效：`margin-top`、`margin-bottom`、`padding-top`、`padding-bottom`、`border-top` 和 `border-bottom`。

### box-sizing {#box-sizing}

[box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing) 用来设置盒子模型中宽高的行为。

- `content-box`：默认值，元素的宽高是内容的宽高，将 `padding`、`border` 布置在 `width`、`height` 外边
- `border-box`：元素的宽高是内容的宽高加上边框的宽高，将 `padding`、`border` 布置在 `width`、`height` 里边

#### context-box {#context-box}

尺寸计算公式：

- `width` = 内容的宽度
- `height` = 内容的高度

换句话说，元素实际占用的宽/高度为：

- 元素的实际占用宽度 = `border` + `padding` + `width`
- 元素的实际占用高度 = `border` + `padding` + `height`

#### border-box {#border-box}

尺寸计算公式：

- `width` = 内容的宽度 +`padding` + `border`
- `height` = 内容的高度 + `padding` + `border`

换句话说，元素实际占用的宽/高度为：

- 元素的实际占用宽度 = `width`
- 元素的实际占用高度 = `height`
