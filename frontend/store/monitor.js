const state = {
}

const getters = {

}
const mutations = {
  
}
const actions = {
  startMonitor({dispatch}){
    dispatch('sam/Test',"hello",{root:true})

    if (!!window.EventSource) {
      const sseSource = new EventSource('/monitor')
      sseSource.addEventListener('message',(e)=>{
        const messageData = e.data;
        console.log("rx:"+messageData);
        
      })
      sseSource.addEventListener('userlogon', function(e) {
        // var data = JSON.parse(e.data);
        console.log('User login:' + e.data);
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