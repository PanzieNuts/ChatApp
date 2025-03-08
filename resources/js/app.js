
import './bootstrap';
import { createApp } from 'vue';
import App from './components/templates/App.vue';

import vuetify from './vuetify';
import router from './router';
import Vue3Toastify from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createPinia } from 'pinia';
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

const app = createApp(App);
app.use(Vue3Toastify, { autoClose: 900 }); 
app.use(vuetify);
app.use(router);
app.use(pinia)
app.mount('#app');