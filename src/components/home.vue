<template>
	<div class="container">
		<div class="content">
			<div id="header">TO DO IT</div>
			<div class="app-menu" @click="showmenu">
				<div class="mstrip"></div>
				<div class="mstrip"></div>
				<div class="mstrip"></div>
			</div>
		</div>
		<div :class="['menu',{'menushow':this.menu}]">
			<div v-for="(item,index) in this.items" :key="index">
				<p>{{item.message}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				menu:false,
				items: [{
				    message: "待做事项",
				}, {
				    message: "完成事项",
				}, {
				    message: "皮肤",
				}, {
				    message: "关于",
				}],
			}
		},
		methods:{
			showmenu(){
				this.menu = !this.menu
			}
		}
	}
</script>

<style>
	.container{
		height: 100%;
		width: 100%;
	}
	.content{
		height: 50px;
		background-color: aquamarine;
		color: #ffffff;
		font-size: 20px;
		display: flex;
		align-items: center;
		
	}
	.app-menu{
		width: 28px;
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		cursor: pointer;
	}
	#header{
		width: 90%;
	}
	.mstrip{
		width: 100%;
		height: 2px;
		background-color: #FFFFFF;
	}
	.mstrip{
		background-color: #ffffff;
	}
	.menu{
		box-shadow: 0 0 2px 1px #dcdcdc;
		width: 20%;
		height: 720px;
		opacity: 0;
		position: absolute;
		left: -999;
		transform: translateX(-100px);
		transition: all .5s ease;
	}
	.menushow{
		opacity: 1;
		transform: translateX(0px);
	}
</style>
