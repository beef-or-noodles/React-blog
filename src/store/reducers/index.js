/**
 * Created by Administrator on 2020/8/14.
 */
import {combineReducers} from 'redux'
import {loadReducer} from "./load-reducer"
import {navReducer} from "./nav-reducer";
import {userReducer} from './userInfo-reducer'

const allReducer = {
    load:loadReducer,
    navIndex:navReducer,
    userInfo:userReducer
}
const rootReducer = combineReducers(allReducer)
export default rootReducer