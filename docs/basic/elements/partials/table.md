<table>
  <thead>
    <tr style="text-align: center">
      <td colspan="6">课程表</td>
    </tr>
    <tr>
      <td></td>
      <td>星期一</td>
      <td>星期二</td>
      <td>星期三</td>
      <td>星期四</td>
      <td>星期五</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">上午</td>
      <td>英语</td>
      <td>语文</td>
      <td>数学</td>
      <td>语文</td>
      <td>英语</td>
    </tr>
    <tr>
      <td>语文</td>
      <td>英语</td>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
    </tr>
    <tr>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
      <td>英语</td>
      <td>数学</td>
    </tr>
    <tr>
      <td>英语</td>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
      <td>数学</td>
    </tr>
    <tr>
      <td rowspan="4">下午</td>
      <td>语文</td>
      <td>体育</td>
      <td>美术</td>
      <td>自习</td>
      <td>语文</td>
    </tr>
    <tr>
      <td>音乐</td>
      <td>体育</td>
      <td>美术</td>
      <td>自习</td>
      <td>音乐</td>
    </tr>
    <tr>
      <td>美术</td>
      <td>音乐</td>
      <td>体育</td>
      <td>自习</td>
      <td>美术</td>
    </tr>
    <tr>
      <td>自习</td>
      <td>美术</td>
      <td>音乐</td>
      <td>体育</td>
      <td>自习</td>
    </tr>
    <tr>
      <td rowspan="2">晚自习</td>
      <td>语文</td>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
      <td>数学</td>
    </tr>
    <tr>
      <td>数学</td>
      <td>英语</td>
      <td>语文</td>
      <td>数学</td>
      <td>英语</td>
    </tr>
  </tbody>
</table>

```html{27,40,69,98} [index.html]
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Table element</title>
    <style>
      table {
        border-collapse: collapse;
        text-align: center;
      }
      table th,
      table td {
        border: solid 1px #ccc;
      }
      thead tr:nth-child(-n + 2),
      table td[rowspan] {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div>
      <table>
        <thead>
          <tr>
            <td colspan="6">课程表</td> <!-- 合并 6 列 -->
          </tr>
          <tr>
            <td></td>
            <td>星期一</td>
            <td>星期二</td>
            <td>星期三</td>
            <td>星期四</td>
            <td>星期五</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="4">上午</td> <!-- 合并 4 行 -->
            <td>英语</td>
            <td>语文</td>
            <td>数学</td>
            <td>语文</td>
            <td>英语</td>
          </tr>
          <tr>
            <td>语文</td>
            <td>英语</td>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
          </tr>
          <tr>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
            <td>英语</td>
            <td>数学</td>
          </tr>
          <tr>
            <td>英语</td>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
            <td>数学</td>
          </tr>
          <tr>
            <td rowspan="4">下午</td> <!-- 合并 4 行 -->
            <td>语文</td>
            <td>体育</td>
            <td>美术</td>
            <td>自习</td>
            <td>语文</td>
          </tr>
          <tr>
            <td>音乐</td>
            <td>体育</td>
            <td>美术</td>
            <td>自习</td>
            <td>音乐</td>
          </tr>
          <tr>
            <td>美术</td>
            <td>音乐</td>
            <td>体育</td>
            <td>自习</td>
            <td>美术</td>
          </tr>
          <tr>
            <td>自习</td>
            <td>美术</td>
            <td>音乐</td>
            <td>体育</td>
            <td>自习</td>
          </tr>
          <tr>
            <td rowspan="2">晚自习</td> <!-- 合并 2 行 --> 
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
            <td>数学</td>
          </tr>
          <tr>
            <td>数学</td>
            <td>英语</td>
            <td>语文</td>
            <td>数学</td>
            <td>英语</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
```
