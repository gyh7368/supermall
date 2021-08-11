<template>
	<div id="detailBaseInfo" v-if="!Object.keys(goodsInfo).length == 0">
		<div class="topInfo">
			<div class="price">
				<span class="newPrice">{{goodsInfo.Price}}</span>
				<span class="oldprice"><del>{{goodsInfo.oldprice}}</del></span>
				<span class="discount" :style="{backgroundColor: goodsInfo.bgColor}">{{goodsInfo.discount}}</span>			
			</div>
			<div class="columns0">
				<p class="columns2">{{goodsInfo.columns[2]}}</p>					
			</div>
			<div class="title">{{goodsInfo.title}}</div>
			<div class="columns">
				<span class="columns1">{{goodsInfo.columns[1]}}</span>				
				<span class="columns1">{{goodsInfo.columns[0]}}</span>		
			</div>
		</div>
		<div>
			<ul class="ems">
				<li class="emsitem" v-for="(ems, index) in goodsInfo.services">
					<p><img :src ='ems.icon'>{{ems.name}}</p>
				</li>				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			goodsInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>	
	.topInfo {
		padding: 8px;
	}
	.newPrice {
		font-size: 26px;
		color: red;
	}
	.oldprice {
		font-size: 8px;
		/* text-decoration: line-through; */
	}
	.discount {
		font-size: 8px;
		position: relative;
		left: 5px;
		top: -8px;
		/* background-color: #0000EE; */
		color: #FFFFFF;
		border-radius: 10%;
	}
	.columns2 {
		float: right;
		position: absolute;		
		/* left: 0px; */
		right: 10px;
		top: 320px;
		font-size: 8px;
		z-index: 11;
		/* background-color: #000000; */
	}
	.title {
		color: #000000;
		line-height: 25px;
		padding-bottom: 10px;
		padding-top: 10px;
	}
	.columns {
		font-size: 8px;
		padding: 0 20px;
		display: flex;
		text-align: center;
	}
	.columns1 {
		flex: auto;
	}
	.ems {
		margin-top: 8px;
		border-top: 5px solid #F1F3F4;
		border-bottom: 5px solid #F1F3F4;
		/* display: flex; */
		font-size: 12px;
		padding: 8px;		
	}
	.emsitem p{
		/* flex: 1;		 */
		line-height: 20px;
	}	
	.emsitem img{
		/* flex: auto; */
		width: 12px;	
		margin-right: 3px;
	}


</style>
