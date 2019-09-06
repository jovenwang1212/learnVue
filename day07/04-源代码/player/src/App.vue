<template>
  <div id="player">
    <SearchBar></SearchBar>
    <!-- 对应的内容区域 -->
    <div class="tab-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/searchBar.vue'
export default {
  components: {
    SearchBar
  }

}
</script>

<style>
@import url("./assets/css/index.css");
@import url("./assets/css/iconfont.css");
</style>