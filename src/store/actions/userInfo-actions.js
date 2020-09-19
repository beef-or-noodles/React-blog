/**
 * Created by Administrator on 2020/8/17.
 */
export const USER_INFO = 'USER_INFO'
export const SET_WD = 'SET_WD'
export const DELETE_WD = 'DELETE_WD'
export const EMPYT_WD = 'EMPYT_WD'
export const LOGIN = "LOGIN"
export function setUserInfo (params){
    return {
        type:USER_INFO,
        payload:{...params}
    }
}
/*添加搜索历史*/
export function setWd(wd){
    return {
        type:SET_WD,
        payload: wd
    }
}
/*删除搜索历史*/
export function deleteWd(wd) {
    return {
        type:DELETE_WD,
        payload:wd
    }
}
/*清空*/
export function empytWd(){
    return {
        type:EMPYT_WD,
        payload:[]
    }
}
/* 弹出登录 */
export function setLogin(type){
    return {
        type:LOGIN,
        payload: type
    }
}