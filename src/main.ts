import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import js
import * as bootstrap from 'bootstrap'

// 用 min 的樣式會跑掉
// import '@/assets/css/main.min.css';

// 用沒壓過的反而正常
import '@/assets/scss/main.scss';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
