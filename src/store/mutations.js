import {
	ADD_COUNTER, 
	ADD_TO_CART
	} from './mutations-types.js'
export default  {
		//mutations唯一的目的就是修改state中的状态
		//mutations中的每个方法尽可能完成的事件比较单一一点	
		[ADD_COUNTER](state, product) {
			product.count++
		},
		[ADD_TO_CART](state, product) {		
			product.checked = true
			state.cartList.push(product)
		}
	}