<template>
	<div class="task">
		<van-swipe-cell class="task-item" v-for="(item,index) in todolist" :key="index">
			<p>
				<span class="todoitem" :class="{'fcolor':item.status==true}">{{item.name}}</span>
				<span class="todoitem">
					<a v-if="!item.status" href="#" @click="complete(index)">完成</a>
				</span>
			</p>
			<template #right>
				<van-button style="white-space: nowrap;margin-top: -19%;" square type="danger" text="删除"  @click="del(index)"/>
			</template>
		</van-swipe-cell>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				todolist:this.$store.getters.todolist,
			}
		},
		methods:{
			del(index){
				this.$store.getters.todolist.splice(index,1);
			},
			complete(index){
				this.$store.commit('completelist',{data:this.todolist[index],status:index})
			}
		}
	}
</script>

<style scoped>
	.task-item{
		width: 80%;
		padding: 10px 0;
		border-radius: 5px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
		margin: 0 auto 4%;
	}
	.task-item p{
		margin: 0;
		display: flex;
		justify-content: space-around;
	}
	.todoitem{
		display: block;
		width: 15%;
		overflow: hidden; 
		text-overflow: ellipsis; 
		white-space:nowrap;
	}
	.task-item p a{
		text-decoration: none;
		color: #757575;
	}
	.task-item p a:last-child{
		margin-left: 10%;
	}
	.fcolor{
		text-decoration: line-through;
		opacity: .4;
	}
	::-webkit-scrollbar{
		display: none;
	}
	@media  screen and (max-width:768px) {
		.task{
			padding-top: 18%;
			height: 450px;
			overflow: scroll;
		}
		.task-item span:not(:last-child){
			display: block;
			width: 30%;
		}
	}
</style>
