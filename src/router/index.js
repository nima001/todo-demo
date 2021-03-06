import Vue from 'vue'
import Router from 'vue-router'
import {home,todo,complete} from '../components'
Vue.use(Router)
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
	routes:[
		{
			path:'/',
			redirect:'/todo'
		},{
			name:'home',
			path:'/home',
			component:home,
			children:[{
				name:'todo',
				path:'/todo',
				component:todo
				},
				{
				name:'complete',
				path:'/complete',
				component:complete
			}]
		}
	]
})