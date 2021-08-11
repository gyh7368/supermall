<template>
	<div id="CartList">
		<scroll class="content" ref="scroll"	>				
			<CartListItem ref="CartListItem"
			v-for="(item, index) in cartList" :key='index' :item = 'item'
			></CartListItem>
		</scroll>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
		
		import scroll from '@/components/common/scroll/Scroll.vue'
		
		import CartListItem from '@/views/shopcart/childComps//CartListItem.vue'
	
	export default {		
		data() {
			return {
				
			}
		},
		components: {
			scroll,
			CartListItem
		},
		methods: {
		
		},
		computed: {
			...mapGetters([
				'cartList'
			])
		},
		mounted() {
			
		},	
		activated() {
			this.$refs.scroll.refresh()
			// console.log(this.$refs.CartListItem)
		}
	}
</script>

<style scoped>
	#CartList {
		height: 100vh;
		/* overflow: hidden; */
	}
	.content {
		height: calc(100% - 44px - 49px - 30px);
		overflow: hidden;
	}
</style>
