# 元素的水平和垂直居中

## 水平居中 {#horizontal-center}

1. 对于行内级元素，通过设置父级的 `text-align` 属性为 `center` 实现水平居中。

   ```html
   <style>
     .container {
       text-align: center;
     }
   </style>

   <div class="container">Hello world</div>
   ```

2. 对于块级元素，通过设置 `margin` 属性为 `0 auto` 实现水平居中。

   ```html
   <style>
     .container {
       width: 200px;
       margin: 0 auto;
     }
   </style>

   <div class="container">Hello world</div>
   ```

3. 对于绝对定位的元素，通过设置 `left` 和 `right` 属性为 `0`，再设置 `margin` 属性为 `0 auto` 实现水平居中。

   ```html
   <style>
     .container {
       width: 200px;

       position: relative;
       left: 0;
       right: 0;
       margin: 0 auto;
     }
   </style>

   <div class="container">Hello world</div>
   ```

4. 使用 flex 布局，通过设置 `flex-direction` 属性为 `row`，再设置 `justify-content` 属性为 `center` 实现水平居中。

   ```html
   <style>
     .container {
       display: flex;
       justify-content: center;
     }
   </style>

   <div class="container">
     <div class="box">Hello world</div>
   </div>
   ```

## 垂直居中 {#vertical-center}

### 绝对定位 {#use-absolute-position}

对于绝对定位元素，当它存在高度时，可以通过设置 `{top: 0; bottom: 0; margin: auto 0;}` 实现垂直居中。

::: tip 使用这种方案时需要注意

1. 必须使用定位布局（脱离文档标准流）；
2. 元素高度必须设置，不允许为 `auto`。

:::

```html {5,12-15}
<style>
  .container {
    height: 300px;
    background-color: #eaeaea;
    position: relative;
  }
  .box {
    width: 100px;
    height: 100px;
    background-color: #ccc;

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

### flex 布局 {#use-flex}

使用 flex 布局的 `{align-items: center;}` 可以实现子元素的垂直居中。

::: tip 使用这种方案时需要注意
使用 `flex` 布局时所有的子元素都将被垂直居中。
:::

```html {7-8}
<style>
  .container {
    height: 300px;
    background-color: #eaeaea;
    position: relative;

    display: flex;
    align-items: center;
  }
  .box {
    background-color: #ccc;
  }
</style>

<div class="container">
  <div class="box">Hello world</div>
</div>
```

### `transform` 属性 {#use-transform-property}

使用 `transform` 属性实现元素的垂直居中，需要注意：

1. 设置元素相对定位
2. 设置元素的 `transform` 属性为 `translate(0, -50%)`，表示元素向上移动自身的 `50%`
3. 元素向下移动 `top: 50%`，表示元素向下移动父元素的 `50%`

```html {9-11}
<style>
  .container {
    height: 300px;
    background-color: #eaeaea;
  }
  .box {
    background-color: #ccc;

    position: relative; /* 设置元素相对定位 */
    transform: translate(0, -50%); /* 元素向上移动自身的 50% */
    top: 50%; /* 元素向下移动父元素的 50% */
  }
</style>

<div class="container">
  <div class="box">Hello world</div>
</div>
```
