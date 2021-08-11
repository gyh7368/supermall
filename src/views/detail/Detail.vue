<template>
	<div id="detail">
		<DetailNavBar class="detail-nav" ref="DetailNavBar"
		@titleClick='titleClick'/>
		
		<Scroll class="content"  ref="scroll" @scroll='contentscroll' :probeType='3'>
		<DetailSwiper :topImages='topImages'/>
			<DetailBaseInfo :goodsInfo='goodsInfo'/>
			<DetailShopInfo :shop='shop'/>
			<DetailGoodsInfo :detailInfo='detailInfo' @imageLoad='imageLoad'/>
			<DetailParamInfo :paramInfo='paramInfo' ref="DetailParamInfo"/>
			<DetailComment ref='DetailComment' :commentInfo='commentInfo'/>
			<GoodsList ref='recommends'  :goods='recommends'/>
		</Scroll>
		<DetailBottomBar @addCart='addCart'/>
		<BackTop @click.native='backClick' v-show="isShowBackTop"/>
		
	</div>
</template>

<script>
	import Scroll from '@/components/common/scroll/Scroll.vue'	
		import Toast from '@/components/common/toast/Toast.vue'	
	
		import GoodsList from '@/components/content/goods/GoodList.vue'
		
		import DetailNavBar from '@/views/detail/childComps/DetailNavBar.vue'
		import DetailSwiper from '@/views/detail/childComps/DetailSwiper.vue'
		import DetailBaseInfo from '@/views/detail/childComps/DetailBaseInfo.vue'
		import DetailShopInfo from '@/views/detail/childComps/DetailShopInfo.vue'
		import DetailGoodsInfo from '@/views/detail/childComps/DetailGoodsInfo.vue'
		import DetailParamInfo from '@/views/detail/childComps/DetailParamInfo.vue'
		import DetailComment from '@/views/detail/childComps/DetailComment.vue'		
		import DetailBottomBar from '@/views/detail/childComps/DetailBottomBar.vue'	
				
		import {getDetail, GoodsInfo, Shop, GoodsParams ,getRecommend} 
			from '@/network/detail.js'
		import {ItemListener, BackTopmixin} from '@/common/mixin.js'
	
	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailComment,
			DetailBottomBar,
			GoodsList,
			Scroll,
			Toast,			
		},
		data() {
			return {
				iid: null,
				topImages: [],
				goodsInfo: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommends: [],
				titleTopY: [],				
			}
		},
		mixins: [ItemListener, BackTopmixin],
		created() {		
			//保存传入的iid
			this.iid = this.$route.params.iid
			//根据iid请求数据
			getDetail(this.iid).then(res => {
				// console.log(res)
				const data = res.result
				//获取顶部轮播图数据
				this.topImages = data.itemInfo.topImages
				//获取商品信息
				this.goodsInfo = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
				//获取店铺信息
				this.shop = new Shop(data.shopInfo)
				//获取商品详细信息
				this.detailInfo = data.detailInfo
				//获取参数信息
				this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
				//获取评论信息
				if(data.rate.cRate > 0) {					
				this.commentInfo = data.rate.list[0]
				}				
			})
			//请求详情页数据
			getRecommend().then(res => {
				this.recommends = res.data.list
			})
		},		
		methods: {			
			imageLoad() {				
				this.$refs.scroll.refresh()
				
				this.titleTopY = []
				this.titleTopY.push(0);
				this.titleTopY.push(this.$refs.DetailParamInfo.$el.offsetTop);
				this.titleTopY.push(this.$refs.DetailComment.$el.offsetTop);
				this.titleTopY.push(this.$refs.recommends.$el.offsetTop);				
				this.titleTopY.push(Number.MAX_VALUE);
			},
			addCart() {
				//获取购物车需要展示的信息
				const product = {}
				product.image = this.topImages[0];
				product.title = this.goodsInfo.title;
				product.realPrice = this.goodsInfo.realPrice;
				product.iid = this.iid		
				//将商品添加到购物车
				this.$store.dispatch('addCart', product).then(res => {
					
					this.$toast.show(res)
				})
				
			},			
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 200)
			},
			contentscroll(position) {
				const y = -position.y
				const x = this.titleTopY
				const z = this.$refs.DetailNavBar.currentIndex
				//对比位置
					// if(y < this.titleTopY[1]) {					
					// 	 this.$refs.DetailNavBar.currentIndex = 0
					// }else if(y > this.titleTopY[1] && y < this.titleTopY[2]) {	
					// 	 this.$refs.DetailNavBar.currentIndex = 1
					// }else if(y > this.titleTopY[2] && y < this.titleTopY[3]) {	
					// 	 this.$refs.DetailNavBar.currentIndex = 2
					// }else if(y > this.titleTopY[3]) {
					// 	 this.$refs.DetailNavBar.currentIndex = 3
					// }
				for(let i = 0; i < x.length-1; i++) {
					// console.log(i)//0,1,2,3
					if(z !== i && (y >= x[i] && y < x[i+1])){
						this.$refs.DetailNavBar.currentIndex = i
					}
				}
				//1.判断BackTop是否显示
				this.ShowBackTop(position)
			},	
		}		
	}
</script>

<style scoped="scoped">
	#detail {
		height: 100vh;
		position: relative;
		z-index: 10;
		background-color: #FFFFFF;		
		overflow: hidden;
		
	}
	.detail-nav {
		position: relative;
		z-index: 10;
		background-color: #FFFFFF;
	}
	.content {
		height: calc(100% - 44px - 49px);
		/* position: relative;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0; */
		/* overflow: hidden; */
	}

</style>
