import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
  store: store,
  created() {
    this.$store.dispatch('getCategories');
  }
}).$mount('#app');

export default app;