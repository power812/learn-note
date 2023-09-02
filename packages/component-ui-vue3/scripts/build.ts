#!/usr/bin/env ts-node
// 此脚本实现按需打包
import path from 'node:path';
import { InlineConfig, build } from 'vite';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import fsExtra from 'fs-extra';
import fs from 'node:fs';

interface RollupOptions {
  external: string[];
  output: {
    globals: Record<string, string>;
    exports?: 'named' | 'default' | 'auto' | 'none';
  };
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
// 组件目录
const componentsDir = path.resolve(__dirname, '../src/components');
// 输出目录
const outputDir = path.resolve(__dirname, '../dist');

const baseConfig: InlineConfig = {
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
};

const rollupOptions: RollupOptions = {
  external: ['vue', 'vue-router'], //外部的库，不打包
  output: { globals: { vue: 'Vue' }, exports: 'named' }, //全局变量
};

// create package.json
const createPackageJson = (name?: string) => {
  const fileStr = `{
    "name": "@power88/${name ? name : 'power-ui'}",
    "version": "0.0.1",
    "main": "${name ? './index.umd.cjs' : './power-ui.umd.cjs'}",
    "module": "${name ? './index.js' : './power-ui.js'}" ,
    "exports": {
      ".": {
        "import": "${name ? './index.js' : './power-ui.js'}",
        "require": "${name ? './index.umd.cjs' : './power-ui.umd.cjs'}"
      }
    },
    "publishConfig": {
      "access": "public"
    },
    "author": "power",
    "github": "",
    "description": "基于vue3封装UI组件库",
    "repository": {
      "type": "git",
      "url": "https://github.com/power812/power-project-dev.git"
    },
    "keywords": [
      "vue3",
      "组件库",
      "tsx",
      "UI"
    ],
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/power812/power-project-dev/issues"
    }
  }`;
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, name, 'package.json'),
      fileStr,
      'utf-8',
    );
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8',
    );
  }
};
// 单组件按需构建
const buildSingle = async (name: string) => {
  const entry = path.resolve(componentsDir, name, 'index.ts');
  if (!fs.existsSync(entry)) {
    throw new Error(`${entry}: 需提供index.ts文件`);
  }
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry,
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir: path.resolve(outputDir, name), // 出口
    },
  });
  createPackageJson(name);
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
  createPackageJson();
};
const buildLib = async () => {
  await buildAll();
  fs.readdirSync(componentsDir)
    .filter((name) => {
      const componentDir = path.resolve(componentsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory(); // 是否是文件夹

      return isDir && fs.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async (name) => {
      await buildSingle(name);
    });
};
buildLib();
