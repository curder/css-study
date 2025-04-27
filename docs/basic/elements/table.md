---
outline: false
---

# 表格元素 {#table-element}

在网页中，表格是一种非常常见的元素，它可以用来展示数据，也可以用来展示其他内容。

常见的表格元素有：

- `table`：表格元素
- `thead`：表格表头元素
- `tbody`：表格主体元素
- `tfoot`：表格脚注元素
- `tr`：表格行元素
- `th`：表格表头元素
- `td`：表格单元格元素
- `caption`：表格标题元素
- `colgroup`：表格列组元素
- `col`：表格列元素

## 表格 {#table}

表格是由行和列组成的，每一行都有一个表头，每一列都有一个表头。

表格的基本语法如下：

```html
<table>
  <caption>
    Front-end web developer
  </caption>
  <thead>
    <tr>
      <th>表头</th>
      <th>表头</th>
    </tr>
  </thead>
  <tbody>
    <td>单元格</td>
    <td>单元格</td>
  </tbody>
  <tfoot>
    <td>汇总行</td>
    <td>汇总行</td>
  </tfoot>
</table>
```

在表格中有一个非常重要的属性：`border-collapse`，它可以用来控制表格的边框是否合并。

`border-collapse` 的值有两个：

- `collapse`：边框合并
- `separate`：边框不合并

```html {3}
<style>
  table {
    border-collapse: collapse; /* 边框合并 */
    text-align: center; /* 文本居中 */
  }
  table th,
  table td {
    border: solid 1px #000; /* 边框 */
  }
</style>

<table>
  <!-- -->
</table>
```

## 表格的合并 {#table-merge}

表格的合并可以分为行合并 `rowspan` 和列合并 `colspan`。

### 行合并 {#table-merge-row}

使用 `rowspan` 属性可以将单元格合并到下一行，在最上面的单元格协商 `rowspan` 属性, 并且省略掉后面 tr 中的 td。

> `rowspan` 属性的值为一个整数，表示要合并的行数。

```html {3}
<table>
  <tr>
    <td rowspan="2">行合并</td>
    <td>单元格</td>
  </tr>
  <tr>
    <td>单元格</td>
  </tr>
</table>
```

### 列合并 {#table-merge-col}

使用 `colspan` 属性可以将单元格合并到下一列，在最左边的单元格写上 `colspan` 属性, 并且省略掉合并的 td。

> `colspan` 属性的值为一个整数，表示要合并的列数。

```html {4}
<table>
  <tr>
    <td>单元格</td>
    <td colspan="2">列合并</td>
  </tr>
  <tr>
    <td>单元格</td>
    <td>单元格</td>
    <td>单元格</td>
  </tr>
</table>
```

::: details 点击查看单元格合并演示

<!--@include: ./partials/table.md-->

:::
