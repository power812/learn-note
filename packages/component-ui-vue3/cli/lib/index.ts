import { Command } from 'commander';

import { onCreate } from './commands/create';
// create command
const program = new Command();

program
  .command('create')
  .description('创建一个组件模板或配置文件')
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option('-t, --type <type>', `创建类型,可选值:component, lib-entry`)
  .action(onCreate);
// exec parse argument
program.parse();
