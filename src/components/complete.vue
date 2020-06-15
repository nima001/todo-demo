<template>
	<div class="task">
		<div class="task-item" v-for="(item,index) in completelist" :key="index">
			<p><span>{{item.name}}</span><span @click="del(index)"><a href="#">删除</a></span></p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{	
				completelist:this.$store.getters.completelist,
			}
		},
		methods:{
			del(index){
				this.$store.getters.completelist.splice(index,1);
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
		margin: 1% auto;
	}
	
	.task-item p{
		margin: 0;
		display: flex;
		justify-content: space-around;
	}
	.task-item span{
		display: block;
		width: 15%;
	}
	.task-item p a{
		text-decoration: none;
		color: #757575;
	}
	.task-item p a:last-child{
		margin-left: 10%;
	}
	@media  screen and (max-width:768px) {
		.task{
			padding-top: 18%;
		}
		.task-item span{
			display: block;
			width: 30%;
		}
	}
</style>
