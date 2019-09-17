<template>
  <div class="result-wrapper">
    <div class="song"
         v-for="(item, index) in songs"
         :key="index">
      <div class="name">
        <span class="iconfont icon-play"></span>
        <span @click="toComment(item.id)">{{item.name}}</span>
        <span class="iconfont icon-editmedia"
              v-show="item.mvid"></span>
      </div>
      <div class="singer">{{item.artists|formatSinger}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration|formatTime}}</div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'SongList',
  data () {
    return {
      // 搜索结果数组
      songs: []
    }
  },

  methods: {
    querySong () {
      // console.log(this.$route.params.keywords)
      this.$axios.get(`/search?keywords=${this.$route.params.keywords}`)
        .then(res => {
          // console.log(res)
          this.songs = res.data.result.songs
        })
    },
    toComment (id) {
      this.$router.push(`/comment/${id}`)
    }
  },
  created () {

    this.querySong()
  },
  watch: {
    '$route.params.keywords' () {
      this.querySong()
    }
  },
  filters: {
    // 毫秒转到04:03
    formatTime (time) {
      //数据处理
      let totalSec = time / 1000
      let min = Math.floor(totalSec / 60)
      let sec = Math.floor(totalSec % 60)
      return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
    },
    // 歌手处理
    formatSinger (artists) {
      let arr = []
      artists.forEach(item => {
        arr.push(item.name)
      })

      return arr.join('/')

    }
  }

}
</script>

<style>
</style>