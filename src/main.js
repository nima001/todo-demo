import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router/index.js'
import store from './store/index.js'
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  Vant
}).$mount('#app')
