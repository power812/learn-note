import { createApp } from 'vue';

import App from './App.vue';
import '../dist/style.css';
import Button from './components/button';
const app = createApp(App);
app.use(Button);

app.mount('#app');
