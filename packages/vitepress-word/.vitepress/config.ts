import { defineConfig } from 'vitepress'
const sidebar = {

  '/': [
    { text: '介绍', link: '/'},
    {
      text: "通用",
      children: [
        { text: "Button 按钮", link: "/components/button/" },
      ],
    },
  ],

}
const config = {
  // lang: 'en-US',
  title: 'power',
  description: '使用 Vitepress 搭建组件库文档站点。',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    sidebar
  }
}
export default config