# CSS 弹性布局 {#css-flex-layout}

弹性盒子 Flexbox 是一种用于**按行或按列布局元素**的**一维布局方法**，元素可以**膨胀以填充额外的空间, 收缩以适应更小的空间**。

通常使用弹性盒子 Flexbox 来进行布局的方案称之为弹性布局(flex layout)。

## 基本概念 {#basic-concepts}

设置 flex 布局的元素叫 `flex container`，`flex container` 里面的直接子元素叫做 `flex items`。

![](images/flex/container-and-items.png)

当 `flex container` 中的子元素变成了 `flex item` 时, 具备如下特点:

- `flex item` 的布局将受 `flex container` 属性的设置来进行控制和布局
- `flex item` 不再严格区分块级元素和行内级元素
- `flex item` 默认情况下是包裹内容的, 但是可以设置宽度和高度

使用 display 属性为 `flex` 或者 `inline-flex` 的元素被称为 `flex container`。

```css
.container {
  display: flex;
  /* 或者 */
  display: inline-flex;
}
```

- `display: flex`： `flex container` 以 block-level 形式存在
- `display: inline-flex`： `flex container` 以 inline-level 形式存在

## flex 布局模型 {#flex-layout-model}

- 主轴 `main axis`

  默认情况下 flex 布局默认按照主轴 `main axis` 来布局，默认的主轴是水平方向，从左到右。

- 交叉轴 `cross axis`

  交叉轴 `cross axis` 是垂直于主轴的轴。

![](images/flex/flex-layout-model.png)

## flex 布局属性 {#flex-layout-properties}

- 应用在 `flex container` 上的 CSS 属性

  - `flex-flow`
  - `flex-direction`
  - `flex-wrap`
  - `flex-flow`
  - `justify-content`
  - `align-items`
  - `align-conten`

- 应用在 `flex items` 上的 CSS 属性
  - `flex-grow`
  - `flex-basis`
  - `flex-shrink`
  - `order`
  - `align-self`
  - `flex`
