#!/usr/bin/env ts-node
import path from 'node:path';
import { InlineConfig, build } from 'vite';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import fsExtra from 'fs-extra';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// create package.json
const createPackageJson = () => {
  const fileStr = `{
    "name": "power-ui",
    "version": "0.0.1",
    "main": "./dist/my-lib.umd.cjs",
    "module": "./dist/my-lib.js",
    "exports": {
      ".": {
        "import": "./dist/my-lib.js",
        "require": "./dist/my-lib.umd.cjs"
      }
    },
    "author": "power",
    "github": "",
    "description": "基于vue3封装UI组件库",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/57code/power-ui.git"
    },
    "keywords": [
      "vue3",
      "组件库",
      "tsx",
      "UI"
    ],
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/57code/power-ui/issues"
    }
  }`;
  fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8');
};
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
// 输出目录
const outputDir = path.resolve(__dirname, '../dist');

const baseConfig: InlineConfig = {
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
};

const rollupOptions = {
  external: ['vue', 'vue-router'], //外部的库，不打包
  output: { globals: { vue: 'Vue' } }, //全局变量
};

// 全量构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: entryFile, //入口
        name: 'power-ui',
        fileName: 'power-ui',
        formats: ['es', 'umd'],
      },
      outDir: outputDir, // 出口
    },
  });
};
const buildLib = async () => {
  await buildAll();
  // 创建package.json
  createPackageJson();
};
buildLib();
