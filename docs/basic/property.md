# CSS 属性 {#css-property}

## 文本 {#text}

常见的文本属性包括：**`text-decoration`**、`text-transform`、`text-indent`、**`text-align`**、`word-spacing`、`letter-spacing` 等。

### text-decoration {#text-decoration}

[`text-decoration`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration) 是用来设置文本的修饰的。

常见的取值有：

- `none` 无修饰，使用它可以去除 `a` 元素默认的下划线。
- `underline` 下划线
- `line-through` 中横线（删除线）
- `overline` 上划线
- `blink` 闪烁

### text-transform {#text-transform}

[`text-transform`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform) 用来设置文本的大小写。

常见的取值有：

- `none` 无大小写转换
- `capitalize` 首字母大写
- `uppercase` 全部大写
- `lowercase` 全部小写

### text-indent {#text-indent}

[`text-indent`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent) 用来设置文本的首行缩进。

常见的取值有：

`length` 长度值，比如 `32px` 或 `2em`

### text-align {#text-align}

[`text-align`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align) 用来设置**行内级元素**相对它的父元素的对齐方式。

常见的取值有：

- `left` 左对齐（默认值）
- `right` 右对齐
- `center` 居中对齐

  ```html
  <style>
    div.box {
      height: 300px;
      background-color: #eaeaea;
      text-align: center;
    }
    div.content {
      width: 100px;
      height: 100px;
      background-color: #feaeae;
      /** 设置为行内级元素，才允许在父级使用 `text-align` 设置对齐方式 */
      display: inline-block;
    }
  </style>

  <div class="box">
    <div class="content"></div>
  </div>
  ```

- `justify` 两端对齐

### word-spacing {#word-spacing}

[`word-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing) 用来设置单词之间的间距。

常见的取值有：

- `length` 长度值，比如 `2px` 或 `1em`

### letter-spacing {#letter-spacing}

[`letter-spacing`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing) 用来设置字母之间的间距。

常见的取值有：

- `length` 长度值，比如 `2px` 或 `1em`

## 字体 {#font}

常见的字体属性包括：`font-size`、`font-family`、`font-weight`、`line-height` 等。

### font-size {#font-size}

[`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 用来设置字体的大小，默认情况下，字体大小为 `16px`。

常见的取值有：

- 具体数值+单位，比如 `16px` 或 `1em` （`1em` 代表 `100%`，`2em` 代表 `200%`，`0.5em` 代表 `50%`）

  ```css
  div {
    font-size: 2em; /* 32px */
    font-size: 16px; /* 默认值 16px */
  }
  ```

- `percentage` 百分比，比如 `100%` 或 `50%`（基于父元素的 font-size 计算，比如 50% 表示等于父元素 font-size 的一半）

  ```css
  div {
    font-size: 80%; /* 12.8px */
  }
  ```

### font-family {#font-family}

[`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 用来设置字体的类型。

可以设置 1 个或多个字体，多个字体之间用逗号隔开。

在渲染时，会按照顺序依次尝试使用每个字体，如果都无法使用，则使用默认的字体。

常见的取值有：

- `font-name` 字体名称，比如 `宋体`、`微软雅黑` 等
- `serif` 衬线字体
- `sans-serif` 无衬线字体

### font-weight {#font-weight}

[`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) 用来设置字体的粗细。

常见的取值有：

- `normal` 正常（取值 400，默认值）
- `bold` | `bolder` 加粗（取值 700）
- `lighter` 更细（取值 100）
- `number` 数字，比如 `100` | `200` | `300` | `400` | `500` | `600` | `700` | `800` | `900`

### font-style {#font-style}

[`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style) 用来设置字体的风格。

常见的取值有：

- `normal` 正常（默认值）
- `italic` 斜体
- `oblique` 倾斜体

`italic` 和 `oblique` 的区别在于：

- `italic` 斜体是指字体本身的斜体，比如宋体的斜体，微软雅黑的斜体
- `oblique` 文本倾斜

### font-variant {#font-variant}

[`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant) 影响小写字母的显示形式。

常见的取值有：

- `normal` 常规显示（默认）
- `small-caps` 将小写字母替换为缩小过的大写字母

### line-height {#line-height}

[`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 用来设置文本的行高。

行高指的是两行文字基线之间的距离。

常见的取值有：

- `length` 长度值，比如 `16px` 或 `1em`
- `number` 数字，比如 `1.5`(相对于字体大小的倍数)

### font {#font-short}

[`font`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 是一个复合属性，用来设置字体的大小、类型、粗细、行高等。

- **`font-size`**
- **`font-family`**
- `font-style`
- `font-variant`
- `font-weight`
- `font-stretch`
- `line-height`

> [!NOTE]
> 其中 `font-size` 和 `font-family` 是必须设置的。
> 其它是可选的

```css
/* font-size font-family */
font: 1.2em "Fira Sans", sans-serif;

/* font-size/line-height font-family */
font: 1.2em/2 "Fira Sans", sans-serif;

/* font-style font-weight font-size font-family */
font: italic bold 1.2em "Fira Sans", sans-serif;

/* font-stretch font-variant font-size font-family */
font: ultra-condensed small-caps 1.2em "Fira Sans", sans-serif;
```
