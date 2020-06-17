import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store';
import router from '@/router';

import axios from 'axios';

import '@/plugins/element';
import '@/icons';
import './permission.js';
import vPermission from '@/directive/permission';

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.directive("permission", vPermission);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
