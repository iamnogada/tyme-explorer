const state = {
  keyword: 'keyword'
}

const getters = {

}
const mutations = {
  
}
const actions = {
  Test({state},value){
    state.keyword = value
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
