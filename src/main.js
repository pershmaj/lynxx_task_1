import { createApp } from 'vue'
import App from './App.vue'
import PictureImg from './components/PictureImg/PictureImg.vue'

import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.component('PictureImg', PictureImg) // component global registration as solution of circular reference

app.mount('#app')
