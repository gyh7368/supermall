<template>
	<div id="detailInfo" v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-desc">
			<div class="start"></div>
			<div class="desc">{{detailInfo.desc}}</div>
			<div class="end"></div>
		</div>
		<div class="info-key">{{detailInfo.detailImage[0].key}}</div>
		<div class="info-list">
			<img v-for="(item, index) in detailInfo.detailImage[0].list" :key='index' :src="item" @load="imgLoad">
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			detailInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				counter: 0,
				imageLength: 0
			}
		},
		methods:{
			imgLoad() {
				if(++this.counter === this.imageLength) {
					this.$emit('imageLoad')
				}
			}
		},
		watch: {
			detailInfo() {
				this.imageLength = this.detailInfo.detailImage[0].list.length
			}
		}
	}
</script>

<style scoped>
	.info-list {
		width: 100vw;
	}
	.info-list img {
		width: 100%;
	}
	.desc {
		font-size: 12px;
		font-family: "blackadder itc";
		line-height: 25px;
		text-indent: 2em;
	}
	.start {
		margin: 12px 0 17px;
		width: 78px;
		height: 2px;
		background-color: #608B4E;		
	}
	.end {
		position: relative;
		right: 0;
		left: 77%;
		margin: 12px 0;
		width: 85px;
		height: 1.5px;
		background-color: #608B4E;
	}
</style>
