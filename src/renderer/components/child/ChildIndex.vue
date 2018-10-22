<template>
  <div class="ChildIndex">
    <div class="childHead">
      <div class="headClose">
        <span class="small icon-suoxiao" @click="headSmall()"></span>
        <span class="min icon-huanyuan" @click="headMin()" v-if="minIcon"></span>
        <span class="max icon-fangda" @click="headMax()" v-if="maxIcon"></span>
        <span class="close icon-dacha" @click="headClose()"></span>
      </div>
    </div>
    <div class="childCen clearfix">
      <div class="indexLeft">{{asd}}</div>
      <div class="indexIight">dadsadsadsadwq</div>
    </div>
    <Load v-if="loadShow"></Load>
  </div>
</template>

<script>
import Load from '../Load'
export default {
  name: 'ChildIndex',
  data () {
    return {
      asd: this.$route.query.recId,
      one: '',
      minIcon: false,
      maxIcon: true,
      loadShow: false
    }
  },
  components: {
    Load
  },
  created: function () {
    var id = this.$route.query.recId
    this.$emit('comHead', false)
    localStorage.setItem('key', this.$route.query.recId)
    console.log(id)
    this.load()
  },
  watch: {
  },
  methods: {
    load () {
      this.loadShow = true
    },
    headSmall: function () {
      this.maxIcon = true
      this.minIcon = false
    },
    headMin: function () {
      this.maxIcon = true
      this.minIcon = false
    },
    headMax: function () {
      this.maxIcon = false
      this.minIcon = true
      self.moveTo(0, 0)
      self.resizeTo(screen.availWidth, screen.availHeight)
    },
    headClose: function () {
      window.close()
    }
  },
  mounted () {
    this._timeOut = setInterval(() => {
      this.loadShow = false
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this._timeOut)
  }
}
</script>
<style>
  @import "//at.alicdn.com/t/font_880923_sgz6ay252me.css";
</style>
<style scoped lang="less">
.ChildIndex{
  position: relative;
  .childHead{
    position: fixed; top: 0; left: 0; width: 100%; height: 60px; background-color: #171615; z-index: 99;
    -webkit-app-region: drag;
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
  .childCen{
    margin-top: 60px;
    .indexLeft{
      margin-right: 300px; height: 600px; background-color: aqua; font-size: 60px; color: #fff; text-align: center;
    }
    .indexIight{
      position: absolute; right: 0; top: 0; width: 300px; height: 600px; background-color: chocolate;
    }
  }
}
</style>
