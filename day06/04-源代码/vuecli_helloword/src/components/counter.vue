<template>
  <div>
    <h2>你点了{{num}}次</h2>
    <button @click="num++">+</button>
    <!-- 没有注册不能使用 -->
    <!-- <myRap></myRap> -->
  </div>
</template>

<script>
export default {
  // name: 'myCounter12',
  data () {
    return {
      num: 10
    }
  }
}
</script>

<style>
</style>