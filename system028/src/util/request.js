import axois from 'axios'
import store from '../store'

let server = axois.create({ //创建一个实例
    baseURL:"http://118.24.25.7:5000",//请求的跟路径
    timeout:6000,
    // headers:{
    //     Token:`base64 khaskdhkas9asda0s9d`
    // }

})


//请求拦截器 ,再发请求之前 想要做一些事情 

// 添加请求拦截器
server.interceptors.request.use(function (config) {
    
    if (store.state.token) {
        config.headers['X-Token'] = 'Bearer ' + store.state.count.token // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器,响应成功 
server.interceptors.response.use(function (response) {
    // 对响应数据做点什么，后台一般会又一些特定的状态码 50001（没有权限） 50002（token过期）


    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default server