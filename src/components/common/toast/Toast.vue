<template>
	<div v-show="isShow">
		<div class="toast">{{messages}}</div>
	</div>
</template>

<script>
	export default {	
		data() {
			return {
				isShow: false,
				messages: ''
			}
		},
		methods: {
			show(messages='默认信息', duration=1500) {
				
				this.messages = messages;
				this.isShow = true
				
				setTimeout(() => {
					this.isShow = false;
					this.messages = ''
				}, duration)
			}
		}		
	}
</script>

<style scoped>
	.toast {
		position: fixed;
		z-index: 999;
		top: 48%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 8px 10px;
		/* font-weight: 600; */
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
