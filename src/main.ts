import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'font-awesome/css/font-awesome.min.css'
import 'element-plus/theme-chalk/index.css'
const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#app')
