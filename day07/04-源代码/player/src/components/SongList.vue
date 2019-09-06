<template>
  <div class="result-wrapper">
    <div class="song"
         v-for="(item, index) in songList"
         :key="index">
      <div class="name">
        <span class="iconfont icon-play"
              @click="playMusic(item.id)"></span>
        {{item.name}}
        <span class="iconfont icon-editmedia"
              v-if="item.mvid"></span>
      </div>
      <div class="singer">{{item.artists | formatSinger}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration | formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      songList: []
    }
  },

  // 侦听器
  watch: {
    [`$route.params.keywords`] () {
      // console.log(v,v2);
      this.searchMusic()
    }
  },
  methods: {
    // 搜索歌曲
    searchMusic () {
      this.$axios
        .get(`/search?keywords=${this.$route.params.keywords}`)
        .then(backData => {
          // console.log(backData)
          this.songList = backData.data.result.songs;
        });
    },
    playMusic (id) {
      this.$router.push(`/player/${id}`)
    }
  },
  created () {
    this.searchMusic()
  },
  // 过滤器
  filters: {
    formatSinger (value) {
      let temStr = "";
      for (let i = 0; i < value.length; i++) {
        temStr += value[i].name;
        if (i < value.length - 1) {
          temStr += "/";
        }
      }
      return temStr;
    },
    // 处理时间
    formatTime (time) {
      const totalSec = Math.floor(time / 1000);
      const minute = Math.floor(totalSec / 60);
      let sec = totalSec % 60;
      sec = sec < 10 ? "0" + sec : sec;
      return minute + ":" + sec;
    }
  }
}
</script>

<style>
</style>