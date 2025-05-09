# CSS 元素浮动 {#css-float}

[float 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)可以指定一个元素应沿其容器的**左侧**或**右侧**放置，允许文本和内联元素环绕它。

`float` 属性最初只用于在一段文本内浮动图像, 实现文字环绕的效果。

但是早期的 CSS 标准中并没有提供好的左右布局方案, 因此在一段时间里面它成为网页多列布局的最常用工具。

::: tip
绝对定位、浮动都会让元素脱离标准流，以达到灵活布局的效果
:::

`float` 属性的取值有以下几种：

- `none`：默认值，元素不浮动
- `left`：元素向左浮动
- `right`：元素向右浮动

## 高度塌陷 {#height-collapse}

浮动元素会脱离文档流，导致父元素的高度塌陷，所以不再向父元素汇报高度。

父元素计算总高度时，就不会计算浮动子元素的高度，导致了高度坍塌的问题。

解决父元素高度坍塌问题的过程，一般叫做清浮动（清理浮动、清除浮动）。

::: tip 清除浮动目的
让父元素计算总高度的时候，把浮动子元素的高度算进去
:::

## 清除浮动的方法 {#clear-float}

### 添加块级子元素 {#add-block-child-element}

`clear` 属性可以指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面。

它的值有以下几种：

- `none`：默认值，允许元素旁边有浮动元素
- `left`：要求元素的顶部低于之前生成的所有左浮动元素的底部
- `right`：要求元素的顶部低于之前生成的所有右浮动元素的底部
- `both`：要求元素的顶部低于之前生成的所有浮动元素的底部

```html {5-7,12}
<style>
  .item {
    float: left; /* 脱离文档流 */
  }
  .clearfix {
    clear: both; /* 清除浮动 */
  }
</style>

<div class="item">1</div>
<div class="item">2</div>
<div class="clearfix"></div>
<div class="item3">3</div>
```

### 父元素添加`::after` 伪元素{#add-pseudo-element}

```html:line-numbers {5-15,18}
<style>
  .item {
    float: left;
  }
  .clearfix {
    zoom: 1; /* 兼容IE6/7 */
  }
  .clearfix::after {
    content: "";
    display: block;
    clear: both; /* 清除浮动 */

    visibility: hidden; /* 浏览器兼容 */
    height: 0; /* 浏览器兼容 */
  }
</style>

<div class="clearfix">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
<div class="item3">3</div>
```

## 常见规则 {#common-rules}

### 1. 脱离文档流 {#common-rules-one}

浮动元素会脱离文档流，不占据文档流中的位置。

浮动元素会尽可能向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

```html
<style>
  .item1 {
    float: left; /* 脱离文档流 */
    background-color: bisque;
  }
  .item2 {
    float: right; /* 脱离文档流 */
    background-color: brown;
  }
</style>

<div class="item1">1</div>
<div class="item2">2</div>
```

::: tip
定位元素会层叠在浮动元素上面。
:::

### 2. 浮动元素边界 {#common-rules-two}

如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界。

如下方示例中，`.item1`、`.item2` 元素向左/右浮动，它的左/右边界不能超出 `.box` 元素的左/右边界。

```html
<style>
  .box {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  .item1 {
    float: left; /* 脱离文档流 */
    background-color: bisque;
  }
  .item2 {
    float: right; /* 脱离文档流 */
    background-color: brown;
  }
</style>

<div class="box">
  <div class="item1">1</div>
  <div class="item2">2</div>
</div>
```

### 3. 浮动元素不能层叠 {#common-rules-three}

如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）。

如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止。

```html
<style>
  .item {
    width: 100px;
    height: 100px;
    background-color: red;
    float: left; /* 向左浮动 */
  }
</style>

<div class="item">1</div>
<div class="item">2</div>
<div class="item">3</div>
```

### 4. 浮动元素不能与内容层叠 {#common-rules-four}

浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出来。

比如行内级元素、inline-block 元素、块级元素的文字内容。

```html
<style>
  .box {
    width: 500px;
    background-color: orange;
  }
  .box img {
    width: 300px;
    float: left;
  }
</style>

<div class="box">
  <img src="./images/kobe01.jpg" alt="" />
  <p>
    1978年8月23日，科比·布莱恩特出生于美国宾夕法尼亚州费城。3岁时，科比开始打球，在他成长中最喜欢的球队是湖人队。6岁时，科比随父亲前往意大利生活。1991年，科比一家搬回了美国。
  </p>
  <p>
    科比·布莱恩特（Kobe
    Bryant，1978年8月23日—2020年1月26日），全名科比·比恩·布莱恩特·考克斯（Kobe
    Bean Bryant
    Cox），出生于美国宾夕法尼亚州费城，美国已故篮球运动员，司职得分后卫/小前锋。
  </p>
</div>
```

### 5. 浮动元素顶部对齐 {#common-rules-five}

行内级元素、inline-block 元素浮动后，其顶部将与所在行的顶部对齐。

## 应用场景 {#application-scenarios}

### 1. 分页器 {#pagination}

:::tabs

=== 效果预览
![](images/float/pagination.png)

=== 代码

```html{9}
<style>
  /* 重置默认样式 */
  body { background: #f5f5f6;}
  ul { list-style: none; }
  a { text-decoration: none; }

  .pagination .page-item {
    float: left;
    margin-right: 10px;
    text-align: center;
    color: #3951b3;
    background-color: #fff;
    border-radius: 6px;
  }
  .pagination .page-item a,
  .pagination .page-item span {
    padding: 4px 8px;
    min-width: 30px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    border-radius: 6px;
  }
  .pagination .page-item a {
    color: #3951b3;
  }
  .pagination .page-item a:hover,
  .pagination .page-item.active span {
    color: #fff;
    background-color: #4e6ef2;
  }
</style>
<ul class="pagination">
  <li class="page-item active"><span>1</span></li>
  <li class="page-item"><a href="#">2</a></li>
  <li class="page-item"><a href="#">3</a></li>
  <li class="page-item"><a href="#">4</a></li>
  <li class="page-item"><a href="#">5</a></li>
  <li class="page-item"><a href="#">6</a></li>
  <li class="page-item"><a href="#">7</a></li>
  <li class="page-item"><a href="#">8</a></li>
  <li class="page-item"><a href="#">9</a></li>
  <li class="page-item"><a href="#">10</a></li>
  <li class="page-item"><a href="#">下一页&gt;</a></li>
</ul>
```

:::

### 2. 多列布局 1 {#multi-column-layout}

在电商网站中常用到多列布局展示商品列表。

:::tabs
=== 效果预览
![](images/float/multi-column-layout.png)

=== 代码

```html:line-numbers {9}
<style>
  .container {
    width: 1190px;
    margin: 0 auto;
    height: 350px;
    background: #eaeaea;
  }
  .container .items {
    margin: 0 -5px; /* 向左右各偏移 -5px 的外边距 */
  }
  .container .item {
    width: 230px;
    height: 322px;
    margin: 0 5px;
    float: left;
    background-color: #4e6ef2;
  }
</style>
<div class="container">
  <div class="items">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</div>
```

:::

### 3. 多列布局 2 {#multi-column-layout-two}

:::tabs
=== 效果预览
![](images/float/multi-column-layout2.png)
=== 代码

```html:line-numbers {14}
<style>
    .container {
      width: 1190px;
      height: 560px;
      margin: 0 auto;
      background-color: #eaeaea;
    }
    .wrapper {
      margin-right: -10px;
    }
    .item {
      width: 290px;
      background-color: #4e6ef2;
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .item.left {
      height: 370px;
    }
    .item.right {
      height: 180px;
    }
  </style>
  <div class="container">
    <div class="wrapper">
      <div class="item left"></div>
      <div class="item left"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>

      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
      <div class="item right"></div>
    </div>
  </div>
```

:::

### 4. 浮动边框 {#floating-border}

水平排列的元素需要一个边框，但是边框不能与元素重叠。

:::tabs
=== 效果预览
![](images/float/floating-border.png)
=== 代码

```html:line-numbers {14,16-18}
<style>
  .container {
    width: 1100px;
    margin: 0 auto;
  }

  .item {
    float: left;
    width: 221px;
    height: 168px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #e2e8f0;
    margin-right: -1px;
  }
  .item.first-item {
    width: 220px;
  }
</style>
<div class="container">
  <div class="item first-item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

:::
