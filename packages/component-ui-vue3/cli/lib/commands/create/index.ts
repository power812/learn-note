import inquirer from 'inquirer';
import { red } from 'kolorist';

const CREATE_TYPES = ['component', 'lib-entry'];
//文档分类
const DOCS_CATEGORIES = [
  '通用',
  '导航',
  '反馈',
  '数据录入',
  '数据展示',
  '布局',
];

export async function onCreate(cmd = { type: '' }) {
  let { type } = cmd;
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 用于获取后的属性名
        name: 'type', // 交互方式为列表单选
        type: 'list', // 提示信息
        message: '（必填）请选择创建类型：', // 选项列表
        choices: CREATE_TYPES, // 默认值，这里是索引下标
        default: 0,
      },
    ]);
    type = result.type;
  }
}
