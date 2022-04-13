import axios from 'axios';
import nProgress from 'nprogress';
import "nprogress/nprogress.css"

const instance = axios.create({
  baseURL: 'https://biyingjs.com:83',
  timeout: 3000,
//   headers: {'X-Custom-Header': 'foobar'}
});
 let get = function (url, params) {
     return instance.get(url,{params})
 }

 let post = function (url, params) {
     return instance.post(url,{params})
 }

 // 添加请求拦截器
 instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    nProgress.start()
    return config;
  }, function (error) {
    // 对请求错误做些什么
    nProgress.done()
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    nProgress.done()

    return response;
  }, function (error) {
    // 对响应错误做点什么
    nProgress.done()
    return Promise.reject(error);
  });