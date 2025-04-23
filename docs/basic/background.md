# CSS 设置背景

在 CSS 中，除了能设置背景颜色 `background-color`，还可以设置背景图片 `background-image` 。

## background-image

[`background-image`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image) 用于为一个元素设置一个或者多个背景图像。

如果设置背景图片的同时还设置了背景颜色，那么背景图片会盖（不是覆盖）在背景颜色上。

当设置了多张背景图片，那么第一张图片会显示在最上面，后面设置的图片会显示在下面。

```html
<style>
  .box {
    width: 600px;
    height: 600px;
    background-color: palegoldenrod;
    /* 设置背景图片 */
    background-image: url("./images/album01.jpg"), url("./images/album02.jpg");
  }
</style>
<body>
  <div class="box"></div>
</body>
```

> [!IMPORTANT] 注意
> 如果设置了背景图片后，元素没有具体的宽高，背景图片是不会显示出来的。

### `<img />` 元素对比

利用 `background-image` 属性和 `<img />` 元素都能实现图片的现实需求，它们有何差异呢？

|                        | `img`              | `background-image` |
| ---------------------- | ------------------ | ------------------ |
| 性质                   | HTML 元素          | CSS 样式           |
| 图片是否占用空间       | :white_check_mark: | :x:                |
| 浏览器邮件直接查看地址 | :white_check_mark: | :x:                |
| 支持 CSS Sprite        | :x:                | :white_check_mark: |
| 更可能被搜索引擎收录   | :white_check_mark: | :x:                |

## background-repeat

[background-repeat](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-repeat) 用于设置背景图片的平铺方式。

常见的配置值有：

- `repeat`：默认值，背景图片在水平和垂直方向上都平铺。
- `no-repeat`：背景图片不平铺。
- `repeat-x`：背景图片在水平方向上平铺。
- `repeat-y`：背景图片在垂直方向上平铺。

```html
<style>
  .box {
    width: 600px;
    height: 600px;
    background-color: palegoldenrod;
    background-image: url("./images/album01.jpg"), url("./images/album02.jpg");
    /* 设置图片不平铺 */
    background-repeat: no-repeat;
  }
</style>
<body>
  <div class="box"></div>
</body>
```

## background-size

[background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size) 用于设置背景图片的大小。

常见的配置值有：

- `auto`：默认值，背景图片的原始大小
- `contain`：缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比，可能导致无法铺满元素
- `cover`：缩放背景图，以完全覆盖铺满元素，可能导致背景图片部分看不见
- `<percentage>`：百分比，相对于背景区（background positioning area）

  ```css
  background-size: 50% 50%;
  /* 也可以搭配其他配置值 */
  background-size: 50% auto;
  ```

- `<length>`：具体的大小，不能为负值，比如 100px

  ```css
  background-size: 100px 100px;
  /* 也可以搭配其他配置值 */
  background-size: 50% auto;
  ```

## background-position

[background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position) 用于设置背景图片在水平、垂直方向上的具体位置。

常见的配置值有：

- 设置具体的值，比如 `50px 50px`
- 水平方向可以设置的配置值：`left`、`center`、`right`
- 垂直方向可以设置的配置值：`top`、`center`、`bottom`

如果仅设置了一个值，另一个值默认为 `center`。

```css
/* 背景图片往横坐标偏移 50px 纵坐标偏移 50px */
background-position: 50px 50px;

background-position: left top; /* 左上角显示 */
background-position: center center; /* 居中显示 */
background-position: right bottom; /* 右下角显示 */
```

## background-attachment

[background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment) 决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。

常见的配置值有：

- `scroll`：默认值，背景相对于元素本身固定， 而不是随着它的内容滚动。
- `fixed`：背景相对于浏览器视口固定，不会随着它的内容滚动。
- `local`：背景相对于元素的内容固定。
- `inherit`：从父元素继承 `background-attachment` 属性的值。

```css
/* 关键 属性值 */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* 全局 属性值 */
background-attachment: inherit;
background-attachment: initial;
background-attachment: unset;
```

## background

[background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background) 是一个复合属性，用于设置背景颜色、背景图片、背景平铺、背景位置等。

```css
/* 使用 <background-color> */
background: green;

/* 使用 <bg-image> 和 <repeat-style> */
background: url("test.jpg") repeat-y;

/* 使用 <box> 和 <background-color> */
background: border-box red;

/* 将背景设为一张居中放大的图片 */
background: no-repeat center/80% url("../img/image.png");
```

:::tip 注意
如果编写 `background-size` 属性时，`background-size` 必须紧跟在 `background-position` 之后。
:::
