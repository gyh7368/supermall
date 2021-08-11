<template>
	<div>			
			<div class="cartshop">
				<div class="checkbtn">
					<CheckButton :isChecked='item.checked' 
					@click.native="checkClick"></CheckButton>
				</div>
				<div class="cartimage"><img :src='item.image'></div>
				<div class="shopcenter">
					<div style="font-size: 12px; overflow: hidden; 
					text-overflow: ellipsis; display: -webkit-box; 
					-webkit-line-clamp: 2; -webkit-box-orient: vertical;">
					{{item.title}}</div>
					<div style="color: red; font-size: 15px; padding-top: 15px;">
						{{item.realPrice}}</div>
					<div class="cartcount">{{item.count}}</div>
				</div>
			</div>
		</div>	
</template>

<script>
	import CheckButton from '@/components/content/checkButton/CheckButton.vue'
		
	export default {
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		components: {
			CheckButton
		},		
		computed: {
		
		},
		methods: {
			checkClick() {
				this.item.checked = !this.item.checked
			}
		},	
	}
</script>

<style scoped>
	.cartshop {
		height: 130px;
		border-bottom: 8px solid #F1F3F4;
		padding: 8px;
		display: flex;
		/* padding-left: 25px; */
	}
	.cartshop div {
		flex: auto;
	}
	.checkbtn {
		width: 10px;
		padding-right: 25px;
		position: relative;
		top: 20px;
	}
	.cartimage img{
		width: 70px;
	}
	.shopcenter {
		padding-left: 15px;
	}
	.cartcount {
		position: relative;
		right: -180px;
		left: auto;
		top: 15px;
	}
</style>
