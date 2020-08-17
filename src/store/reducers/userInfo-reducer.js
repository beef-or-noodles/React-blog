/**
 * Created by Administrator on 2020/8/17.
 */
import {USER_INFO} from "../actions/userInfo-actions";
const initUserInfo = {
    token:'xxxxxxxxx'
}
export function userReducer(state=initUserInfo,action){
    switch (action.type) {
        case USER_INFO:{
            return {
                ...state,...action.payload
            }
        }
        default:
            return state
    }

}