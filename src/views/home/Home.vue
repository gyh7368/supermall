<template>
	<div id="home">		
		<NavBar class="home-nav"><div slot='center'>购物街</div></NavBar>	
		<TabControl class="tabControl"
								ref="tabControl1"
								@tabClick='tabClick'
								:titles='["流行","新款","精选"]'
								v-show="isTabFixed"></TabControl>			
		<Scroll class="content" 
						ref="scroll" 
						:probeType="3"
						@scroll='contentScroll'
						:pullUpLoad='true'
						@pullingUp='loadMore'
						>			
			<HomeSwper :banners='banners' 
			@swiperImageLoad='swiperImageLoad'></HomeSwper>
			<HomeRecommendView 
			:recommends='recommends'></HomeRecommendView>
			<FeatureView></FeatureView>
			<TabControl ref="tabControl2"
									@tabClick='tabClick'
									:titles='["流行","新款","精选"]'></TabControl>
			<GoodsList :goods='goods[currentType].list'	
			></GoodsList>
		</Scroll>
		
		<BackTop @click.native='backClick' v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
		import Scroll from '@/components/common/scroll/Scroll.vue'	
		import TabControl from '@/components/content/tabControl/TabControl.vue'
		import GoodsList from '@/components/content/goods/GoodList.vue'
		// import BackTop from '@/components/content/backtop/backTop.vue'
		
		
		import HomeSwper from '@/views/home/childComps/HomeSwper.vue'
		import HomeRecommendView from '@/views/home/childComps/HomeRecommendView.vue'
		import FeatureView from '@/views/home/childComps/FeatureView.vue'
		
		
		import {getHomeMultidata, getHomeGoods} from '@/network/home.js'
		import {ItemListener, BackTopmixin} from '@/common/mixin.js'
		
	
	export default{
		name:'Home',
		components:{
			NavBar,
			Scroll,
			TabControl,
			GoodsList,
			// BackTop,
			// BackTopmixin,
			HomeSwper,
			HomeRecommendView,
			FeatureView,
		},
		data() {
			return{
				banners:[],
				recommends:[],
				goods:{
					'pop': {page: 0, list: []},
					'new': {page: 0, list: []},
					'sell': {page: 0, list: []},
				},
				currentType: 'pop',
				isShowBackTop: false,
				taboffsetTop: 0,
				isTabFixed: false,
				saveY: 0,
			}
		},
		mixins: [ItemListener, BackTopmixin],
		created() {
			//请求多个数据
			this.getHomeMultidata()
			//请求商品数据
			this.getHomeGoods('pop')			
			this.getHomeGoods('new')			
			this.getHomeGoods('sell')			
		},
		mounted() {			
		},		
		activated() {
			//再次回到页面时,重新刷新一次高度
			this.$refs.scroll.refresh()
			this.$refs.scroll.scrollTo(0,this.saveY,0)
		},
		deactivated() {
			//保存离开时位置
			this.saveY = this.$refs.scroll.getScrollY()
			//取消全局事件发送
			this.$bus.$off('itemImageLoad', this.homeItemListener)
		},
		destroyed() {//组件被销毁调用
		},
		methods:{			
		//事件监听相关方法
			tabClick(index) {
				switch(index) {
					case 0:
						this.currentType = 'pop'
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl1.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
			},
			// backClick() {
			// 	this.$refs.scroll.scrollTo(0, 0)
			// },
			contentScroll(position) {
				//1.判断BackTop是否显示
				// this.isShowBackTop = position.y < -1000
				this.ShowBackTop(position)				
				//2.决定tabControl是否吸顶(position: fixed)
				this.isTabFixed = position.y < - this.taboffsetTop
			},			
			loadMore() {
				this.getHomeGoods(this.currentType)
			},
			scrollLoad() {
				this.$refs.scroll.scroll.refresh()
			},
			swiperImageLoad() {
				//2.获取tabControl的offsetTop
				//所有组件都有一个属性$el,用于获取组件中的元素
				this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop
			},
			
		//网络请求相关方法
			getHomeMultidata() {
					//请求多个数据
				getHomeMultidata().then(res => {
						// console.log(res)
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},			
			getHomeGoods(type) {
					//请求商品数据
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res => {					
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					//完成上拉加载更多				
					this.$refs.scroll.finishPullUp()							
				})				
			},
		
		},
}
</script>

<style scoped>
	#home {
		/* padding-top: 44px;	 */
		/* vh视口高度 */
		height: 100vh;
		position: relative;
	}
	.home-nav{
		background-color:var(--color-tint);
		color: #FFFFFF;		
		
		/* 
		在原生浏览器滚动时,为了使导航条不脱标
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 9; */		
		height: 44px;
	}
	.content {
		/* height: calc(100% - 49px); */
		overflow: hidden;
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
	}
	.tabControl {
		position: relative;
		z-index: 9;
	}
	
</style>
