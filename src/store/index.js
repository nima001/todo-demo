import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		todolist:[],//待做事项
		completelist:[],
		determine:false,//是否显示添加新任务界面
		menu:false,//实现显示菜单
		headcolor:'rgb(250,114,152)',
	},
	getters:{
		todolist(state){
			return state.todolist
		},
		determine(state){
			return state.determine
		},
		menu(state){
			return state.menu
		},
		completelist(state){
			return state.completelist
		},
		headcolor(state){
			return state.headcolor
		}
	}
	,
	mutations:{
		addList(state,data){
			state.todolist.unshift({name:data,status:false})
		},
		change(state,data){
			state.determine = !data
		},
		showmenu(state,data){
			state.menu = !data
		},
		completelist(state,payload){
			state.todolist[payload.status].status = true;//添加新属性
			state.completelist.unshift(payload.data);
		},
		headcolor(state,data){
			state.headcolor = data
		}
	}
})