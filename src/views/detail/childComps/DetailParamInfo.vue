<template>
	<div class="params-wrap" v-if="Object.keys(paramInfo).length !== 0">
		
		<table v-for="(table0, index) in paramInfo.sizes" :key='index'>
			<tr v-for="(tr, index) in table0" :key='index'>
				<td class="rule-list-item" v-for="(td, index) in tr" :key='index'>{{td}}</td>
			</tr>			
		</table>
		
		<table>
			<tr v-for="(info, index) in paramInfo.infos" :key='index' class="info-list-wrap">
				<td class="info-list-tit">{{info.key}} ：</td>
				<td>{{info.value}}</td>
			</tr>	
		</table>
		
		<div v-if="paramInfo.image.length > 0">
			<img :src="paramInfo.image">
		</div>
		
	</div>
</template>

<script>
	export default {
		props:{
			paramInfo: {
				type:Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style scoped>
	.params-wrap {
		border-top: 4px solid #ececec;
		border-bottom: 4px solid #ececec;
	}
	.rule-list-item {
		font-size: 12px;
		width: 20%;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
	}
	.info-list-wrap {
		font-size: 12px;;
		border-bottom: 1px solid #ececec;
		padding: 10px 4px;
		line-height: 20px;		
	}
	.info-list-tit {
		width: 18%;
		text-align: center;
	}
</style>
