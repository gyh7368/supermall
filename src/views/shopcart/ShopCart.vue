<template>
	<div id="shopcart">		
		<CartNavBar/>
		<CartList></CartList>
		<CartBottomBar></CartBottomBar>
	</div>
</template>

<script>
	import CartNavBar from '@/views/shopcart/childComps/CartNavBar.vue'
	import CartList from '@/views/shopcart/childComps/CartList.vue'
	import CartBottomBar from '@/views/shopcart/childComps/CartBottomBar.vue'
	
	export default {
		components: {
			CartNavBar,
			CartList,
			CartBottomBar
		}
	}
</script>

<style scoped>
	#shopcart {
		height: 100vh;
		overflow: hidden;
	}
</style>
