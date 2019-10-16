import Vue from 'vue'
import App from './App.vue'
import './assets/base.css'
import './assets/index.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
const router = new VueRouter()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
