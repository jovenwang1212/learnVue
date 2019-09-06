// 相当于const Vue = require('vue')
import Vue from 'vue'
// 相当于 const App  = require('./App.vue')
// 引入组件
import App from './App.vue'

// 引入css
import './assets/base.css'

// 引入counter
import Counter from './components/counter.vue'

// 注册组件
Vue.component('counter', Counter)

// 环境信息的提示
Vue.config.productionTip = false

// 实例化Vue
new Vue({
  // el的选择器关联到index.html的dom
  el: '#ppp',
  // 把App组件渲染在根实例里面
  // 页面渲染的内容就是App这个主组件
  render: h => h(App),
})
//.$mount('#app') 