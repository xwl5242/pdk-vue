import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routers from "./router";

import Axios from 'axios'

Vue.config.productionTip = false
Vue.use(Router)
// Vue.use(VueAwesomeSwiper)

const router = new Router({
  mode: 'history',
  routes: routers
});

const $http = Axios.create({
  baseURL: '/api',
  timeout: 3000
});
Vue.prototype.$http = $http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
