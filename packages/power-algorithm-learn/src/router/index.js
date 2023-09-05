import  {createRouter,  createWebHistory}  from 'vue-router'
import Array from '../algorithm/05-array.md'
import LinkList from '../algorithm/06-07-LinkedList.vue'
import vueUsage from '../vueUsage/01-baseUsage.vue'
export const routes = [
  { path: '/', component: Array },
  { path: '/06-07-LinkedList', component: LinkList },
  { path: '/06-07-LinkedList', component: LinkList },
  // vue的使用
  { path: '/vueUsage', component: vueUsage },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router