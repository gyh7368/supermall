<template>
	<div class="goodslist">
		<GoodsListItem v-for="(item, index) in goods" 
		:goodsItem='item' :key='index'></GoodsListItem>
	</div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem.vue'
	
	export default {
		props:{
			goods:{
				type:Array,
				default() {
					return []
				}
			}
		},
		components:{
			GoodsListItem
		}
	}
</script>

<style scoped>
	.goodslist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
