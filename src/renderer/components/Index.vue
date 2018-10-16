<template>
  <div class="Index">
    <h3 class="comIndexTitle"><strong>最新视频</strong><span @click="changeBatch()">换一批</span><a href="javascript:;">更多</a></h3>
    <div class="indexList newVideo">
      <ul class="clearfix">
        <li v-for="(data,index) in videoSlide" :key='data.id' v-if='index<=6' :value="data.numTyp">
          <span class="comLabel" :class="data.bgColor" v-if="data.label">{{data.label}}</span>
          <span class="comTime" v-if="data.time">{{data.time}}</span>
          <a :href="data.method" class="indexListImg"><img v-bind:src="data.src"/></a>
          <a :href="data.method" class="indexListTitle">{{data.title}}</a>
          <p class="indexListDetail clearfix"><span class="fl">{{data.label}}</span><span class="fr"><i>{{data.number}}</i>人已学</span></p>
        </li>
      </ul>
    </div>
    <RecVideo></RecVideo>
    <SoftVideo></SoftVideo>
    <FontUi></FontUi>
    <CourseC4D></CourseC4D>
    <UiDesign></UiDesign>
    <ChoiceVideo></ChoiceVideo>
  </div>
</template>

<script>
import axios from 'axios'
import RecVideo from './index/RecVideo'
import ChoiceVideo from './index/ChoiceVideo'
import SoftVideo from './index/SoftVideo'
import FontUi from './index/FontUi'
import UiDesign from './index/UiDesign'
import CourseC4D from './index/CourseC4D'
export default {
  name: 'Index',
  data () {
    return {
      videoSlide: [],
      numTyp: 1
    }
  },
  components: {
    RecVideo,
    ChoiceVideo,
    SoftVideo,
    FontUi,
    CourseC4D,
    UiDesign
  },
  created () {
    var _this = this
    axios.get('/static/json/newVideo.json?type=numTyp')
      .then(function (response) {
        _this.videoSlide = response.data.videoSlide
      }).catch(function (error) {
        console.log(error)
      })
  },
  mounted () {
  },
  methods: {
    changeBatch () {
      axios.get('/static/json/newVideo.json')
        .then(function (res) {
          console.log(2)
          var _this = this
          console.log(res.data.videoSlide.length)
          _this.videoSlide = res.data.videoSlide
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
.bgColor1{ background-color: #EA5441;}
.bgColor2{ background-color: #494166;}
.bgColor3{ background-color: #6DBD6B;}
.bgColor4{ background-color: #FBB03B;}
.bgColor5{}
.bgColor6{}
.comIndexTitle{
  position: relative; padding: 20px 0 12px; margin-left: 5px; color: #fff;
  span{ margin-left: 20px; font-size: 12px; color: #D8D8D8; cursor: pointer;}
  a{
    position: absolute; right: 0; top: 20px; font-size: 12px; color: #fff;
  }
}
.indexList{
  height: 186px; overflow: hidden;
  ul{
    margin-left: 5px;
    li{
      position: relative; float: left; width: 188px; height: 176px; background-color: #282828; border-radius: 5px; transition: transform 0.25s ease;
      margin: 5px 20px 5px 0;
      .indexListImg{
        img{
          width: 100%; height: 114px; border-radius: 5px 5px 0 0;
        }
      }
      .indexListTitle{
        display: block; width: 90%; margin: 12px auto 8px; color: #FAFAFA;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .indexListTitle:hover{ color: #FFD200;}
      .indexListDetail{
        width: 90%; margin: 0 auto; font-size: 12px; color: #979A9A;
      }
      .comLabel{
        position: absolute; right: 8px; top: 20px; width: 44px; height: 16px; line-height: 16px; text-align: center;
        border-radius: 5px;
      }
      .comTime{
        position: absolute; right: 8px; top: 80px; padding: 4px 12px;
        background: rgba(49,49,49,0.60); border-radius: 5px; color: #fff;
      }
    }
    li:hover{
      transform: scale(1.06,1.06)
    }
  }
}
</style>
