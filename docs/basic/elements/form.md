# 表单元素 {#form-element}

表单元素是用来收集用户输入的元素，常见的表单元素有：

- `input`：单行输入框
- `label`：标签
- `button`：按钮
- `textarea`：多行输入框
- `select`：下拉框
  - `option`：下拉框选项
- `form`：表单，其他表单元素都是它的后台元素

## input 元素 {#input-element}

[input 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/input)是用来收集用户输入的元素，也是表单元素中使用最多的元素。

### type 属性 {#input-element-type}

input 元素的 type 属性决定了 input 元素的类型。

常见的 input 元素类型有：

- `text`：单行文本框
- `password`：密码框
- `number`：数字框
- `email`：邮箱框
- `url`：网址框
- `tel`：电话框
- `date`：日期框
- `time`：时间框
- `datetime-local`：日期时间框
- `month`：月份框
- `week`：周框
- `color`：颜色框
- `file`：文件框
- `hidden`：隐藏框
- `image`：图片框
- `submit`：提交按钮
- `reset`：重置按钮
- `button`：按钮

```html
<!-- 单行文本输入框 -->
<input type="text" />
<!-- 密码输入框 -->
<input type="password" />
<!-- 时间输入框 -->
<input type="time" />
<!-- 日期输入框 -->
<input type="date" />
<!-- 文件上传输入框 -->
<input type="file" />
```

#### radio 类型 {#input-element-type-radio}

`radio` 类型的 input 元素可以让用户选择一个值。

```html
<!-- 单选框 -->
<label for="male">
  <input type="radio" name="gender" value="male" id="male" />
  Male
</label>
<label for="female">
  <input type="radio" name="gender" value="female" id="female" />
  Female
</label>
```

:::tip
`name` 值相同的 `radio` 才具备单选功能
:::

#### checkbox 类型 {#input-element-type-checkbox}

`checkbox` 类型的 input 元素可以让用户选择多个值。

```html
<!-- 复选框 -->
<label for="basketball">
  <input type="checkbox" name="hobbies" value="basketball" id="basketball" />
  Male
</label>
<label for="football">
  <input type="checkbox" name="hobbies" value="football" id="football" />
  Female
</label>
```

:::tip
`name` 值相同的 `checkbox` 才具备多选功能
:::

### readonly 属性 {#input-element-readonly}

`readonly` 属性可以让 input 元素只读，只读的 input 元素不能被编辑。

```html
<!-- 只读的单行文本输入框 -->
<input type="text" readonly />
<input type="text" readonly="readonly" />
```

### disabled 属性 {#input-element-disabled}

`disabled` 属性可以让 input 元素禁用，禁用的 input 元素不能被编辑。

```html
<!-- 禁用的单行文本输入框 -->
<input type="text" disabled />
<input type="text" disabled="disabled" />
```

### `checked` 属性 {#input-element-checked}

`checked` 属性可以让 input 元素默认选中。

```html
<!-- 选中的单选框 -->
<input type="radio" checked />
<input type="radio" checked="checked" />
<!-- 选中的复选框 -->
<input type="checkbox" checked />
<input type="checkbox" checked="checked" />
```

### `autofocus` 属性 {#input-element-autofocus}

`autofocus` 属性可以让 input 元素自动获取焦点。

```html
<!-- 自动获取焦点的单行文本输入框 -->
<input type="text" autofocus />
<input type="text" autofocus="autofocus" />
```

::: danger 注意
布尔属性可以没有属性值，写上属性名就代表使用这个属性，如果要给布尔属性设值，值就是属性名本身。比如：

```html
<input type="text" disabled autofocus readonly />
<!-- 等价于 -->
<input
  type="text"
  disabled="disabled"
  autofocus="autofocus"
  readonly="readonly"
/>
```

<hr />  
常见的布尔属性包括 `disabled`、`checked`、`readonly`、`multiple`、`autofocus`、`selected`。
:::

### `name` 属性 {#input-element-name}

name 属性可以让 input 元素的 name 相同的 input 元素提交表单时共享一个值。

```html
<!-- 单行文本输入框 -->
<input type="text" name="username" />
<!-- 单行文本输入框 -->
<input type="text" name="username" />
```

### `value` 属性 {#input-element-value}

`value` 属性决定了 input 元素提交表单时的值。

```html
<!-- 单行文本输入框 -->
<input type="text" value="username" />
<!-- 单行文本输入框 -->
<input type="text" value="username" />
```

### `placeholder` 属性 {#input-element-placeholder}

`placeholder` 属性可以在 input 元素中显示提示信息。

```html
<!-- 单行文本输入框 -->
<input type="text" placeholder="请输入用户名" />
```

### 按钮类型 {#input-element-button}

input 元素的 type 属性可以是按钮类型，按钮类型的 input 元素可以用来提交表单。

常见的按钮类型有：

- `submit`：提交按钮
- `reset`：重置按钮，重置它所属 form 的所有表单元素（包括`input`、`textarea`、`select`）
- `button`：普通按钮，提交它所属 form 的表单数据给服务器（包括 `input`、`textarea`、`select`）

```html
<!-- 提交按钮 -->
<input type="submit" value="提交按钮" />
<button type="submit">提交按钮</button>

<!-- 重置按钮 -->
<input type="reset" value="重置按钮" />
<button type="reset">重置按钮</button>

<!-- 普通按钮 -->
<input type="button" value="普通按钮" />
<button>普通按钮</button>
```

## `label` 元素 {#label-element}

[`label` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/label)一般跟 input 配合使用，用来表示 input 的标题。

label 可以跟某个 input 绑定，点击 label 就可以激活对应的 input 变成选中。

```html
<label for="username">
  User name:
  <input type="text" id="username" />
</label>
<label for="password">
  Password:
  <input type="password" id="password" />
</label>
```

## `textarea` 元素 {#textarea-element}

[`textarea` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/textarea)可以让用户输入多行文本。

```html
<textarea rows="10" cols="30">
  请输入多行文本
</textarea>
```

`textarea` 元素常用的属性有：

- `rows`：文本框的行数
- `cols`：文本框的列数

默认情况下 `textarea` 允许用户调整输入框大小，可以使用 CSS 属性中的 `resize` 来控制。

```css
textarea {
  resize: none; /* 禁止调整大小 */
  resize: horizontal; /* 只允许水平调整大小 */
  resize: vertical; /* 只允许垂直调整大小 */
  resize: both; /* 允许水平和垂直调整大小 */
}
```

- `none` 用户无法调整大小
- `horizontal` 用户只能水平调整大小
- `vertical` 用户只能垂直调整大小
- `both` 用户可以水平和垂直调整大小

## `select` 元素 {#select-element}

[`select` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/select)可以让用户选择一个值。

`option` 是 select 的子元素，一个 `option` 代表一个选项。

```html
<select>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

### select 常用属性 {#select-element-attribute}

- `multiple`：允许用户选择多个值
- `size`：选择框的行数，默认为 `1`

```html
<select multiple size="2">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
```

### `option` 常用属性 {#option-element-attribute}

`option` 常用属性是 `selected`，表示默认选中。

```html
<option value="1" selected></option>
```

## `form` 元素 {#form-element-attribute}

[`form` 元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/form) 通常作为表单元素的父元素，用来包裹表单元素，此区域包含交互控件，用于向 Web 服务器提交信息。

`form` 常见的属性有：

- `action`：指定表单提交的 URL
- `method`：指定表单提交的方法，有 `get` 和 `post` 两种
- `target`：指定表单提交的目标，有 `_self`、`_blank`、`_parent`、`_top` 四种

```html
<form action="/" method="get" target="_self">
  <input type="text" name="username" />
  <input type="password" name="password" />
  <input type="submit" value="提交" />
</form>
```
