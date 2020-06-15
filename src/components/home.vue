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
			<div :class="{'active':index==current}" v-for="(item,index) in this.items" :key="index" @click="todo(index)">
				<p>{{item.message}}</p>
			</div>
		</div>
		<router-view></router-view>
		<div :class="['cover',{'showcover':this.menu}]" @click="showmenu"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				current:0,
				menu:this.$store.getters.menu,
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
				this.$store.commit('showmenu',this.menu)
				//关闭其他页面
				this.$store.commit('change',true)
			},
			todo(index){
				this.current = index
				if(index==0){
					this.$router.push({name:'todo'})
				}else if(index==1){
					this.$router.push({name:'complete'})
				}else if(index==2){
					console.log('sd')
				}else if(index==3){
					console.log('sd')
				}
			}
		},
		watch:{
			'$store.state.menu':function(val){
				this.menu = val
			}
		}
	}
</script>

<style scoped>
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
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 2px 1px #dcdcdc;
		width: 20%;
		height: 720px;
		opacity: 0;
		position: absolute;
		left: -999;
		transform: translateX(-100px);
		transition: all .5s ease;
		z-index: -1;
		background-color: #FFFFFF;
	}
	.menu div:hover{
		cursor: pointer;
		color: #FFFFFF;
		background-color: rgba(0,0,0,.2);
	}
	.cover{
		width: 0;
		height: 0;
		position: absolute;
		top: 6.4%;
		left: 1%;
		background-color: rgba(0,0,0,.5);
		transition: all .4s ease;
		z-index: 0;
	}
	.menushow{
		height: 92.6%;
		opacity: 1;
		position: absolute;
		top:6.4%;
		z-index: 999;
		transform: translateX(0px);
	}
	.showcover{
		width: 99%;
		height: 92.6%;
	}
	@media screen and (max-width:992px) {
		body,html{
			overflow: hidden;
			overflow-y: scroll;
		}
		.showcover{
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 9%;
		}
		.menushow{
			height: 92.6%;
			position: fixed;
			top: 9%;
			width: 45%;
		}
		.content{
			height: 50px;
			background-color: aquamarine;
			color: #ffffff;
			font-size: 20px;
			display: flex;
			align-items: center;
			position: fixed;
			width: 100%;
		}
	}
</style>
