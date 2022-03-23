import Vue from 'vue'
import App from '@/App.vue'
import eventBus from '@/plugins/event-bus'
import router from './router'
import store from './store'
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(eventBus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
