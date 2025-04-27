# 表单元素 {#form-element}

表单元素是用来收集用户输入的元素，常见的表单元素有：

- `form`：表单，其他表单元素都是它的后台元素
- `input`：单行输入框
- `textarea`：多行输入框
- `select`：下拉框
  - `option`：下拉框选项
- `checkbox`：复选框
- `radio`：单选框
- `button`：按钮
- `label`：标签

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
 