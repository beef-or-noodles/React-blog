/**
 * Created by Administrator on 2020/8/14.
 */
import {combineReducers} from 'redux'
import {cartReducer} from './cart-reducer'
import {loadReducer} from "./load-reducer"

const allReducer = {
    shoppingCart:cartReducer,
    load:loadReducer
}
const rootReducer = combineReducers(allReducer)
export default rootReducer