<template>
  <div class="login">
    <h3 class="loginLogo">dd</h3>
    <div class="loginList" v-if="loginDiv">
      <ul class="clearfix">
        <li>
          <a href="javascript:;">
            <img src="static/images/loginIcon.png"/>
            <span>QQ登录</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="static/images/loginIcon.png"/>
            <span>微信登录</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="static/images/loginIcon.png"/>
            <span>微博登录</span>
          </a>
        </li>
        <li @click="phoneLogin">
          <a href="javascript:;">
            <img src="static/images/loginIcon.png"/>
            <span>手机登录</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="loginPhone" v-if="lgPhoneDiv">
      <ul class="loginTab clearfix">
        <li v-for='(data,key,index) in tabs' @click="tabChange(data.tab, index)" v-bind:class='{on:index==styl}' :key='data.id'> {{ data.item }} </li>
      </ul>
      <div class="loginCont">
        <div :is="curView" @otherLo="otherLo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneLogin from '@/components/login/PhoneLogin'
import PhoneRegister from '@/components/login/PhoneRegister'
export default {
  name: 'login',
  data () {
    return {
      loginDiv: true,
      lgPhoneDiv: false,
      tabs: {
        item: {
          item: '手机短信登录',
          tab: 'PhoneLogin'
        },
        item1: {
          item: '手机号注册',
          tab: 'PhoneRegister'
        }
      },
      styl: '0',
      curView: 'PhoneLogin'
    }
  },
  created: function () {
    this.$emit('comHead', false)
  },
  components: {
    PhoneLogin,
    PhoneRegister
  },
  methods: {
    tabChange (tabItem, num) {
      this.styl = num
      this.curView = tabItem
    },
    phoneLogin () {
      this.loginDiv = false
      this.lgPhoneDiv = true
    },
    otherLo (bool) {
      this.lgPhoneDiv = bool
      this.loginDiv = true
    }
  }
}
</script>

<style>
@import "login.css";
</style>
