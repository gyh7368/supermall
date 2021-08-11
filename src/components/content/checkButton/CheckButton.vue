<template>
	<div class="checkbtn" :class="{check: isChecked}" 
			>
		<img src="@/assets/img/cart/tick.svg" >
		<!-- <button type="button"></button> -->
	</div>
</template>

<script>
	export default {		
		data() {
			return {
				
			}
		},
		props: {
			isChecked: {
				type: Boolean,
				default() {
					return false
				}
			}
		},
		computed: {
			
		},
		mounted() {
			
		},		
	}
</script>

<style scoped>
	.checkbtn img{
		border: 1px solid #E0E0E0;
		background-color: #E0E0E0;
		border-radius: 15px;
	}
	.check img{
		background-color: orangered;
	}
</style>
