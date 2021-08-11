import {
	ADD_COUNTER, 
	ADD_TO_CART
	} from './mutations-types.js'
	
export default {
		addCart(context, product) {
			return new Promise((resolve, reject) => {
				//context上下文
				let oldproduct = context.state.cartList.find(item => item.iid === product.iid)
				
				if(oldproduct) {
					context.commit(ADD_COUNTER, oldproduct)
					resolve('当前商品数量+1')
				}else {
					product.count = 1
					//新添加的商品
					context.commit(ADD_TO_CART, product)
					resolve('添加了新的商品')
				}
			})
		}
	}