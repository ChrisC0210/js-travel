import { createApp } from 'vue'
import App from './App.vue'
import router from '/router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./main.css"

//Vue.prototype.$axios = axios;

createApp(App).use(VueAxios, axios).use(router).mount('#app')
