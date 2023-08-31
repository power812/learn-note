// Don't remove this file, because it registers the demo components.
import VueUsage from '../../../src/components/VueUsage.tsx'
import { Button } from '../../../src/components/button/index.tsx'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('VueUsage', VueUsage)
  app.component('SButton', Button)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
