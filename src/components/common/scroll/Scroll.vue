<template>
	<!-- ref一般绑定给子组件 -->
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {	
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null,				
			}
		},
		mounted() {
			//1.创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper, {
				observeDOM: true,
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad
			})				    
			//2.监听滚动位置
			if(this.probeType === 2 || this.probeType === 3) {
				this.scroll.on('scroll',(position) => {
					 // console.log(position)
					 this.$emit('scroll', position)
				})
			}
			//3.监听滚动到底部
			if(this.pullUpLoad) {				
				//监听上拉事件
				this.scroll.on('pullingUp',() => {
					this.$emit('pullingUp')
				})
			}
			
		},
		methods:{
			scrollTo(x, y, time=300) {
				this.scroll && this.scroll.scrollTo(x, y, time)//跳转到指定位置及所用时间
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()//上拉加载更多
			},
			refresh() {
				// console.log('----')
				this.scroll && this.scroll.refresh()//更新滚动高度
			},
			getScrollY() {
				return this.scroll ? this.scroll.y : 0//获取实时滚动高度
			}
		}
	}
</script>

<style scoped>
	
</style>
