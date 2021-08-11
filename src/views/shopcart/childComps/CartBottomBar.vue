<template>
	<div id="cartbottombar">
		<div class="bar-left">
			<CheckButton :isChecked='isChecked'></CheckButton>&nbsp;&nbsp;全选
		</div>
		<div class="totalP">
			合计: <p>{{totalPrice}}</p>
		</div>
		<div class="checkLength" @click="calcClick">
			去结算: ({{checkLength}})
		</div>
	</div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'

	export default {		
		data() {
			return {
			}
		},
		components: {
			CheckButton
		},
		computed: {
			totalPrice() {				
				return '￥' + this.$store.state.cartList.filter(item => {
					return item.checked					
				}).reduce((preValue, item) => {
					return item.realPrice * item.count					
				}, 0).toFixed(2)
			},
			checkLength() {
				return this.$store.state.cartList.filter(item => {
					return item.checked
				}).length
			},
			isChecked() {
				//没有商品将该栏隐藏并显示推荐商品
				if(this.$store.state.cartList.length === 0) return false		
				//判断全选
				// return !this.$store.state.cartList.filter(item => !item.checked).length 
				return !this.$store.state.cartList.find(item => !item.checked)
			}
		},	
		methods: {
			calcClick() {
				if(this.$store.state.cartList.length === 0) return this.$toast.show('还没有添加商品!')
			}
		}
	}
</script>

<style scoped>
	#cartbottombar {
		height: 36px;
		position: relative;
		bottom: 135px;		
		box-shadow: 0px -2px 2px rgba(250, 0, 0, 0.3);
		display: flex;
		justify-content: space-between;
		align-items: center
	}
	.totalP {
		padding-right: 15px;
		font-size: 15px;
		padding-top: 5px;
		display: flex;
	}
	.totalP p {
		color: red;
	}
	.bar-left {
		width: 65px;
		font-size: 15px;
		color: #5F6368;
		padding: 8px 0 0 8px;
		display: flex;
	}
	.checkLength {
		background-color: #FF8198;
		color: #FFFFFF;
		width: 110px;
		height: 40px;
		text-align: center;
		line-height: 36px;
		font-weight: 600;
	}
	
</style>
