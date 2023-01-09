import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(Axios);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
