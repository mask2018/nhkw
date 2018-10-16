<template>
  <div class="RecVideo">
    <h3 class="comIndexTitle"><strong>软件入门</strong><a href="javascript:;">更多</a></h3>
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
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Index',
    data () {
      return {
        videoSlide: []
      }
    },
    components: {
    },
    created () {
      var _this = this
      axios.get('/static/json/softVideo.json')
        .then(function (response) {
          _this.videoSlide = response.data.videoSlide
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

<style scoped>
.swiperSlide4 .sortlist0:after{
  content: '1';
  position: absolute; top: 0; left: 0; display: block;
  width: 60px; height: 60px; line-height: 60px; text-align: center;
  background-color: bisque;
}
.swiperSlide4 .sortlist1:after{
  content: '2';
  position: absolute; top: 0; left: 0; display: block;
  width: 60px; height: 60px; line-height: 60px; text-align: center;
  background-color: bisque;
}
.swiperSlide4 .sortlist2:after{
  content: '3';
  position: absolute; top: 0; left: 0; display: block;
  width: 60px; height: 60px; line-height: 60px; text-align: center;
  background-color: bisque;
}
</style>
