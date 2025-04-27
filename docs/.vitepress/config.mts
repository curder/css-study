import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSS 学习",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "CSS基础", link: "/basic/property" }],

    sidebar: [
      {
        text: "",
        items: [
          { text: "CSS 属性", link: "/basic/property" },
          { text: "CSS 选择器", link: "/basic/selector" },
          { text: "CSS 属性特性", link: "/basic/property-feature" },
          { text: "CSS 盒模型", link: "/basic/box-model" },
          { text: "CSS 设置背景", link: "/basic/background" },
          {
            text: "常用元素",
            link: "/basic/elements/list",
            collapsed: true,
            items: [
              { text: "列表 List", link: "/basic/elements/list" },
              { text: "表格 Table", link: "/basic/elements/table" },
              { text: "表单 Form", link: "/basic/elements/form" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/curder/css-study" },
    ],

    search: {
      provider: "local",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "目录章节",
    skipToContentLabel: "跳过到内容",
    outline: {
      level: "deep",
      label: "目录章节",
    },
    editLink: {
      pattern: "https://github.com/curder/css-study/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
});
