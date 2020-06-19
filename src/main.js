import Vue from 'vue';

import App from './App.vue';
// import router from '@/router';
// import store from '@/store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import animated from 'animate.css';
Vue.use(ElementUI)
Vue.use(animated)

import create from '@/utils/create';
Vue.prototype.$create = create

require('./mock/index.js');



//第二节课：(不使用，则注释，打开第4行的router)
import router from '@/router/class2';
import store from '@/store/class2';



Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
});

