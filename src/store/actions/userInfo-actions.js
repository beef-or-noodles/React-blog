/**
 * Created by Administrator on 2020/8/17.
 */
export const USER_INFO = 'USER_INFO'
export function setUserInfo (params){
    return {
        type:USER_INFO,
        payload:{...params}
    }
}