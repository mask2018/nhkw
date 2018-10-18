<template>
  <div class="Course">
    <h3 class="comIndexTitle">
      <strong>海外教程</strong>
      <span @click="changeBatch()" v-if="newVideoShow" class="comChange"><i></i>换一批</span>
      <a href="javascript:;">更多</a>
    </h3>
    <div class="courseCen">
      <div class="courseMore comPaMore">
        <div class="spare">
          <span class="sp1"></span>
          <span class="sp2"></span>
          <span class="sp3"></span>
          <span class="sp4"></span>
          <span class="sp5"></span>
          <span class="sp6"></span>
        </div>
        <a :href="method" class="comPaConnect">
          <strong>海外教程</strong>
          <span>共有{{numFontVideo}}节课</span>
        </a>
      </div>
      <div class="indexList">
        <ul class="clearfix">
          <li v-for="data,index in videoSlide" v-if="index<showNum" :key='data.id'>
            <span class="comLabel" :class="data.bgColor" v-if="data.label">{{data.label}}</span>
            <span class="comTime" v-if="data.time">{{data.time}}</span>
            <a :href="data.method" class="indexListImg"><img v-bind:src="data.src"/></a>
            <a :href="data.method" class="indexListTitle">{{data.title}}</a>
            <p class="indexListDetail"><span class="fl">{{data.grade}}</span><span class="fr"><i>{{data.number}}</i>人已学</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Course',
    data () {
      return {
        numFontVideo: 0,
        videoSlide: [],
        numCount: 0,
        showNum: 4,
        newVideoShow: true,
        method: 'http://www.aisoubai.com/'
      }
    },
    components: {
    },
    created () {
      var _this = this
      axios.get('/static/json/courseC4D.json')
        .then(function (response) {
          for (let i = 0; i < _this.showNum; i++) {
            _this.$set(_this.videoSlide, i, response.data.videoSlide[i])
          }
          _this.numFontVideo = response.data.videoSlide.length
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
        axios.get('/static/json/courseC4D.json')
          .then(function (res) {
            var num = Math.floor(res.data.videoSlide.length / that.showNum) - 1
            for (var i = 0; i < num; i++) {
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

<style scoped lang="less">
.courseCen{
  position: relative;
  overflow: hidden;
  .courseMore{
    .spare{
      background-color: #fbb03b;
    }
  }
  .indexList{
    margin-left: 208px;
  }
}
</style>
