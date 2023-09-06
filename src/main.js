import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import AV from 'leancloud-storage'

AV.init({
    appId: import.meta.env.VITE_APP_LEANCLOUD_APP_ID,
    appKey: import.meta.env.VITE_APP_LEANCLOUD_APP_KEY,
    serverURL: import.meta.env.VITE_APP_LEANCLOUD_SERVER_URL
})

const app = createApp(App)

app.use(router)

app.mount('#app')
