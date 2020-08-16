/**
 * Created by Administrator on 2020/8/16.
 */
import {NAV_HEADER} from "../actions/nav-actions";
const initState = {
      headerNav:0
}
export function navReducer(state=initState,action){
    switch (action.type) {
        case NAV_HEADER:{
            return {
                headerNav: action.payload
            }
        }
        default:
            return state
    }
}