/**
 * Created by Administrator on 2020/8/15.
 */
import {LOAD_DATA} from "../actions/load-actions";
const initState = false
export const loadReducer = function (state=initState, action){
    switch (action.type){
        case LOAD_DATA:{
            return action.payload
        }
        default:
            return state
    }
}