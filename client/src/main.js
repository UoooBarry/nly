import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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