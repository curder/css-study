# `vertical-align` 垂直对齐属性 {#vertical-align-property}

[vertical-align 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align) 用来指定行内（inline）、行内区块（inline-block）、表格单元格（table-cell）盒子的垂直对齐方式。

主要应用于以下场景：

1. 行内元素（inline）：如 `<span>`、`<a>`、`<img>` 等。

2. 行内块元素（inline-block）：如设置了 `display: inline-block` 的元素。

3. 表格单元格（table-cell）：如 `<td>` 或 `<th>`，或者设置了 `display: table-cell` 的元素。

它决定了这些元素相对于行盒（line box）或表格单元格的基线（baseline）、顶部（top）、底部（bottom）等的对齐方式。

## 常见取值 {#vertical-align-values}

`vertical-align` 支持多种取值，包括：

- 基线相关：`baseline（默认值，基于基线对齐）`、`sub（下标）`、`super（上标）`。

  - 文本的 `baseline` 是字母 `x` 的下方。
  - `inline-block` 默认的 `baseline` 是盒子 + `margin-bottom` 的底部
  - `inline-block`存在文本时，`baseline` 是最后一行文本的 x 的下方

- 相对于行盒：`top（顶部对齐）`、`bottom（底部对齐）`、`middle（居中对齐）`。
    
- 相对于文本：`text-top（文本顶部）`、`text-bottom（文本底部）`。

- 数值或百分比：如 `10px`、`-5px`、`50%` 等，用于精确控制偏移量。

## 适用场景 {#vertical-align-scenes}

- **行内/行内块元素**：`vertical-align` 主要影响元素在同一行内的垂直位置。例如，调整图片和文本的对齐方式。

  ```css
  img {
    vertical-align: middle; /* 图片与文本垂直居中对齐 */
  }
  ```

- **表格单元格**：在 `display: table-cell` 的元素中，`vertical-align` 控制内容在单元格内的垂直对齐。

  ```css
  td {
    vertical-align: top; /* 表格内容顶部对齐 */
  }
  ```
