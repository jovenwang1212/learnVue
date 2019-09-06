import Vue from 'vue'
import App from './App.vue'
// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
// axios设置
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://autumnfish.cn'

// 导入组件
import Slider from './components/slider.vue'
import SongList from './components/SongList.vue'
import Player from './components/Player.vue'

// 路由规则
const routes = [{
  path: '/',
  redirect: '/slider'
}, {
  path: '/slider',
  component: Slider
}, {
  path: '/search/:keywords',
  component: SongList
}, {
  path: '/player/:id',
  component: Player
}]
const router = new VueRouter({
  routes
})
// 实例化路由对象

// router传给vue根实例
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')