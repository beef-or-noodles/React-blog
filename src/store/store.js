/**
 * Created by Administrator on 2020/8/14.
 */
import {createStore} from 'redux'
import rootReducer from './reducers/index'
let store = createStore(rootReducer)
export default store