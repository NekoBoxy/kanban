import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as bootstrap from 'bootstrap'

import './assets/css/main.min.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
