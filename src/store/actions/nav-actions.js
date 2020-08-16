/**
 * Created by Administrator on 2020/8/16.
 * 导航选中状态
 */
export const NAV_HEADER = 'NAV_HEADER'
export function navChange(index){
    return {
        type:NAV_HEADER,
        payload:index
    }
}