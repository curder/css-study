# 列表元素 {#list-elements}

在开发中经常需要使用列表来展示一些数据，比如商品列表、新闻列表等等。

在 HTML 中，通常使用 `<ul>` 和 `<ol>` 来创建无序列表和有序列表，也可以使用 `<div>` 元素来实现数据列表。

HTML 提供了 3 组常用的用来展示列表的元素：

- 有序列表：`ol`、`li`
- 无序列表：`ul`、`li`
- 定义列表：`dl`、`dt`、`dd`

## 有序列表 `ol` {#ordered-list}

有序列表（Ordered list），直接子元素只能是 `li`。

其中 `li` （List item）为列表中的每一项。

```html
<h1>Frontend Development Skills</h1>
<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript</li>
</ol>
```

默认情况下，有序列表的每一项前面会有一个数字和一些默认样式。可以通过 css 对其进行重置：

```css
ol,
li {
  margin: 0; /* 重置外边距 */
  padding: 0; /* 重置内边距 */
  list-style: none; /* 重置列表样式，默认值为：`decimal` */
}
```

## 无序列表 `ul` {#unordered-list}

无序列表（Unordered list），直接子元素只能是 `li`。

其中 `li` （List item）为列表中的每一项。

```html
<h1>Frontend Development Skills</h1>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript</li>
</ul>
```

默认情况下，无序列表的每一项前面会有一个圆点和一些默认样式。可以通过 css 对其进行重置：

```css
ul,
li {
  margin: 0; /* 重置外边距 */
  padding: 0; /* 重置内边距 */
  list-style: none; /* 重置列表样式，默认值为：`disc` */
}
```

## 定义列表 `dl` {#definition-list}

定义列表（Definition list），直接子元素只能是 `dt` 和 `dd`。

- `dt` （Definition term）为定义项的标题
- `dd` （Definition description）为定义项的描述。

```html
<h1>Frontend Development Skills</h1>
<dl>
  <dt>Step 1：</dt>
  <dd>HTML</dd>
  <dd>JavaScript</dd>

  <dt>Step 2：</dt>
  <dd>Vue</dd>
  <dd>React</dd>

  <dt>Step 3：</dt>
  <dd>TypeScript</dd>
  <dd>Vue + TypeScript</dd>
  <dd>React + TypeScript</dd>
</dl>
```

默认情况下，定义列表会添加一些默认样式。可以通过 css 对其进行重置：

```css
dl,
dt,
dd {
  margin: 0; /* 重置外边距 */
  padding: 0; /* 重置内边距 */
}
```
