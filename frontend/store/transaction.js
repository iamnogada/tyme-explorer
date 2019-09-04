import axios from 'axios'

const state = {
    latestTransactions:[]
}

const getters = {

}
const mutations = {
  updateLatestTransactions(state, transactions){
    state.latestTransactions=transactions
  },
}
const actions = {
  getTransactionSummary({commit}){
    axios.get('/api/transactionsummary').then((result)=>{
      console.log(JSON.stringify(result))
      commit('updateLatestTransactions',result.data)
    })
  }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }