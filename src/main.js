import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import 'normalize.css';

import '@/assets/less/styles.less';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true,
  delay: 300,
  offset: 250,
  duration: 800
});

const app = createApp(App).use(createPinia()).use(router).mount('#app');