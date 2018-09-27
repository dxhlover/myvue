import axios from 'axios'
import $store from '@/store/index'
import { Toast } from 'mint-ui';
// baseUrl引入：
import { baseUrl } from '@/config/env'

// create an axios instance
let baseConfig = {
  baseURL: baseUrl, // api的base_url
  withCredentials: true,
  timeout: 10000, // request timeout
  headers: {
    'Content-Type':'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
}



const service = axios.create(baseConfig)

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  if($store.state.user.token) {
    config.headers.token = `${$store.state.user.token}`;
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(response => {
    // 用户登录过期或超时 调取原生方法 原生关闭webview 并跳转到登录
     if(response.data.code == '1401') {
        let ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            window.webkit.messageHandlers.jsCall.postMessage({jsAction:'backToLogin',jsData:{}});
        }else if (/android/.test(ua)) {
            window.jsAction.backToLogin();
        }
     }
     return response;
},error => {
    console.log('err' + error) // for debug
    Toast(error);
    return Promise.reject(error)
})

export default service
