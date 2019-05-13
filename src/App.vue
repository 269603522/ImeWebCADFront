<template>
  <div id="app">
    <div class="divTitle">
        VUE Test <!-- IME WEB .NET CAD -->
    </div>
    <ul>
      <li>
        <span onMouseOver="this.className='liOver'" onMouseOut="this.className='liout'" onMousedown="this.className='lidown'" class="liout">
          <router-link to="ReadingList">图纸查询下载记录列表</router-link>
        </span>
      </li>
      <li>
        <span onMouseOver="this.className='liOver'" onMouseOut="this.className='liout'" onMousedown="this.className='lidown'" class="liout">
          <router-link to="HandleList">预处理文件列表</router-link>
        </span>
      </li>
     </ul>
     <router-view/>
  </div>
</template>
<script>
import $ from 'jquery' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
export default {
  name: 'App'
}
$(function () {  
    alert($(".divTitle").html())
 })
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
#app .divTitle
{
  font-size:36px;
}
a{
 font-size:12px;
 color:#006699;
 line-height:160%;
 text-decoration:none;
}
a:link{
 font-size:12px;
 color:#006699;
 line-height:160%;
 text-decoration:none;
}
a:active{
 font-size:12px;color:#990000;
 line-height:160%;
}
a:hover{
 font-size:12px; color:#3366ff;
 line-height:160%;
 text-decoration:none;
}
li{
 margin:0px;
 padding:0px;
 height:15px;
 list-style:none; /* 将默认的列表符号去掉 */
padding:0; /* 将默认的内边距去掉 */
margin:0; /* 将默认的外边距去掉 */
float:left; /* 往左浮动 */
}
li span{
 color:black;
 cursor:hand;
 text-decoration:none;
 border:1px solid #F1F1F1;
 margin:0px;
 padding-left:10px;
 padding-right:0px;
 padding-top:0px;
 padding-bottom:0px;
 position:relative;
 top:0px;
 left:-1px;
}
.liOver{
 background-color:#dddddd;
 border:1px solid #000000;
}
.liout{
 background-color:#f1f1f1;
 border:1px solid #f1f1f1;
}
li span.lidown{
 background-color:#00ff00;
 border:1px solid #999999;
}
</style>
