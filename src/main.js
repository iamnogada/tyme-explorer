import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'


import routes from './routes'


require('./assets/main.scss')
Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

Vue.use(VueRouter)

const router = new VueRouter({mode:'history',routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
