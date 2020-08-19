/**
 * Created by Administrator on 2020/8/16.
 * 导航选中状态
 */
export const NAV_HEADER = 'NAV_HEADER'
export const CHILD_INDEX = 'CHILD_INDEX'
export const CHILD_LIST = 'CHILD_LIST'
export function navChange(index){
    return {
        type:NAV_HEADER,
        payload:index
    }
}
export function putChildIndex(index){
    return {
        type:CHILD_INDEX,
        payload:index
    }
}
export function putChildList(list){
    return {
        type:CHILD_LIST,
        payload:list
    }
}