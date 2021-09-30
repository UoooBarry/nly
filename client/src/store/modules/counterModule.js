const counterModule = {
  namespaced: true, 
  state: {
    count: 0,
    isUnlocked: false
  },
  mutations: {
    addCount(state) {
      state.count += 1;
      if(state.count == 30) {
        state.isUnlocked = true
      }
    }
  },
  actions: {
    addCount: ({commit}) => {
      commit('addCount');
    }
  }
}

export default counterModule;
