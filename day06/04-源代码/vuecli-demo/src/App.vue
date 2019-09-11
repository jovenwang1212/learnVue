<template>
  <div>
    <h2>{{message}}</h2>
    <input type="text"
           v-model="message">
    <button @click="sayHello">点我呀</button>
    <img src="./assets/logo.png"
         alt="">
    <ctrl />
    <!-- <rap /> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '这是一个寂寞的天'
    }
  },
  methods: {
    sayHello () {
      alert('Hello')
    }
  },
}
</script>

<style>
/* 直接使用css语法 */
/* @import url("./assets/css/base.css"); */
</style>