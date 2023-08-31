import { App } from 'vue';
import './style/button.scss';
// tailwind
import '../../styles/index.scss';
import Button from './src/button';
export { Button };
export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
