import { DefaultTheme, defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSS 学习",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "CSS基础", link: "/basic/property" }],

    sidebar: sidebarBasic(),

    socialLinks: [
      { icon: "github", link: "https://github.com/curder/css-study" },
    ],

    search: {
      provider: "local",
      options: searchOptions(),
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
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
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});

function sidebarBasic(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "",
      base: "/basic/",
      items: [
        { text: "CSS 属性", link: "property" },
        { text: "CSS 选择器", link: "selector" },
        { text: "CSS 属性特性", link: "property-feature" },
        { text: "CSS 盒模型", link: "box-model" },
        { text: "CSS 设置背景", link: "background" },
        { text: "CSS 精灵图", link: "sprite" },
        {
          text: "常用元素",
          link: "list",
          collapsed: true,
          base: "/basic/elements/",
          items: [
            { text: "列表 List", link: "list" },
            { text: "表格 Table", link: "table" },
            { text: "表单 Form", link: "form" },
          ],
        },
        { text: "Emmet 常用语法", link: "emmet" },
      ],
    },
  ];
}

function searchOptions(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        displayDetails: "显示更多",
        resetButtonTitle: "清除查询条件",
        backButtonTitle: "关闭搜索面板",
        noResultsText: "无法找到相关结果",
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
        },
      },
    },
  };
}
