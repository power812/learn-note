import { ensureDirSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import { lightBlue, lightGreen } from 'kolorist';
import { WriteFileOptions } from 'fs';
import genCoreTemplate from '../template/core';
import genTypesTemplate from '../template/types';
import { genStyleTemplate } from '../template/style';
import genTestTemplate from '../template/test';
import genIndexTemplate from '../template';
export type ComponentMeta = {
  name: string;
  title: string;
  category: string;
};
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' };
export default function createComponent(meta: ComponentMeta) {
  const { name } = meta;
  // 拼接组件目录
  const componentDir = resolve('../src/components', meta.name);
  //其他核心文件：组件源文件、类型文件、样式文件
  const compSrcDir = resolve(componentDir, 'src');
  const styleDir = resolve(componentDir, 'style');
  const testDir = resolve(componentDir, 'test');
  // 确认目录存在
  ensureDirSync(compSrcDir);
  ensureDirSync(styleDir);
  ensureDirSync(testDir);
  // 生成组件文件
  const coreFilePath = resolve(compSrcDir, name + '.tsx');
  writeFileSync(coreFilePath, genCoreTemplate(name), WRITE_FILE_OPTIONS);
  // 核心文件：组件类型文件
  const typesFilePath = resolve(compSrcDir, name + '-type.ts');
  writeFileSync(typesFilePath, genTypesTemplate(name), WRITE_FILE_OPTIONS);

  // 核心文件：组件样式文件
  // 样式文件
  const styleFilePath = styleDir + `/${name}.scss`;
  writeFileSync(styleFilePath, genStyleTemplate(name), WRITE_FILE_OPTIONS);

  // 核心文件：测试文件
  const testFilePath = testDir + `/${name}.test.ts`;
  writeFileSync(testFilePath, genTestTemplate(name), WRITE_FILE_OPTIONS);

  // 组件索引文件
  const indexFilePath = componentDir + `/index.ts`;
  writeFileSync(indexFilePath, genIndexTemplate(name), WRITE_FILE_OPTIONS);

  console.log(lightGreen(` ✔️ 组件${meta.name}目录创建生成`));
  console.log(
    lightBlue(`
      ✔️ 组件目录：${componentDir}
    `),
  );
}
