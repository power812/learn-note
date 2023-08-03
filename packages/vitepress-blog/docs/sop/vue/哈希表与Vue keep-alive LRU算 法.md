---
description: 哈希表与Vue keep-alive LRU算法
title: 🔧 keep-alive LRU算法
readingTime: false
tag:
 - Vue
recommend: 3
---



# keep-alive LRU算法
在切换时创建新的组件实例通常是有意义的，但在有些情况下，我们的确想要组件能在
被“切⾛”的时候保留它们的状态。要解决这个问题，我们可以⽤ KeepAlive 内置
组件将这些动态组件包装起来：
```vue
<!-- 非活跃的组件将会被缓存！ -->
<KeepAlive>
<component :is="activeComponent" />
</KeepAlive>
```