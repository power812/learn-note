// 全量导出入口
import type { App } from 'vue';
import ButtonPlugin, { Button } from '../src/components/button';

const installs = [ButtonPlugin];
// export { Button };
export default {
  version: '0.0.1',
  install(app: App) {
    installs.forEach((install) => app.use(install));
  },
};
