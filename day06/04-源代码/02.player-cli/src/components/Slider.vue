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
// 引入axios
import axios from 'axios'

export default {
  name: 'Slider',
  data () {
    return {
      // 图片数组
      banners: []
    }
  },
  created () {

    axios.get('https://autumnfish.cn/banner')
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