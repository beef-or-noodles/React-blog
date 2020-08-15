/**
 * Created by Administrator on 2020/8/15.
 * 到底加载
 */
export const LOAD_DATA = "LOAD_DATA"
export function loadData(type){
    return {
        type:LOAD_DATA,
        payload: type
    }
}