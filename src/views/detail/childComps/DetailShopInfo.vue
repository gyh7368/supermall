<template>
	<div id="shopInfo">		
		<div class="shoplogo">
			<img :src="shop.logo" >
			<span>{{shop.name}}</span>
		</div>			
		<div class="shopcenter">
			<div class="goodsCount">
				<div>{{shop.goodsCount}}</div>
				<span>全部宝贝</span>
			</div>
			<div  class="sells">
				<div>{{shop.sells}}</div>
				<span>总销量</span>
			</div>
			<div class="score">
				<div v-for="(score, index) in shop.score" :class="{active: isBetter}">
					<span>{{score.name}}&nbsp;</span>
					<span>{{score.score}}</span>					
					</div>				
			</div>
		</div>
		<button class="wellcome">进店逛逛</button>
	</div>
</template>

<script>
	export default {
		props:{
			shop: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				isBetter: false
			}
		}
	}
</script>

<style scoped>
	#shopInfo {
		height: 200px;
		/* background-color: #bfa; */
		padding: 18px 10px;
		border-bottom: 4px #F1F3F4 solid;
	}
	.shoplogo {
		display: flex;
		align-items: center;
		padding-bottom: 10px;
	}
	.shoplogo span{
		flex: 1;
		padding-left: 10px;
	}
	.shoplogo img{
		width: 45px;
		border-radius: 50%;
		border: 1px solid #CDCDCD;
	}
	.shopcenter {
		align-items: center;
		padding-bottom: 15px;
		/* text-align: center; */
		font-size: 25px;
		color: #000000;
	}
	.goodsCount {
		text-align: center;
	}
	.sells {
		text-align: center;
	}
	.sells span {		
		font-size: 12px;
	}
	.goodsCount span {
		font-size: 12px;
	}
	.score {
		font-size: 12px;
		line-height: 18px;
		padding-left: 25px;
		border-left: 1px #CDCDCD solid;
	}	
	.active {
		
	}
	.shopcenter {
		display: flex;
	}
	.shopcenter div {
		flex: 1;
	}
	.wellcome {
		margin-top: 12px;
		border-radius: 15px;
		font-size: 12px;
		color: #000000;
		line-height: 30px;
		height: 30px;
		padding: 0 20px 0px;
		position: relative;
		left: 30%;
		border: 1px solid #CDCDCD;
	}
</style>
