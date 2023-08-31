# ts配置

```json
{
  "compileOnSave": false, //編輯器在儲存檔案的時候根據tsconfig.json重新產生編譯檔案
  "compilerOptions": {
    /* 基本選項 */
    "target": "es5", // 指定編譯生成的JS版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定生成哪種模組: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 編譯需要引入的特定函式庫檔案
    "allowJs": true, // 允許編譯 javascript 文件
    "checkJs": true, // 報告 javascript 文件中的錯誤
    "jsx": "preserve", // 指定 jsx 代碼的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相應的 '.d.ts' 文件
    "declarationMap": true, //生成宣告檔案的 sourceMap
    "sourceMap": true, // 生成相應的 '.map' 文件
    "outFile": "./", // 將輸出文件合併為一個文件
    "outDir": "./", // 指定輸出目錄
    "rootDir": "./", // 檔案應該要被放置的位置
    "composite": true, // 是否编译构建引用项目
    "tsBuildInfoFile": "./", // 指定文件存儲增量編譯信息，默認為 tsconfig.tsbuildinfo
    "removeComments": true, // 刪除編譯後的所有的註釋
    "noEmit": true, // 不產生輸出檔案
    "importHelpers": true, // 從 tslib 導入輔助工具函數
    "isolatedModules": true, // 將每個文件做為單獨的module（與 'ts.transpileModule' 類似）.

    /* 嚴格的類型檢查選項 */
    "strict": true, // 啟用所有嚴格類型檢查選項
    "noImplicitAny": true, // 在表達式和聲明上有隱含的 any類型時報錯
    "strictNullChecks": true, // 啟用嚴格的 null 檢查
    "strictFunctionTypes": true, //啟用檢查function型別
    "strictBindCallApply": true, //啟用對 bind, call, apply 更嚴格的型別檢查
    "strictPropertyInitialization": true, //啟用class实例属性的賦值檢查
    "noImplicitThis": true, //當 this 表達式值為 any 類型的時候，生成一個錯誤
    "alwaysStrict": true, // 以嚴格模式檢查每個module，並在每個文件裡加入 'use strict'

    /* 額外的檢查 */
    "noUnusedLocals": true, // 有未使用的變數時，拋出錯誤
    "noUnusedParameters": true, // 有未使用的參數時，拋出錯誤
    "noImplicitReturns": true, // 並不是所有function里的代碼都有返回值時，拋出錯誤
    "noFallthroughCasesInSwitch": true, // 報告 switch 語句的 fallthrough 錯誤。 （即，不允許 switch 的 case 語句貫穿）
    "noUncheckedIndexedAccess": true, //檢查 index signature 屬性是否是undefined

    /* 模組選項 */
    "moduleResolution": "node", // 選擇模組解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用於解析非相對模組名稱的基目錄
    "paths": {}, // 模組名到基於 baseUrl 的路徑映射的列表
    "rootDirs": [], // 根文件夾列表，其組合內容表示項目運行時的結構內容
    "typeRoots": [], // 包含類型聲明的文件列表
    "types": [], // 需要包含的類型聲明文件名列表
    "allowSyntheticDefaultImports": true, // 允許從沒有設置默認導出的模組中默認導入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定調試器應該找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定調試器應該找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成單個 soucemaps 文件，而不是將 sourcemaps 生成不同的文件
    "inlineSources": true, // 將代碼與 sourcemaps 生成到一個文件中，要求同時設置了 --inlineSourceMap 或 --sourceMap 屬性

    /* 其他選項 */
    "experimentalDecorators": true, // 啟用裝飾器
    "emitDecoratorMetadata": true, // 為裝飾器提供元數據的支持

    /* 進階選項 */
    "skipLibCheck": true, //不會檢查引入的函式庫檔案
    "forceConsistentCasingInFileNames": true // 確保檔案的大小寫一致
  },
  "files": [
    "hello.ts" //若指定 files，則只會編譯指定的 hello.ts 檔案。
  ],
  "exclude": [
    //指定編譯器需要排除的文件或文件夾
    "node_modules"
  ],
  "extends": "./tsconfig.base.json", //把基礎配置抽離成tsconfig.base.json檔案，然後引入

  "references": [
    // 指定依赖的程式路徑
    { "path": "./common" }
  ],
  "typeAcquisition": {
    //自動引入函式庫相關定義文件(.d.ts)。
    "enable": false,
    "exclude": ["jquery"],
    "include": ["jest"]
  }
}
```

```json
{
  "compilerOptions": {
    /* 基本选项 */
    "target": "es5", // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs", // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [], // 指定要包含在编译中的库文件
    "allowJs": true, // 允许编译 javascript 文件
    "checkJs": true, // 报告 javascript 文件中的错误
    "jsx": "preserve", // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true, // 生成相应的 '.d.ts' 文件
    "sourceMap": true, // 生成相应的 '.map' 文件
    "outFile": "./", // 将输出文件合并为一个文件
    "outDir": "./", // 指定输出目录
    "rootDir": "./", // 用来控制输出目录结构 --outDir.
    "removeComments": true, // 删除编译后的所有的注释
    "noEmit": true, // 不生成输出文件
    "importHelpers": true, // 从 tslib 导入辅助工具函数
    "isolatedModules": true, // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.

    /* 严格的类型检查选项 */
    "strict": true, // 启用所有严格类型检查选项
    "noImplicitAny": true, // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true, // 启用严格的 null 检查
    "noImplicitThis": true, // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true, // 有未使用的变量时，抛出错误
    "noUnusedParameters": true, // 有未使用的参数时，抛出错误
    "noImplicitReturns": true, // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true, // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node", // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./", // 用于解析非相对模块名称的基目录
    "paths": {}, // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [], // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [], // 包含类型声明的文件列表
    "types": [], // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true, // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./", // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./", // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true, // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true, // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true, // 启用装饰器
    "emitDecoratorMetadata": true // 为装饰器提供元数据的支持
  }
}
```
