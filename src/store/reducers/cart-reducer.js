/**
 * Created by Administrator on 2020/8/14.
 */
import {ADD_CART} from '../actions/cart-actions'
const initState={
    cart:[{
        product:'82年拉菲',
        quantity:2,
        unitCost:50
    }]
}
export const cartReducer = function(state=initState,action){
    switch (action.type){
        case ADD_CART:{
            return {
                ...state,
                cart: [...state.cart,action.payload]
            }
        }
        default:
            return state
    }
}