import {
  demoblockPlugin,
  demoblockVitePlugin,
} from 'vitepress-theme-demoblock';

const sidebar = {
  '/': [
    { text: '快速开始', items: [{ text: '概述', link: '/' }] },
    {
      text: '通用',
      items: [
        { text: 'vue3 tsx用法', link: '/components/vue3Usage/' },
        { text: 'tsconfig配置', link: '/components/tsconfig/' },
        { text: '问题记录', link: '/components/question/' },
      ],
    },
    {
      text: '组件',
      items: [
        { text: 'button', link: '/components/button/' },
        { text: '导航', items: [] },
        { text: '反馈', items: [] },
        { text: '数据录入', items: [] },
        { text: '数据展示', items: [] },
        { text: '布局', items: [] },
      ],
    },
  ],
};

const config = {
  title: 'vue组件库笔记',
  description: 'Just playing around.',
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin);
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },
  themeConfig: {
    sidebar,
  },
};
export default config;
