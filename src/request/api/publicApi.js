/**
 * Created by Administrator on 2020/8/17.
 */
import http from '../index'
export function articleList(params){
    return http.post('/queryArtice',params)
}

export function columnList(params){
    return http.post('/queryColumn',params)
}

// 点赞
export function articLike(id){
    return http.post('/articeLike',{id:id})
}
/*统计数据*/
export function queryChart(){
    return http.post('/queryChart')
}
/*查询所有标签*/
export function queryAllTag(){
    return http.post('/queryAllTag')
}
/*查询推荐文章/queryRecommend*/
export function queryRecommend(){
    return http.post('/queryRecommend')
}