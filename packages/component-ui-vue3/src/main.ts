import { createApp } from 'vue';

import App from './App.vue';
import '../dist/style.css';
import powerUi from '../dist/power-ui.js';
const app = createApp(App);
app.use(powerUi);

app.mount('#app');
