import Vue from 'vue';
import Vuex from 'vuex';
import {getAllCategories} from '../services/categoryService';

Vue.use(Vuex);

const store = new Vuex.Store({
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
});

export default store;
