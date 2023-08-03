---
description: 重读红宝书
title: 🔧 红宝书精读
readingTime: false
tag:
 - Vue
recommend: 3
---
# -  一、`<script>`元素有以下八个属性

<!---->

-   -   defer: 表示脚本可以延迟到**文档完全被解析和显示之后**再执行，在domContentLoad之前执行
    -   async: 脚本在loaded事件之前，执行顺序不确定，建议使用defer
    # 二、 数据类型6种: typeof 操作符
    * （typeof null === 'object'）:null被认为是空对象的引用 
    * (typeof age === undefine)typeof为初始化的值为undefine
    * **对象的空引用使用null,而字面量声明声明ingundefine**
   # 三、 垃圾回收： 对于全局变量，在不需要的时候应该手动置为null
