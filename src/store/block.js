import axios from 'axios'

const state = {
  latestblocks: []
}

const getters = {

}
const mutations = {
  updateLatestBlocks(state, blocks){
    state.latestblocks=blocks
  },
}
const actions = {
  getBlockSummary({commit}){
    axios.get('/api/blocksummary').then((result)=>{
      // console.log(JSON.stringify(data))
      commit('updateLatestBlocks',result.data)
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
