<template>
	<div>
		<div class="item" v-for="(item,index) in todolist" :key="index">
			<p>{{item}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{	
				todolist:this.$store.getters.todolist
			}
		}
	}
</script>

<style scoped>
	.item{
		padding: 5% 0;
		border-radius: 5px;
		box-shadow: 0 0 2px 1px rgb(0,0,0,.3);
		margin-bottom: 2%;
	}
	
	.item p{
		margin: 0;
	}
</style>
