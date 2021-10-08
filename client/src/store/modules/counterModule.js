const counterModule = {
  namespaced: true, 
  state: {
    count: 0,
    isUnlocked: false
  },
  mutations: {
    addCount(state) {
      state.count += 1;
      if(state.count == 3) {
        state.isUnlocked = true
      }
    }
  },
  getters: {
    isUnlocked: (state) => {
      return state.isUnlocked
    }
  },
  actions: {
    addCount: ({commit}) => {
      commit('addCount');
    }
  }
}

export default counterModule;
