import {debounce} from '@/common/utils.js'
	export const ItemListener = {
		data() {
			return {
				homeItemListener: null,
				newrefresh: null
			}
		},	
		mounted() {			
		//1.监听item图片加载完成
		this.newrefresh = debounce(this.$refs.scroll.refresh, 500)		
			//对监听事件进行保存
			this.homeItemListener = () => {	
				this.newrefresh()
		}
			this.$bus.$on('itemImageLoad', this.homeItemListener)					
		}
	};

import BackTop from '@/components/content/backtop/backTop.vue'

export const BackTopmixin = {
	data() {
		return {
			isShowBackTop: false,
		}
	},
	components: {
		BackTop
	},
	methods: {
		ShowBackTop(position) {			
			this.isShowBackTop = position.y < -1000			
		},
		backClick() {
			this.$refs.scroll.scrollTo(0, 0, 300)
		}
	}
}