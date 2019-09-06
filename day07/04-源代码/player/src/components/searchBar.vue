<template>
  <div>
    <h2 class="title">黑云音乐</h2>
    <div class="search">
      <input type="text"
             v-model="keywords"
             @keyup.enter="queryMusic" />
      <button @click="queryMusic" >
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- tab栏 -->
      <div class="tab-bar">
        <a class="bar-item active">
          搜索结果
        </a>
        <a class="bar-item">
          歌曲播放
        </a>
        <a class="bar-item">
          mv
        </a>
        <a class="bar-item">
          歌曲评论
        </a>
        <a class="bar-item">
          推荐歌曲
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: '海阔天空'
    }
  },
  methods: {
    queryMusic () {
      this.keywords = this.keywords.trim()
      if (!this.keywords) {
        this.$message('请输入正确的歌名');
        return
      }
      this.$router.push(`/search/${this.keywords}`).catch(() => { })
    }
  },

}
</script>

<style>
</style>