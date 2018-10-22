<template>
  <div class="head" v-if="hdstate">
    <div class="logo">
      <a href="javascript:;" class="icon"><img src="/static/images/loginIcon.png"/></a>
    </div>
    <div class="search">
      <div class="searc-bar">
        <input type="text" class="searchInput" placeholder="请输入教程"/> <i class="icon-sousuo"></i>
      </div>
    </div>
    <div class="headClose">
      <span class="small" @click="headSmall()">_</span>
      <span class="min icon-huanyuan" @click="headMin()" v-if="minIcon"></span>
      <span class="max icon-fangda" @click="headMax()" v-if="maxIcon"></span>
      <span class="close icon-dacha" @click="headClose()"></span>
    </div>
  </div>
</template>

<script>
var ipcRenderer = require('electron').ipcRenderer
export default {
  name: 'dacHead',
  data () {
    return {
      minIcon: false,
      maxIcon: true
    }
  },
  components: {
  },
  created () {
  },
  props: {
    hdstate: ''
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    headSmall: function () {
      ipcRenderer.send('newClose', 'small')
    },
    headMin: function () {
      this.maxIcon = true
      this.minIcon = false
      ipcRenderer.send('newClose', 'nobig')
    },
    headMax: function () {
      this.maxIcon = false
      this.minIcon = true
      ipcRenderer.send('newClose', 'big')
    },
    headClose: function () {
      ipcRenderer.send('newClose', 'close')
    }
  }
}
</script>
<style>
  @import "//at.alicdn.com/t/font_880923_ykuzhaavd6.css";
</style>
<style lang="less" scoped>
.head{
  position: fixed; left: 0; top: 0; width: 100%;
  height: 60px; background-color: #171615; z-index: 111;
  -webkit-app-region: drag;
  .logo{
    position: absolute; left: 20px; top: 0; -webkit-app-region: no-drag;
    .icon{
      display: inline-block; height: 20px; margin: 20px 0;
      img{
        height: 20px;
      }
    }
  }
  .search{
    text-align: center;
    height: 40px; margin: 10px 0;
    .searc-bar{
      position: relative; -webkit-app-region: no-drag;
      width: 240px; margin: 0 auto; background-color: #282828; border-radius: 50px;
      .searchInput{
        display: block; height: 40px; width: 180px; padding: 0 15px; border: 0; border-radius: 50px; background-color: #282828; color: #fff;
      }
      i{
        position: absolute; right: 0; top: 0; height: 40px; width: 40px; line-height: 40px; text-align: center;
        font-family: iconfont; border-radius: 50px; background-color: #393939; font-size: 16px; cursor: pointer; color: #D8D8D8;
      }
    }
  }
  .headClose{
    position: absolute; right: 20px; top: 22px; height: 30px; font-size: 16px;
    text-align: right; color: #979A9A; font-family: iconfont; -webkit-app-region: no-drag;
    span{
      display: inline-block; margin-left: 20px; cursor: pointer; color: #979A9A;
    }
    span:hover{
      color: #fff;
    }
    a{}
  }
}
</style>
