/**
 * Created by Administrator on 2020/8/16.
 */
import {NAV_HEADER,CHILD_INDEX,CHILD_LIST} from "../actions/nav-actions";
const initState = {
      headerNav:0,
      childIndex:0,
      childList:[]
}
export function navReducer(state=initState,action){
    switch (action.type) {
        case NAV_HEADER:{
            return {
                ...state,
                headerNav: action.payload
            }
        }
        case CHILD_INDEX:{
            return {
                ...state,
                childIndex:action.payload
            }
        }
        case CHILD_LIST:{
            return {
                ...state,
                childList:[...action.payload]
            }
        }
        default:
            return state
    }
}