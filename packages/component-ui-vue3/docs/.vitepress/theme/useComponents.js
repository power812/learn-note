// Don't remove this file, because it registers the demo components.
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test.tsx'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('HelloWorld', HelloWorld)
  app.component('Test', Test)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
