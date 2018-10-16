<template>
  <div class="RecVideo">
    <h3 class="comIndexTitle"><strong>UI设计</strong><span>共<i>{{numFontVideo}}</i>节课</span><a href="javascript:;">更多</a></h3>
    <div class="fontUicen">
      <div class="fontUiMore">
        <a href="javascript:;">UI设计</a>
        <a href="javascript:;">查看更多</a>
      </div>
      <div class="indexList">
        <ul class="clearfix">
          <li v-for="data in videoSlide" :key='data.id'>
            <span class="comLabel" :class="data.bgColor" v-if="data.label">{{data.label}}</span>
            <span class="comTime" v-if="data.time">{{data.time}}</span>
            <a :href="data.method" class="indexListImg"><img v-bind:src="data.src"/></a>
            <a :href="data.method" class="indexListTitle">{{data.title}}</a>
            <p class="indexListDetail"><span>{{data.label}}</span><span><i>{{data.number}}</i>人已学</span></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Index',
    data () {
      return {
        numFontVideo: 0,
        videoSlide: []
      }
    },
    components: {
    },
    created () {
      var _this = this
      axios.get('/static/json/uiDesign.json')
        .then(function (response) {
          _this.videoSlide = response.data.videoSlide
          _this.numFontVideo = response.data.videoSlide.length
        }).catch(function (error) {
          console.log(error)
        })
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
.fontUicen{
  position: relative;
  overflow: hidden;
  .fontUiMore{
    position: absolute; left: 0; top: 0;
    width: 188px; height: 176px; line-height: 150px;
    background-color: #dddddd; text-align: center;
  }
  .indexList{
    margin-left: 208px;
  }
}
</style>
