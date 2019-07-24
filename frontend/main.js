import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Buefy from 'buefy'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import util from './mixins/util'

import routes from './routes'



require('./assets/main.scss')
Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

Vue.use(VueRouter)
Vue.mixin(util)


const router = new VueRouter({mode:'hash',routes});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

store.dispatch('monitor/startMonitor')