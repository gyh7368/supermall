<template>
	<div class="recommend">
		<div v-for="(item, index) in recommends" :key='index' class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" >
				<div>
					{{item.title}}
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		font-size: 12px;
		text-align: center;
		padding: 15px 0 25px;		
		border-bottom: #EEEEEE 12px solid;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 68px;
		padding-bottom: 10px;
	}
</style>
