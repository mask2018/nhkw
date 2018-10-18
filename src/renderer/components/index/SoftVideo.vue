<template>
  <div class="SoftVideo">
    <h3 class="comIndexTitle">
      <strong>软件入门</strong>
      <span>共<i class="yfColor">{{numFontVideo}}</i>软件教程</span>
      <a href="javascript:;">更多</a>
    </h3>
    <div class="indexList">
      <ul class="clearfix">
        <li v-for="data,index in videoSlide" v-if="index<5" :key='data.id'>
          <a :href="data.method" class="indexListImg">
            <img v-bind:src="data.src"/>
            <span class="comLabel" :class="data.bgColor" v-if="data.label">{{data.label}}</span>
          </a>
          <a :href="data.method" class="indexListTitle">{{data.title}}</a>
          <p class="indexListDetail"><span>主课程<i>{{data.number}}</i>节</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SoftVideo',
  data () {
    return {
      videoSlide: [],
      numFontVideo: 0
    }
  },
  components: {
  },
  created () {
    var _this = this
    axios.get('/static/json/softVideo.json')
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
.SoftVideo{
  .yfColor{
    color: #FBB03B;
  }
  .indexList{
    li{
      .indexListImg{
        position: relative; display: block; width: 45px; margin: 28px auto;
        img{
          width: 45px; height: 45px; border-radius: 0;
        }
        .comLabel{
          top: -10px; right: -45px; width: 36px; font-size: 12px; color: #fff;
          height: 20px; line-height: 20px; border-radius: 50px 50px 50px 0;
        }
      }
      .indexListTitle{
        margin: 12px auto; text-align: center;
      }
      .indexListDetail{ text-align: center;}
    }
  }
}
</style>
