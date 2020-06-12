import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		todolist:[],//待做事项
		determine:false,//是否显示添加新任务界面
		menu:false,//实现显示菜单
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
		}
	}
	,
	mutations:{
		addList(state,data){
			state.todolist.push(data)
		},
		change(state,data){
			state.determine = !data
		},
		showmenu(state,data){
			state.menu = !data
		}
	}
})