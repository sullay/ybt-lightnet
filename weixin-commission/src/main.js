import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.scss'
import mint from './plugins/mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
