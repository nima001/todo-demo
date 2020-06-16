import Vue from 'vue'
import App from './App.vue'
import {Popup,Dialog,Tag,SwipeCell,Button} from 'vant'
import 'vant/lib/index.css'
import router from './router/index.js'
import store from './store/index.js'
Vue.config.productionTip = false
Vue.use(Popup)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(SwipeCell)
Vue.use(Button)
new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
