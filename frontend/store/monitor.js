const state = {
  lastestBlock:0
}

const getters = {

}
const mutations = {
  
}
const actions = {
  startMonitor({dispatch,state}){
    
    if (!!window.EventSource) {
      const sseSource = new EventSource('/monitor')
      sseSource.addEventListener('mainnet', function(e) {
        state.lastestBlock = e.data
        dispatch('block/getBlockSummary','',{root:true})
        dispatch('transaction/getTransactionSummary','',{root:true})
        // console.log('Mainnet:' + state.lastestBlock);
      }, false);
      
    }else{
      setTimeout(() => {
        
      }, 1500);
    }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
