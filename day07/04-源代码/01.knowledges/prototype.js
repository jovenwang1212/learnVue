function Vue() {

}
Vue.prototype.$router = {
  push() {
    console.log('push 方法')
  }
}

const app = new Vue()
// Vue实例上访问属性，如果找不到的话，会去prototype上去找
app.$router.push()