<template>
	<div class="tab-bar-item" @click="itemClick">
		
		<div v-if="!isActive"><slot name="item-icon"></slot></div>		
		<div v-else><slot name="item-icon-active"></slot></div>		
		<!-- <div :class='{active:isActive}'><slot name="item-text"></slot></div> -->
		<div :style='activeStyle'><slot name="item-text"></slot></div>
			
		</div>
</template>

<script>
	export default{
		props:{
			path: String,
			activeColor:{
				type: String,
				default: '#ff5777'
			}
		},
		data() {
			return {
				//isActive: true				
			}
		},
		computed:{
			isActive() {				
				//$router为Router的全局实例对象
				//$route为当前活跃路由的实例对象,是局部对象
				//this.path为./home  this.$route.path为/home
				return this.path.indexOf(this.$route.path) !== -1
			},
			activeStyle() {
				return this.isActive ? {color : this.activeColor} : {}
			}
		},
		methods:{
			itemClick() {
				this.$router.push(this.path)//.catch(() => {})
			}
		}
	}
</script>

<style>
	.tab-bar-item {
	  flex: 1;
	  text-align: center;
	  height: 49px;
	  color: black;
	  font-size: 10px;
	}
	.tab-bar-item img {
	  width: 24px;
	}
	/* .active{
		color: #ff5777;
	} */
</style>
