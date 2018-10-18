<template>
  <div class="phoneRegister">
    <ul class="peRestList">
      <li><input type="text" class="phoneText" v-model="loginPhone" placeholder="请输入您的手机号码"/></li>
      <li><input type="text" class="imgInputCode" placeholder="请输入图形验证码"/><img src="../../assets/logo.png" class="imgVecode"/></li>
      <li>
        <input type="text" class="mesInputCode" placeholder="请输入动态密码"/>
        <span v-show="show" @click="getCode"  class="logonCount">免费获取验证码</span>
        <span v-show="!show" class="logonCount">{{count}} s</span>
      </li>
      <li>
        <p>注册即同意《虎课网网络服务使用协议》</p>
        <input type="button" value="注册" class="regBtn comLoginBtn"/>
      </li>
    </ul>
    <div class="otherLogin">
      <strong @click="otherLogin">其它登录方式</strong>
      <a href="javascript:;">QQ</a>
      <a href="javascript:;">微信</a>
      <a href="javascript:;">微博</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phoneRegister',
  data () {
    return {
      show: true,
      count: '',
      timer: null,
      loginPhone: this.loginPhone
    }
  },
  methods: {
    getCode () {
      const TIME_COUNT = 60
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (this.loginPhone === '') {
        alert('请输入手机号码')
      } else if (!reg.test(this.loginPhone)) {
        alert('手机格式不正确')
      } else if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    otherLogin () {
      this.$emit('otherLo', false)
    }
  }
}
</script>

<style>
@import "login.css";
</style>
