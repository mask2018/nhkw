<template>
  <div class="ChildIndex clearfix">
    <div class="indexLeft">{{asd}}</div>
    <div class="indexIight"></div>
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
    if (this.one !== this.$route.query.recId) {
      this.one = this.$route.query.recId
    } else {
      alert(3)
    }
    // location.reload()
  },
  watch: {
  },
  methods: {
    load () {
      this.loadShow = true
    }
  },
  mounted () {
    this._timeOut = setInterval(() => {
      this.loadShow = false
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this._timeOut)
  }
}
</script>

<style scoped lang="less">
.ChildIndex{
  position: relative;
  .indexLeft{
    margin-right: 300px; height: 600px; line-height: 600px; background-color: aqua; font-size: 60px; color: #fff; text-align: center;
  }
  .indexIight{
    position: absolute; right: 0; top: 0; width: 300px; height: 600px; background-color: chocolate;
  }
}
</style>
