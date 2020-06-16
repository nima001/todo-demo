<template>
	<div class="container">
		<div class="content" :style="{backgroundColor:headcolor}">
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
		<van-popup v-model="show" position="bottom" :style="{ height: '30%'}">
			<ul>
				<li v-for="(item,index) in colors" :key="index"  @click="changecolor(item.color)">{{item.name}}<span :style="{backgroundColor:item.color}"></span></li>
			</ul>
		</van-popup>
		<Ciclebutton></Ciclebutton>
	</div>
</template>

<script>
	import Ciclebutton from './Ciclebutton.vue'
	export default{
		data(){
			return{
				headcolor:this.$store.getters.headcolor,
				current:0,
				menu:this.$store.getters.menu,
				show:false,
				items: [{
					message: "待做事项",
				}, {
					message: "完成事项",
				}, {
					message: "皮肤",
				}],
				colors: [{
					name: "夜间模式",
					color:'rgb(45,45,45)'
				}, {
					name: "少女粉",
					color:'rgb(250,114,152)'
				}, {
					name: "姨妈红",
					color:'rgb(244,66,54)'
				}, {
					name: "咸蛋黄",
					color:'rgb(254,192,8)'
				}],
			}
		},
		mounted() {
			
		},
		components:{
			Ciclebutton
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
					this.show = !this.show
				}
			},
			changecolor(color){
				this.$store.commit('headcolor',color)
			}
		},
		watch:{
			'$store.state.menu':function(val){
				this.menu = val
			},
			'$store.state.headcolor':function(val){
				this.headcolor = val
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
		color: #ffffff;
		font-size: 20px;
		display: flex;
		align-items: center;
		transition: all .4s ease;
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
	.menu div{
		transition: all .2s ease;
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
		left: 0;
		background-color: rgba(0,0,0,.5);
		transition: all .4s ease;
		z-index: 0;
	}
	.van-popup ul li{
		padding: 4%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.van-popup ul li span{
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 50%;
	}
	.menushow{
		height: 92.6%;
		opacity: 1;
		position: absolute;
		top: 6.6%;
		z-index: 999;
		transform: translateX(0px);
	}
	.showcover{
		width: 99%;
		height: 92.6%;
	}
	.active{
		background-color: rgb(0,0,0,.3);
		color: rgb(255,255,255);
	}
	@media screen and (max-width:768px) {
		.showcover {
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 6.1%;
			left:0;
		}
	}
	@media screen and (max-width:414px) {
		.showcover{
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 6.8%;
			left: 0;
		}
		.menushow{
			width: 45%;
			height: 92.6%;
			opacity: 1;
			position: absolute;
			top: 6.8%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	@media screen and (max-width:411px) and (max-height:823px) {
		.showcover{
			width: 100%;
			height: 93.7%;
			position: fixed;
			top: 6.1%;
			left: 0;
		}
		.menushow{
			height: 93.7%;
			opacity: 1;
			position: absolute;
			top: 6.1%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	@media screen and (max-width:411px) and (max-height:731px) {
		.showcover{
			width: 100%;
			height: 93.5%;
			position: fixed;
			top: 6.8%;
			left: 0;
		}
		.menushow{
			height: 93%;
			opacity: 1;
			position: absolute;
			top: 6.8%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	
	@media screen and (max-width:375px)  and (max-height:812px) {
		.showcover{
			width: 100%;
			height: 92.5%;
			position: fixed;
			top: 6.1%;
			left: 0;
		}
		.menushow{
			height: 92.5%;
			opacity: 1;
			position: absolute;
			top: 6.1%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	@media screen and (max-width:375px)  and (max-height:667px) {
		.showcover{
			width: 100%;
			height: 92.5%;
			position: fixed;
			top: 7.5%;
			left: 0;
		}
		.menushow{
			height: 92.5%;
			opacity: 1;
			position: absolute;
			top: 7.5%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	@media screen and (max-width:360px) {
		.showcover{
			width: 100%;
			height: 92%;
			position: fixed;
			top: 7.8%;
			left: 0;
		}
		.menushow{
			height: 92%;
			opacity: 1;
			position: absolute;
			top:8%;
			z-index: 999;
			width: 45%;
			transform: translateX(0px);
		}
	}
	@media screen and (max-width:340px) {
		body,html{
			overflow: hidden;
			overflow-y: scroll;
		}
		.showcover{
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 8.8%;
			left: 0;
		}
		.menushow{
			height: 92.6%;
			position: fixed;
			top: 9%;
			width: 45%;
		}
		.content{
			height: 50px;
			color: #ffffff;
			font-size: 20px;
			display: flex;
			align-items: center;
			position: fixed;
			width: 100%;
		}
	}
	@media screen and (max-width:320px) and (max-height:719px) {
		.showcover{
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 7%;
			left: 0;
		}.menushow{
			height: 92.6%;
			position: fixed;
			top: 7%;
			width: 45%;
		}
	}
	@media screen and (max-width:320px) and (max-height:568px) {
		.showcover{
			width: 100%;
			height: 92.6%;
			position: fixed;
			top: 8.8%;
			left: 0;
		}.menushow{
			height: 92.6%;
			position: fixed;
			top: 9%;
			width: 45%;
		}
	}
</style>
