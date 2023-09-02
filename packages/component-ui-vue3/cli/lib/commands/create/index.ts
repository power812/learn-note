import inquirer from 'inquirer';
import { red } from 'kolorist';
import createComponent from '../../shared/create-component';
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
  if (CREATE_TYPES.every((item) => item !== type)) {
    console.log(
      red(
        `当前类型仅支持：${CREATE_TYPES.join(
          ', ',
        )}，收到不在支持范围内的"${type}`,
      ),
    );
    return onCreate();
  }
  switch (type) {
    case 'component':
      //如果是组件，我们还需要收集一些信息
      const info = await inquirer.prompt([
        {
          name: 'name',
          type: 'input',
          message: '(必填)请输入组件name,将用作目录及文件名:',
          validate: (value: string) => {
            if (!value.trim()) {
              return '组件name不能为空';
            }
            return true;
          },
        },
        {
          name: 'title',
          type: 'input',
          message: '（必填）请输入组件中文名称，将用作文档列表显示：',
          validate: (value: string) => {
            if (!value.trim()) {
              return '组件名称是必填项！';
            }
            return true;
          },
        },
        {
          name: 'category',
          type: 'list',
          message: '（必填）请选择组件分类，将用作文档列表分类：',
          choices: DOCS_CATEGORIES,
          default: 0,
        },
      ]);
      createComponent(info);
      break;
    case 'lib-entry':
      createLibEntry();
      break;
    default:
      break;
  }
}

function createLibEntry() {
  console.log('createlib-entryfile.');
}
