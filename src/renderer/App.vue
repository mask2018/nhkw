<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hkw'
  }
</script>

<style>
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, figcaption, figure, fieldset, legend, button, input, textarea, th, td {
  margin: 0;
  padding: 0
}

body, button, input, select, textarea {
  font: 12px/1 Lucida Grande, 'Microsoft YaHei', "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

code, kbd, pre, samp, tt {
  font-family: "Courier New", Courier, monospace
}
a{text-decoration:none}
* {
  -ms-word-break: break-all;
  word-break: break-all;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

iframe{
  border:none;
}

li {
  list-style: none;
}

input {
  outline: none;
}
strong{
  font-weight: normal;
}

a{
  color: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html{ width:100%; height:100%;}
body {
  height: 100%;
  width:100%;
  -webkit-overflow-scrolling: touch;
}

img {
  border: none;
  vertical-align: middle;
}

address, cite, dfn, em, var,i {
  font-style: normal
}

/* 去除iphone ipad 设备默认按钮样式 */
input[type="button"], input[type="submit"], input[type="reset"] {
  -webkit-appearance: none;
  border-radius: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #cccccc;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #cccccc;
}

input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
  color: #cccccc;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.hide {
  display: none;
}
.show {
  display: block;
}
body {
  font-size: 14px;
}
.bgimg{
  display:none;
  position:fixed;
  top:0; left:0;
  width:100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index:9;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
hr{
  height:41px;
  background-color:#eee;
  border:0;
}
table{
  border-collapse:collapse;
  border-spacing:0;
}
.topBgCenter{
  height: 112px;
}
.bg_fff{
  background-color: #fff;
}
.mt10{ margin-top: 10px}
.mt20{ margin-top: 20px}
.mt30{ margin-top: 30px}
#app{ height: 100%; width: 100%;}
</style>
