<template>
  <div id="player">
    <h2 class="title">黑云音乐</h2>
    <search></search>
    <div class="tab-wrapper">
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 局部注册Search
import Search from './components/Search'
export default {
  components: {
    Search
  }
}
</script>

<style>
/* 引入样式 */
@import url("./assets/css/index.css");
@import url("./assets/css/iconfont.css");
</style>