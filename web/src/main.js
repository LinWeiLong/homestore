// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'


axios.defaults.withCredentials = true;

Vue.prototype.$http = {
  get: axios.get,
  post: (url, params)=>{
    return axios.post(url, qs.stringify(params));
  }
};
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
