<template>
  <el-carousel>
    <el-carousel-item v-for="(item,index) in banners"
                      :key="index">
      <img :src="item.imageUrl"
           alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: 'Slider',
  data () {
    return {
      // 图片数组
      banners: []
    }
  },
  created () {

    this.$axios.get('/banner')
      .then(res => {
        /* eslint-disable */
        // console.log(res)
        this.banners = res.data.banners
      })
  }

}
</script>

<style>
</style>