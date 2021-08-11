<template>	
		<NavBar id='CartNavBar'>
			<div slot='center'>
				购物车({{cartLength}})			
			</div>
		</NavBar>	
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

import {mapGetters} from 'vuex'

export default {		
	data() {
		return {
			
		}
	},
	components: {
		NavBar
	},
	computed: {
		...mapGetters([
			'cartLength',
		])
	},
	mounted() {
		
	},		
}
</script>

<style scoped>
	#CartNavBar {
		background-color: var(--color-tint);
		color: #FFFFFF;
		font-weight: 600;
		position: relative;
		z-index: 9;
	}
</style>
