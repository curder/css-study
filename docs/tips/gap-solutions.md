---
aside: false
---

# 空隙的解决方案

当存在如下结构：

```html
<div class="box">
  <span>Span1</span>
  <span>Span2</span>
  <span>Span3</span>
</div>
```

默认情况下，行内级 `span` 元素之间会存在空隙。

可以通过下面的方式解决：

1. 将 `span` 元素编写在一行中，如下所示：

   ```html
   <div class="box"><span>Span1</span><span>Span2</span><span>Span3</span></div>
   ```

2. 将父元素 `.box` 的 `font-size` 设置为 `0`，`span` 元素的 `font-size` 再设置回来。

   ```html
   <style>
     .box {
       font-size: 0;
     }
     .box span {
       font-size: 16px;
     }
   </style>

   <div class="box">
     <span>Span1</span>
     <span>Span2</span>
     <span>Span3</span>
   </div>
   ```

3. 使用浮动布局，给字元素 `span` 设置浮动。

   ```html{2-4}
   <style>
     .box span {
       float: left;
     }
   </style>

   <div class="box">
     <span>Span1</span>
     <span>Span2</span>
     <span>Span3</span>
   </div>
   ```

4. 使用 `flex` 布局，给父元素 `.box` 设置 `display: flex`。
   ```html{2-4}
   <style>
    .box {
       display: flex;
     }
   </style>
   <div class="box">
     <span>Span1</span>
     <span>Span2</span>
     <span>Span3</span>
   </div>
   ```
