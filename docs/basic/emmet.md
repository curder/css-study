# Emmet 常用语法 {#emmet-common-syntax}

[`Emmet`](https://docs.emmet.io/) 是一个可以通过简单的表达式快速书写 HTML/CSS 的插件。

Emmet (前身为 Zen Coding) 是一个能大幅度提高前端开发效率的一个工具。

VsCode 内置了 Emmet 语法，在后缀为`.html`、`.css` 中输入缩写后按 Tab/Enter 键即会自动生成相应代码。

## 第一个 emmet 语法 {#first-emmet-syntax}

在 `.html` 文件中使用 `!` 或 `html:5` 快速生成一个标准的 HTML 5 模板。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## `>` 子代和 `+` 兄弟 {#child-and-sibling}

`>` 子代选择器，`+` 兄弟选择器。

```html
<!-- div>ul>li -->
<div>
  <ul>
    <li></li>
  </ul>
</div>

<!-- div+p+ul>li -->
<div></div>
<p></p>
<ul>
  <li></li>
</ul>

<!-- div>h2+div -->
<div>
  <h2></h2>
  <span></span>
</div>
```

## `*` 多个和 `^` 上一级 {#multiple-and-up}

`*` 多个，`^` 上一级。

```html
<!-- div>ul>li*5 -->
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

<!-- div>ul>li*5^div>p -->
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
<div>
  <p></p>
</div>
```

## 分组 `()` {#grouped}

使用 `()` 可以对元素进行分组。

```html
<!-- (div>ul>li*2)+p -->
<div>
  <ul>
    <li></li>
    <li></li>
  <ul>
</div>
<p></p>
```

## `id`、`class`属性和内容 `{}` {#id-class-and-content}

使用 `#` 可以为元素添加 `id` 属性。

```html
<!-- div#container -->
<div id="container"></div>
```

使用 `.` 可以为元素添加 `class` 属性。

```html
<!-- div.container -->
<div class="container"></div>
```

使用 `#` 和 `.` 可以同时添加 `id` 和 `class` 属性。

```html
<!-- div#container.container -->
<div id="container" class="container"></div>
```

使用 `[]` 可以为元素添加自定义属性。

```html
<!-- a[title="谷歌一下"] -->
<a href="" title="谷歌一下"></a>
```

使用 `{}` 可以为元素添加内容。

```html
<!-- a{谷歌一下} -->
<a href="">谷歌一下</a>

<!-- a[href="https://google.com"]{谷歌一下} -->
<a href="https://google.com">谷歌一下</a>
```

## 索引 `$` {#index}

使用 `$` 可以为元素添加索引。

```html
<!-- ul>li.item$*5 -->
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>

<!-- ul>li.class$$*5{item$$} -->
<ul>
  <li class="class01">item01</li>
  <li class="class02">item02</li>
  <li class="class03">item03</li>
  <li class="class04">item04</li>
  <li class="class05">item05</li>
</ul>
```

## 隐示标签 {#implicit-tag}

在一些情况下，不需要为元素添加标签，Emmet 会自动为元素添加标签。

```html
<!-- .container -->
<div class="container"></div>

<!-- ul>.item$*2{item$} -->
<ul>
  <li class="item1">item1</li>
  <li class="item2">item2</li>
</ul>
```

## CSS Emmet {#css-emmet}

```css
/* w100 */
width: 100px;

/* h100 */
height: 100px;

/* w100+h100 */
width: 100px;
height: 100px;

/* w100+h100+m10+p20 */
width: 100px;
height: 100px;
margin: 10px;
padding: 20px;

/* m10-20-30-40 */
margin: 10px 20px 30px 40px;

/* dib */
display: inline-block;

/* bd */
border: 1px solid #000;
```
