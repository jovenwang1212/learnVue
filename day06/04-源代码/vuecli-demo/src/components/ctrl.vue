<template>
  <div>
    <img src="../assets/images/ctrl.jpg"
         alt="">
    <rap></rap>
  </div>
</template>

<script>
import Rap from './rap.vue'
export default {
  components: {
    rap:Rap
  }
}
</script>

<style>
img {
  width: 200px;
  height: 200px;
}
</style>