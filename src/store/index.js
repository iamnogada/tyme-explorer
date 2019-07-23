import Vue from 'vue'
import Vuex from 'vuex'

import block from './block'
import transaction from './transaction'
import monitor from './monitor'
import sam from './sam'

Vue.use(Vuex)


var myStore= new Vuex.Store({
    modules:{
        block,
        transaction,
        monitor,
        sam
    },
    strict:false    
})

export default myStore