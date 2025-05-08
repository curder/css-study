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

