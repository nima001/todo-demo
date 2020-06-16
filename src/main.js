import Vue from 'vue'
import App from './App.vue'
import {Popup,Dialog} from 'vant'
import 'vant/lib/popup/style'
import 'vant/lib/dialog/style'
import router from './router/index.js'
import store from './store/index.js'
Vue.config.productionTip = false
Vue.use(Popup)
Vue.use(Dialog)
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
