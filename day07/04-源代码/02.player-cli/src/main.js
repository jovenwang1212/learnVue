import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from 'axios'


Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://autumnfish.cn'



// 引入组件
import Slider from './components/Slider.vue'
import SongList from './components/SongList.vue'
import Comment from './components/Comment.vue'
// 定义路由规则
const routes = [{
    path: '/',
    redirect: '/slider'
  }, {
    path: '/slider',
    component: Slider
  },
  {
    path: '/search/:keywords',
    component: SongList
  }, {
    path: '/comment/:id',
    component: Comment
  }
]

// 实例化VueRouter

const router = new VueRouter({
  routes
})


Vue.config.productionTip = false

// 创建根实例，传递路由实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')