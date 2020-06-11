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
	export default{
		data(){
			return{
				todolist:'',
				determine:false
			}
		},
		methods:{
			rotate(){
				this.determine = !this.determine
			},
			sure(){
				this.determine = !this.determine
				this.$store.commit('addList',this.todolist)
			}
		}
	}
</script>

<style scoped>
	.newtask{
		width: 0;
		height: 720px;
		display: flex;
		margin: auto;
		opacity: 0;
		justify-content: center;
		transition: all .4s ease;
	}
	.addnew{
		opacity: 1;
		width: 80%;
	}
	input{
		width: 100%;
		border: 0;
		outline: none;
		border-bottom: 1px solid rgb(0,0,0,.3);
		margin-top: 5%;height: 5%;
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
		z-index: 1;
	}
	@media screen and (max-width:992px) {
		input{
			margin-top: 70%;
		}
	}
</style>
