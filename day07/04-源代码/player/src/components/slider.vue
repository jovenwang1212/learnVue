<template>
  <div>
    <el-carousel :loop="true">
      <el-carousel-item v-for="(item,key) in banners"
                        :key="key">
        <img :src="item.imageUrl"
             alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  },

}
</script>

<style>
</style>