<template>
	<div class="task">
		<van-swipe-cell class="task-item" v-for="(item,index) in completelist" :key="index">
			<p>
				<span class="completeitem" style="white-space: nowrap;">{{item.name}}</span>
				<van-tag style="width: 36px;transition: all .4s ease;"  plain :color="headcolor">已完成</van-tag>
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
				headcolor:this.$store.getters.headcolor,
				completelist:this.$store.getters.completelist,
			}
		},
		methods:{
			del(index){
				this.$store.getters.completelist.splice(index,1);
			}
		},
		watch:{
			'$store.state.headcolor':function(val){
				this.headcolor = val
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
		align-items: center;
	}
	.completeitem{
		display: block;
		width: 15%;
		margin-right: 2%;
		overflow: hidden;
		white-space: nowrap;
	}
	.task-item p a{
		text-decoration: none;
		color: #757575;
	}
	.task-item p a:last-child{
		margin-left: 10%;
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
		.task-item span:first-child{
			display: block;
			width: 30%;
		}
	}
</style>
