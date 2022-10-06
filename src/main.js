import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
