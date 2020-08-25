/**
 * Created by Administrator on 2020/8/17.
 */
import {USER_INFO,SET_WD,DELETE_WD,EMPYT_WD} from "../actions/userInfo-actions";
const initUserInfo = {
    token:1,
    wd:[]
}
export function userReducer(state=initUserInfo,action){
    switch (action.type) {
        case USER_INFO:{
            return {
                ...state,...action.payload
            }
        }
        case SET_WD:{
            let list = state.wd
            let value = action.payload
            if(!list.includes(value)){
                list.push(value)
            }
            return {
                ...state,
                wd:[...list]
            }
        }
        case DELETE_WD:{
            let list = [...state.wd]
            let index = list.findIndex((val)=>val===action.payload)
            list.splice(index,1)
            return {
                ...state,
                wd:[...list]
            }
        }
        case EMPYT_WD:{
            return {
                ...state,
                wd:action.payload
            }
        }
        default:
            return state
    }

}