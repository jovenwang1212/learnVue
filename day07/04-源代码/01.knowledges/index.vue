<template>
  <div>
    <h2 v-for="item in arr"  ></h2>
    <img src="./" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["1,2,3,4,5,"]
    };
  }
};
</script>

<style>
</style>
