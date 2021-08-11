<template>
	<div v-if="Object.keys(commentInfo).length > 0" class="commentInfo">
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="header-more">更多
			<i class="arrow-right">
				<!-- <img src="@/assets/img/common/arrow-left.svg" -->></i>
			</div>
		</div>
		<div class="info-user">
			<img :src="commentInfo.user.avatar" >
			<span>{{commentInfo.user.uname}}</span>
		</div>
		<div class="info-detail">
			<p>{{commentInfo.content}}</p>
			<div class="info-other">
				<!-- 只要是服务器返回的时间都会以Unix时间元年为起点,返回对应的时间戳(1537535915秒) 
					如何将时间戳转成时间格式字符串(常用.重要)?
					1.将时间戳(1537535915)转成Date对象
						const date = new Date(1537535915*1000毫秒)
					2.将date进行格式化,转成对应字符串
						date.getFullYear() + date.getMonth() + 1
						date -> 格式化字符串   太常用
						java中:
						fmt.format(date, 'yyyy-MM-dd HH:mm:ss')
					-->
				<span class="date">{{commentInfo.created | showDate}}</span>
				<span>{{commentInfo.style}}</span>
			</div>
			<div class="info-imgs">
				<img :src="item" v-for="(item,index) in commentInfo.images" :key='index'>
			</div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from '@/common/utils.js'
	
	export default {
		props:{
			commentInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			showDate(value) {
				//1.将时间戳转成Date对象
				const date = new Date(value * 1000)
				//2.将Date进行格式化
				return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
			}
		}
	}
</script>

<style scoped="scoped">
	div {
		/* height: 300px; */
		/* background-color: #GGGGGG; */
	}
</style>
