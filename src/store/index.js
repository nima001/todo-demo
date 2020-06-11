import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		todolist:[]
	},
	getters:{
		todolist(state){
			return state.todolist
		}
	}
	,
	mutations:{
		addList(state,data){
			state.todolist.push(data)
		}
	}
})