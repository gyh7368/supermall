import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const ShopCart = () => import('@/views/shopcart/ShopCart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const Detail = () => import('@/views/detail/Detail.vue')
//import Home from '@/views/home/Home'
// import Category from '@/views/category/Category'
// import ShopCart from '@/views/shopcart/ShopCart'
// import Profile from '@/views/profile/Profile'

const routes = [
	{
		path: '/',
		redirect:'/home'
	},
	{
		path : '/home',
		component: Home
	},{
		path : '/category',
		component: Category
	},{
		path : '/shopcart',
		component: ShopCart
	},{
		path : '/profile',
		component: Profile
	},{
		path : '/detail/:iid',
		component: Detail
	}	
]


const router = new VueRouter({
	routes,
})




export default router
