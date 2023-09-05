import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
  },
});