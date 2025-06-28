# animation 动画属性 {#animation-property}

CSS [animation 属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)是 [animation-name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name)，[animation-duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration)，[animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)，[animation-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)，[animation-iteration-count](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count)，[animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)，[animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode) 和 [animation-play-state](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state) 属性的一个简写属性形式。

相比 [transition 过度动画属性](./transition.md)，animation 属性可以定义多个动画，每个动画由多个属性组成，每个属性之间用逗号分隔。

- transition 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态；
- transition 不能重复执行，除非一再触发动画；
- transition 需要在特定状态下会触发才能执行，比如某个属性被修改了；

animation 动画的使用分成 2 个步骤：

1. 使用 `@keyframes` 定义动画序列，即每一帧如何执行
2. 配置动画执行的名称、持续时间、动画曲线、延迟、执行次数、方向等

## `@keyframes` 定义动画序列 {#animation-keyframes}

`@keyframes` 定义动画序列，即每一帧如何执行，`@keyframes` 定义的动画序列可以在多个动画中使用，每个动画序列由多个帧组成，每个帧之间用逗号分隔。

```css
@keyframes animation-name {
  0% {
    /* 动画开始时的状态 */
  }
  50% {
    /* 动画中间的状态 */
  }
  100% {
    /* 动画结束时的状态 */
  }
}
```

## 配置动画执行 {#animation-config}

配置动画执行的名称、持续时间、动画曲线、延迟、执行次数、方向等

```css
 {
  animation-name: animation-name;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: 2;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: running;
}
```

## 多个动画 {#animation-multiple}

多个动画之间用逗号分隔。

```css
 {
  animation-name: animation-name1, animation-name2;
  animation-duration: 2s, 3s;
  animation-timing-function: ease-in-out, linear;
  animation-delay: 1s, 2s;
  animation-iteration-count: 2, 3;
  animation-direction: alternate, reverse;
  animation-fill-mode: forwards, backwards;
  animation-play-state: running, paused;
}
```

## 示例 {#animation-example}

```html
<style>
  .container {
    width: 200px;
    height: 200px;
    background-color: #eaeaea;

    animation-name: translate-animation; /* 动画名称 */
    animation-duration: 3s; /* 动画持续时间 */
    animation-timing-function: ease-in-out; /* 动画的速度曲线 */
    animation-iteration-count: 1; /* 动画播放的次数 */
    animation-direction: alternate; /* 动画的方向 normal, reverse, alternate, alternate-reverse */
    animation-fill-mode: forwards; /* 动画的填充模式 none, forwards, backwards, both */
    animation-play-state: running; /* 动画的播放状态 running, paused */

    /* 或者使用 animation 缩写属性 */
    /* animation: name duration timing-function delay iteration-count direction
          fill-mode play-state; */
    animation: translate-animation 3s ease-in-out 1 alternate forwards running;
  }

  @keyframes translate-animation {
    0% {
      transform: translate(0, 0);
    }
    33% {
      transform: translate(0, 200px);
    }
    66% {
      transform: translate(400px, 200px);
    }
    100% {
      transform: translate(400px, 0);
    }
  }
</style>

<div class="container"></div>
```
