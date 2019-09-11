import Vue from 'vue'
import App from './App.vue'
// 引入vue-router
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 引入组件
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'
// 定义路由规则
const routes = [{
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
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