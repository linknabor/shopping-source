// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*自己添加的开始  引入mint-ui 和 axios*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import Qs from 'qs'
import axios from 'axios';
import VueAxios from 'vue-axios';
import './assets/js/rem.js'
import './assets/inconfont/iconfont.css'
import './assets/css/base.css'
import './assets/css/common.css'
import cookie from 'js-cookie'
import common from './common.js'

Vue.prototype.common = common;

import receiveData from './receiveData.js'
Vue.prototype.receiveData = receiveData;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../src/assets/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)
Vue.use(MintUI)

//创建axios 实例

var axiosInstance = axios.create({
    transformRequest: [function (data) {
        //data = Qs.stringify(data);
        data = JSON.stringify(data);
        return data;
    }],
    headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        //'Content-Type':'application/json;charset=utf-8',
        'Content-Type':"application/json",

        //'Accept': '*/*',
        'Accept': 'application/json',

    },
    // baseURL: 'https://www.e-shequ.com/guangming/wechat/hexie/wechat',
    baseURL: 'https://test.e-shequ.com/wechat/hexie/wechat',
    //baseURL:'http://192.168.0.233/',
    withCredentials:true,
    transformResponse: [function (data) {//数据转换
      return data;
    }],
});
//创建axios拦截器 给请求头加cookie

axiosInstance.interceptors.request.use(
    config => {
        if( !cookie.get('session')){//没有seesion 判断  暂时跳过直接在首页就存seesion
          
        }else{//在请求头加 session
          config.headers.Cookie =`${ cookie.get('Cookie') }`
        }

        // config.headers.Authorization = // token
        //     `${ Cookies.get('yesmywine_mall$token_type') } ${ Cookies.get('yesmywine_mall$token') }`
         // 不添加 return config 不会执行http请求
         return config
    },
    err => {
        return Promise.reject(err)
    }
)

Vue.use(VueAxios, axiosInstance);


Vue.config.productionTip = false
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
