<template>
  <div class="NewVideo">
    <h3 class="comIndexTitle">
      <strong>最新视频</strong>
      <span @click="changeBatch()" v-if="newVideoShow" class="comChange"><i></i>换一批</span>
      <a href="javascript:;">更多</a>
    </h3>
    <div class="indexList newVideo">
      <ul class="clearfix">
        <li v-for="(data,index) in videoSlide" :key='data.id' v-if="index<showNum">
          <span class="comLabel" :class="data.bgColor" v-if="data.label">{{data.label}}</span>
          <span class="comTime" v-if="data.time">{{data.time}}</span>
          <a :href="data.method" class="indexListImg"><img v-bind:src="data.src"/></a>
          <a :href="data.method" class="indexListTitle">{{data.title}}</a>
          <p class="indexListDetail clearfix"><span class="fl">{{data.grade}}</span><span class="fr"><i>{{data.number}}</i>人已学</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewVideo',
  data () {
    return {
      videoSlide: [],
      numCount: 0,
      showNum: 5,
      newVideoShow: true,
      method: 'http://www.aisoubai.com/'
    }
  },
  components: {
  },
  created () {
    var _this = this
    axios.get('/static/json/newVideo.json')
      .then(function (response) {
        for (let i = 0; i < _this.showNum; i++) {
          _this.$set(_this.videoSlide, i, response.data.videoSlide[i])
        }
      }).catch(function (error) {
        console.log(error)
      })
  },
  mounted () {
  },
  methods: {
    changeBatch () {
      this.numCount++
      var that = this
      axios.get('/static/json/newVideo.json')
        .then(function (res) {
          var num = Math.floor(res.data.videoSlide.length / that.showNum) - 1
          for (var i = 0; i < res.data.videoSlide.length; i++) {
            that.$set(that.videoSlide, i, res.data.videoSlide[i + that.showNum * that.numCount])
          }
          if (that.numCount === num) {
            that.newVideoShow = false
          }
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
</style>
