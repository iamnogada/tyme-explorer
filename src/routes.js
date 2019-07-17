import Vue from 'vue'
import Router from 'vue-router'
import Browser from './views/Browser.vue'
import Blocks from './views/blocks/Blocks.vue'
import Transactions from './views/transactions/Transactions.vue'
// import store from './store'


// Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Browser,
    },
    {
        path: '/blocks',
        component: Blocks,
    },
    {
        path: '/transactions',
        component: Transactions,
    },

];

export default routes