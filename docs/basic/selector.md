# CSS 选择器 Selector

开发中经常需要找到特定的网页元素进行设置样式，那么如何找到特定的元素呢？

CSS 选择器可以按照一定的规则选出符合条件的 HTML 元素，为之添加 CSS 样式。

常见的选择器有：

- 通配选择器 `universal selector`
- 类型选择器 `type selector`
- 类选择器 `class selector`
- ID 选择器 `ID selector`
- 属性选择器 `attribute selector`
- 组合器 `combinator`
  - 后代选择器 ` `
  - 子选择器 `>`
  - 接续兄弟选择器 `+`
  - 后续兄弟选择器 `~`
  - 交集选择器 `A[.#]B`
  - 并集选择器 `A,  B`
- 伪类选择器 `pseudo-class selector`
- 伪元素选择器 `pseudo-element selector`

## 通配选择器

[通用选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors) `*` 匹配所有元素，一般用来给所有元素做一些通用性的设置，比如内/外边距。

```css
* {
  margin: 0;
  padding: 0;
}
```

> [!TIP]
> 由于效率较低，一般不使用。

## 类型选择器

[类型选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors) 匹配所有指定类型的元素。

```css
/* 所有 <a> 元素。*/
a {
  color: red;
}
```

## 类选择器

[类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors) 根据 class 属性的内容匹配元素。

```css
/* 所有 class="highlight" 的元素 */
.highlight {
  color: red;
}
```

## ID 选择器

[ID 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors) 根据元素的 id 属性匹配元素。

一个文档中 ID 只能对应一个元素，且 ID 不能以数字开头。

```css
/* id 为 "demo" 的元素会被选中 */
#demo {
  border: red 2px solid;
}
```

## 属性选择器

[属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors) 匹配那些具有特定属性或属性值的元素。

```css
/* 存在 title 属性的 <a> 元素 */
a[title] {
  color: purple;
}

/* 存在 href 属性并且属性值匹配"https://example.org"的 <a> 元素 */
a[href="https://example.org"]
{
  color: green;
}

/* 存在 href 属性并且属性值包含"example"的 <a> 元素 */
a[href*="example"] {
  font-size: 2em;
}

/* 存在 lang 属性并且属性值以"zh"开头的元素 */
[lang^="zh"] {
  color: red;
}

/* 存在 href 属性并且属性值结尾是".org"的 <a> 元素 */
a[href$=".org"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的<a>元素 */
a[class~="logo"] {
  padding: 2px;
}

/* 包含 "insensitive" 的链接，不区分大小写 */
a[href*="insensitive" i] {
  color: cyan;
}

/* 包含 "cAsE" 的链接，区分大小写 */
a[href*="cAsE" s] {
  color: pink;
}
```

## 组合

### 后代选择器

[后代选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator) 通常用单个空格字符表示组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。

```html
<style>
  /* 所有 <p> 元素的后代 <span> 元素 */
  p span {
    color: red;
  }
</style>

<p>
  This is a paragraph.
  <span>This is a span inside a paragraph.</span>
</p>
```

### 子选择器

[子选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator) （`>`）被放在两个 CSS 选择器之间。

它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。

```html
<style>
  /* 选择属于“my-things”类的无序列表（ul）的直接子列表元素（li） */
  ul.my-things > li {
    margin: 2em;
  }
</style>
<ul class="my-things">
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```

### 接续兄弟选择器

[持续兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Next-sibling_combinator) （+）介于两个选择器之间，当第二个元素紧跟在第一个元素之后，并且两个元素都是属于同一个父元素的子元素，则第二个元素将被选中。

```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-weight: bold;
}
```

### 后续兄弟选择器

[后续兄弟选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Subsequent-sibling_combinator) （`~`）将两个选择器分开，并匹配第二个选择器的所有迭代元素，位置无须紧邻于第一个元素，只须有相同的父级元素。

```html
<style>
  /* 在任意图像后的兄弟段落 */
  img ~ p {
    color: red;
  }
</style>

<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a red span!</span>
<span>And this is a red span!</span>
<code>More code…</code>
```

### 交集选择器

交集选择器可以同时匹配多个选择器。

在开发中通常为了精准的选择某一个元素。

```css
/* 同时匹配 <a> 元素和 class="demo" 的元素 */
a.demo {
  color: red;
}

/* 同时匹配 <div> 元素和 id="demo" 的元素 */
div#demo {
  color: red;
}
```

### 并集选择器

并集选择器可以同时匹配多个选择器，只需要选择器中一个就行。

在开发中通常使用并集选择器给多个元素设置相同的样式。

```css
/* 同时匹配 <a> 元素和 class="demo" 的元素 */
a,
.demo {
  color: red;
}
```

## 伪类选择器

伪类选择器用于选择元素的特定状态。

常见的伪类选择器有：

- 动态伪类

  ```css
  /* 未被访问过的 <a> 元素 */
  a:link {
    color: purple;
  }
  /* 被访问过的 <a> 元素 */
  a:visited {
    color: green;
  }
  /* 被选中的 <a> 元素 */
  a:focus {
    color: yellow;
  }
  /* 鼠标悬停时的 <a> 元素 */
  a:hover {
    color: red;
  }
  /* 被点击时的 <a> 元素 */
  a:active {
    color: blue;
  }
  ```

  - `:link`
  - `:visited`
  - `:focus`
  - `:hover`
  - `:active`

- 目标伪类

  - `:target`

    ```html
    <style>
      /* 当 URL 包含一个名为 "news" 的锚点时，匹配 <p> 元素 */
      p:target {
        background-color: yellow;
      }
    </style>

    <p>Click here to read the <a href="#news">news story</a>.</p>
    <p id="news">This is a news story.</p>
    ```

- 语言伪类

  - `:lang()`

    ```html
    <style>
      /* 匹配所有 lang 属性值以 "en" 开头的元素 */
      :lang(en) {
        /*  */
      }
      /* 匹配所有 lang 属性值以 "fr" 开头的元素 */
      :lang(fr) {
        /* */
      }
    </style>
    ```

- 元素状态伪类

  - `:enabled`
  - `:disabled`
  - `:checked`

- 结构伪类

  - `:nth-child()`
  - `:nth-last-child()`
  - `:nth-of-type()`
  - `:nth-last-of-type()`
  - `:first-child`
  - `:last-child`
  - `:first-of-type`
  - `:last-of-type`
  - `:root`
  - `:only-child`
  - `:only-of-type`
  - `:empty`

- 否定伪类
  - `:not()`

### hover 伪类

[`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 伪类用于选择鼠标悬停在元素上的状态。

```css
/* 鼠标悬停时的 <a> 元素 */
a:hover {
  color: red;
}
```

> [!TIP]
> 除了 `a` 元素，其他元素也可以使用 `:hover` 和 `:active` 伪类。

## 伪元素选择器

伪元素选择器用于选择元素的特定部分。
常见的伪元素选择器有：

- `::before`

  ```css
  /* 在 <p> 元素之前插入内容 */
  p::before {
    content: "This is before the paragraph.";
  }
  ```

- `::after`

  ```css
  /* 在 <p> 元素之后插入内容 */
  p::after {
    content: "This is after the paragraph.";
  }
  ```

- `::first-line` 

  ```css
  /* 匹配 <p> 元素的第一行 */
  p::first-line {
    color: blue;
  }
  ```

- `::first-letter`

  ```css
  /* 匹配 <p> 元素的第一个字母 */
  p::first-letter {
    font-size: 30px;
  }
  ```
