// 相当于是let Vue = require('vue')
import Vue from 'vue'
// 组件也可以引入
// 相当于是let App = require('./App.vue')
import App from './App.vue'

// main.js引入css
import './assets/css/base.css'

import Ctrl from './components/ctrl.vue'
// 注册全局组件
Vue.component('ctrl', Ctrl)

// 生产信息提示
Vue.config.productionTip = false

// 创建根实例
new Vue({
  // el的值和public/index.html的id关联起来
  el: '#app',
  // 实例化App这个组件
  render: h => h(App)
})
// .$mount('#app')相当于el:'#app'