import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; // 支持jsx语法

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
