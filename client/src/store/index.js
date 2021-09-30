import Vue from 'vue';
import Vuex from 'vuex';
import categoryModule from './modules/categoryModule';
import counterModule from './modules/counterModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    category: categoryModule,
    counter: counterModule
  }
});

export default store;
