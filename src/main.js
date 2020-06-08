import Vue from 'vue';

import App from './App.vue';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css';
Vue.use(ElementUI)
Vue.use(animated)

require('./mock/index.js');


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});

