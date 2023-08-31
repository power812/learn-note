import { createApp } from 'vue';

import App from './App.vue';
import '../dist/style.css';
import powerUi from '@power88/power-ui';
const app = createApp(App);
app.use(powerUi);

app.mount('#app');
