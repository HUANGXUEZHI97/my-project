import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store';
import router from '@/router';

Vue.config.productionTip = false


import axios from 'axios';
Vue.prototype.$axios = axios

import '@/icons';
import './permission.js';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
