/**
 * Created by Administrator on 2020/8/17.
 */
import http from '../index'
export function articleList(params){
    return http.post('/queryArtice',params)
}