# 过渡动画 `transition` {#css-transition}

[CSS transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition) 属性提供了一种在更改 CSS 属性时，控制动画速度的方法。

## 语法 {#css-transition-syntax}

```css
 {
  /* Apply to 1 property */
  /* property name | duration */
  transition: margin-right 4s;

  /* property name | duration | delay */
  transition: margin-right 4s 1s;

  /* property name | duration | timing function */
  transition: margin-right 4s ease-in-out;

  /* property name | duration | timing function | delay */
  transition: margin-right 4s ease-in-out 1s;

  /* Apply to 2 properties */
  transition: margin-right 4s, color 1s;

  /* Apply to all changed properties */
  transition: all 0.5s ease-out;

  /* Global values */
  transition: inherit;
  transition: initial;
  transition: unset;
}
```

transition CSS 属性是 `transition-property`，`transition-duration`，`transition-timing-function`，`transition-delay` 和 `transition-behavior` 的一个简写属性。

1. `transition-property` 指定应用过渡属性的名称

   - `all` 所有属性都执行动画。
   - `none` 所有属性都不执行动画。
   - 其他属性名，如 `width`、`color`、`left` 或 `transform` 等。

2. `transition-duration` 定义过渡效果需要花费的时间

3. `transition-timing-function` 定义过渡效果的时间曲线

   - `ease` 慢速开始，慢速结束
   - `linear` 匀速
   - `ease-in` 慢速开始
   - `ease-out` 慢速结束
   - `ease-in-out` 慢速开始和结束

4. `transition-delay` 定义过渡效果何时开始，单位可以是秒（s）或毫秒（ms）。

5. [`transition-behavior`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function) 定义过渡效果的速度曲线

   - `auto` 由浏览器定义
   - `linear` 匀速
   - `ease` 慢速开始，慢速结束
   - `ease-in` 慢速开始
   - `ease-out` 慢速结束
   - `ease-in-out` 慢速开始和结束
   - `step-start` 步骤开始，每一步结束
   - `step-end` 步骤结束，每一步开始

## 示例代码 {#css-transition-example}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Transition</title>
    <style>
      .container {
        width: 200px;
        height: 200px;
        background-color: red;
        transition: width 1s;
      }
      .container:hover {
        width: 500px;
      }
    </style>
  </head>
  <body>
    <div class="container"></div>
  </body>
</html>
```
