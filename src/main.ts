import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import './index.css';
import router from './router/index';
import store from './store/index';

const app = createApp(App);
(app.config as any).productionTip = false;
app.use(router);
app.use(store);
app.use(Antd);
app.mount('#app');
