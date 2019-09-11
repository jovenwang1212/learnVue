<template>
  <div class="search">
    <input type="text"
           v-model="keywords"
           @keyup.enter="toSongList" />
    <button @click="toSongList">
      <span class="iconfont icon-search"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      // 获取用户输入
      keywords: '岁月神偷'
    }
  },
  methods: {
    // 显示搜索结果列表
    toSongList () {
      this.keywords = this.keywords.trim()
      if (!this.keywords) {
        this.$message('哥们写点啥呗');
        return
      }
      // 非空判断
      this.$router.push(`/search/${this.keywords}`).catch(function () {

      })
    }
  },
}
</script>

<style>
</style>