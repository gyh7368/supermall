import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'


import toast from '@/components/common/toast/index.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

FastClick.attach(document.body)

Vue.use(LazyLoad, {
	loading: require('./assets/img/common/placeholder.png')
	})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
