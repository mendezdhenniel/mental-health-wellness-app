import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // Add the full path to be safe

const app = createApp(App)

app.use(router)
app.mount('#app')