/**
 * Created by Administrator on 2020/8/14.
 */
import {combineReducers} from 'redux'
import {cartReducer} from './cart-reducer'
import {productsReducer} from './products-reducer'
const allReducer = {
    products:productsReducer,
    shoppingCart:cartReducer
}
const rootReducer = combineReducers(allReducer)
export default rootReducer