// tailwind
import './styles/index.scss';
import { createApp } from 'vue';

import App from './App.vue';
import Button from './components/button';
const app = createApp(App);
app.use(Button);

app.mount('#app');
