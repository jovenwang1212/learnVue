<template>
  <div class="wrapper">
    <h2>{{message}}</h2>
    <button @click="sayHello">点我呀</button>
    <br>
    <input type="text"
           v-model="message">
    <!-- <img src="./assets/girl.png"
         alt=""> -->
    <!-- 组件名当标签使用 -->
    <counter></counter>
    <myRap></myRap>
  </div>
</template>

<script>
// 引入组件
import Rap from './components/rap.vue'
export default {
  data () {
    return {
      message: '这是一个寂寞的天'
    }
  },
  created () {
    // console.log(this.message)
    // alert(this.message)
  },
  methods: {
    sayHello () {
      alert('ok')
    }
  },
  components: {
    //注册组件
    // Rap
    myRap: Rap
  }

}
</script>

<style>
/* 样式 */
/* .wrapper {
  background-color: #666;
} */
/* 通过css语法直接引入外部的css */
/* @import url("./assets/base.css"); */
</style>
