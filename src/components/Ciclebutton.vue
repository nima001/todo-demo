<template>
	<div>
		<div :class="['newtask',{'addnew':this.determine}]">
			<input v-model="todolist" placeholder="添加新的任务 ..." type="text" @keyup.enter="sure">
		</div>
		<div :class="['cicle',{'trans':this.determine}]" @click="rotate()">+</div>
		<div :class="['cicle determine',{'show':this.determine}]" @click="sure">确定</div>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default{
		data(){
			return{
				todolist:'',
				determine:this.$store.getters.determine
			}
		},
		methods:{
			rotate(){
				this.$store.commit('change',this.determine)
				this.determine=this.$store.getters.determine//更新data数据
				//关闭其他界面
				this.$store.commit('showmenu',true)
			},
			sure(){
				if(this.todolist!=""){
					this.$store.commit('change',this.determine)
					this.$store.commit('addList',this.todolist)
					this.todolist = ""
				}else{
					Dialog({ message: '请输入内容' });
				}
			}
		},
		watch:{
			'$store.state.determine':function(val){
				this.determine = val
			}
		}
	}
</script>

<style scoped>
	.newtask{
		width: 0;
		display: flex;
		margin: auto;
		opacity: 0;
		z-index: 998;
		background-color: #FFF;
		justify-content: center;
		transition: all .4s ease;
	}
	.addnew{
		opacity: 1;
		width: 99%;
		height: 92%;
		position: absolute;
		top: 9.3%;
		left: .5%;
	}
	input{
		width: 80%;
		border: 0;
		outline: none;
		border-bottom: 1px solid rgb(0,0,0,.3);
		margin: 5% auto 0;
		height: 5%;
	}
	.cicle{
		position: fixed;
		right: 10%;
		bottom: 10%;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		font-size: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ffaa00;
		color: #FFFFFF;
		z-index: 999;
		transition: all .4s ease;
	}
	.cicle:hover{
		cursor: pointer;
	}
	.trans{
		transform: rotate(135deg);
	}
	.determine{
		position: fixed;
		right: 10.3%;
		bottom: 10.5%;
		width: 40px;
		height: 40px;
		font-size: 15px;
		opacity: 0;
		z-index: -1;
		background-color: rgba(0,0,0,.5);
	}
	.show{
		bottom: 20%;
		opacity: 1;
		width: 50px;
		height: 50px;
		z-index: 998;
	}
	@media screen and (max-width:992px) {
		input{
			margin-top: 70%;
		}
	}
</style>
