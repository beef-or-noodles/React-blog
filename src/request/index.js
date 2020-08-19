/**
 * Created by Administrator on 2020/8/17.
 */
import axios from 'axios'
import store from '../store/store'
// 创建实例
var http = axios.create({
    baseURL: process.env.REACT_APP_HTTP_URL,
    timeout: 3000
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = store.getState().userInfo.token
    if(token){
        config['headers']['token'] = token
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.status === 200){
        return response.data.data
    }else{
        return response;
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http