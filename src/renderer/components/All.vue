<template>
  <div class="Center clearfix">
    <div class="left">
      <ul>
        <li v-for='(data,key,index) in tabs' :key='data.id' v-bind:class='{on:index==styl}'>
          <span @click="tabChange(data.tab, index)">{{ data.item }}</span>
        </li>
      </ul>
      <div class="feedback">
        <span>意见反馈</span>
      </div>
    </div>
    <div class="right">
      <div :is="curView"></div>
    </div>
  </div>
</template>

<script>
import Index from '@/components/Index'
import Soft from '@/components/Soft'
import Uidck from '@/components/Uidck'
export default {
  name: 'Center',
  data () {
    return {
      tabs: {
        item: {
          item: '首页',
          tab: 'Index'
        },
        item1: {
          item: '软件入门',
          tab: 'Soft'
        },
        item2: {
          item: '设计教程',
          tab: 'Uidck'
        }
      },
      styl: '0',
      curView: 'Index'
    }
  },
  components: {
    Index,
    Soft,
    Uidck
  },
  methods: {
    tabChange (tabItem, num) {
      this.styl = num
      this.curView = tabItem
    }
  }
}
</script>

<style>
.Center{ min-height: 100%; height: 100%;}
.left{ position: fixed; left: 0; top: 60px; width: 120px; height: calc(100% - 60px); background-color: #282828;}
.left ul{ margin-top: 20px;}
.left ul li{ margin-bottom: 20px; color: #FAFAFA;}
.left ul li span{ display: block; line-height: 40px; margin: 0 auto; text-indent: 25px; cursor: pointer;}
.left ul li.on{ background-color: #141414; color: #FFD200;}
.feedback{ position: absolute; bottom: 30px; left: 15px; width: 90px; line-height: 40px; border-top: 1px solid #fff; text-align: center;}
.feedback span{ color: #fff; cursor: pointer;}
.right{ margin-left: 120px; padding: 60px 20px 30px 15px; background-color: #1E1D1B;}
</style>
