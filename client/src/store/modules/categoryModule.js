import {getAllCategories} from '../../services/categoryService';

const categoryModule = {
  state: {
    categories: [],
    loading: false
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  getters: {
    categories: state => {
      return state.categories;
    }
  },
  actions: {
    getCategories: async ({commit}) => {
      commit('setLoading', true);
      const categories = await (await getAllCategories()).categories;
      commit('setCategories', categories);
      commit('setLoading', false);
    }
  }
}

export default categoryModule;