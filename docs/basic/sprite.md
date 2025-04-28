# CSS 精灵图 {#css-sprite}

CSS 精灵图是一种网页图片应用处理方式，它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去。

## 优点 {#css-sprite-advantage}

- 减少 HTTP 请求次数，提升页面加载速度
- 减少图片体积，提升页面加载速度
- 提升图片加载速度

## 缺点 {#css-sprite-disadvantage}

- 图片维护成本高
- 图片加载速度慢

## Sprite 图片制作 {#css-sprite-make}

1. 设计人员使用 Photoshop 等工具，将所有图片合并成一张大图。
2. 使用在线网站，将多张小图片合成一张大图。比如：[CSS Sprites Generator](https://www.toptal.com/developers/css/sprite-generator)

## Sprite 图片使用 {#css-sprite-use}

Sprite 精灵图通常使用背景图片的方式来实现。

- 设置对应元素的宽度和高度
- 设置精灵图作为背景图片
- 调整背景图片的位置来展示

```html{4,7-9,12-14,19-20}
<style>
  i.icon {
    display: inline-block;
    background-image: url(./images/sprite.png);
  }
  i.icon-hot {
    background-position: -192px 0;
    width: 26px;
    height: 13px;
  }
  i.icon-logo {
    background-position: 0 -19px;
    width: 157px;
    height: 33px;
  }
</style>

<div style="background-color: #333">
  <i class="icon icon-logo"></i>
  <i class="icon icon-hot"></i>
</div>
```

为了快速获取精灵图的定位，可以通过网站 http://www.spritecow.com/ 在线选择对应图标的位置。
