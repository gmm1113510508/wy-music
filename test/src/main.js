// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './axios'
import store from './store'
Vue.prototype.$axios=Axios
//引入重置文件
//vue 中一切万物皆模块  css  less  MP3  jpg
import './common/style/resset.css'
Vue.config.productionTip = false
// 引入ui框架
/*import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)*/

//图片懒加载
import LazyLoad from 'vue-lazyload'
Vue.use(LazyLoad,{
  loading: require('assets/logo.png'),//在js 中通过require 加载图片
  attempt: 1
})
// 图片的使用  
// static  需要用根路径 /static/xxx/xxx.png
// 在asset 需要引入 或者直接写相对路径   会将图片编译成base64
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
