<template>
	<div id = 'DetailBottomBar'>
		 <div class="muti">
			 <div>
				 <i class="qwe">
					 <!-- <img src="@/assets/img/detail/detail_bottom.png" style="width: 25px;"> -->
					 </i>
				 <span>客服</span>
			 </div><div>
				 <i class="rty"></i>
				 <span>店铺</span>
			 </div><div>
				 <i  class="uio"></i>
				 <span>收藏</span>
			 </div>
		 </div>
		 <div>
			 <div class="shopcart" @click="addToCart">加入<br>购物车</div>
			 <div class="shopping">购买</div>
		 </div>	
			
	</div>
</template>

<script>
	
	export default {		
		data() {
			return {
				
			}
		},
		methods: {
			addToCart() {
				this.$emit('addCart')
			}
		}		
	}
</script>

<style scoped>
	#DetailBottomBar {
		height: 49px;
		background-color: #FFFFFF;
		position: relative;
		/* bottom: 49px;		 */
		display: flex;		
	}
	#DetailBottomBar div {
		flex: 1;
		display: flex;
	}
	#DetailBottomBar div div {
		flex: 1;
	}
	.qwe {/* 
			background-image: url(../../../assets/img/detail/detail_bottom.png); */
	}
	.shopcart {
		background-color: orange;
		text-align: center;
		color: #000000;
		padding: 5px 12px 0px 24px;
	}
	.shopping {
		color: #FFFFFF;
		background-color: hotpink;
		/* padding: 15px; */
		/* text-align: center; */
		line-height: 49px;
		padding-left: 18px;
	}
	.muti {
		font-size: 12px;
	}
</style>
