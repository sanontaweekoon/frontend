import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// import Sweet Alert มาใช้งาน

// สร้างตัวแปรมาเก็บ constant ของ Vue
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
app.use(VueSweetalert2)

// createApp(App).use(store).use(router).mount('#app')
