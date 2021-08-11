import Toast from '@/components/common/toast/Toast.vue'
import Vue from 'vue'

const obj = {}

obj.install = function(vue) {
	//创建构造器
	const toastConturstor = vue.extend(Toast)
	//创建组件对象
	const toast = new toastConturstor()
	//挂载到div
	toast.$mount(document.createElement('div'))
	//将div添加至body
	document.body.appendChild(toast.$el)
	//将组件添加到原型
	// Vue.prototype.$toast = toast
	Vue.prototype.$toast = toast
}

export default obj