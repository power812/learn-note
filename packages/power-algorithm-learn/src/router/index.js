import  {createRouter, createWebHashHistory}  from 'vue-router'
import Array from '../05-array.md'
import LinkList from '../06-singleLinkedListAlgo.vue'
export const routes = [
  { path: '/', component: Array },
  { path: '/06-singleLinkedListAlgo', component: LinkList },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router