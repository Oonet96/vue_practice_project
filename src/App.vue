<template>
  <div id="header_nav_container">
    <router-link to="/">홈</router-link>
    <router-link :to="{name:'book', params:{ bPreview:false } }">북마크</router-link>
    <router-link :to="{name:'note', params:{ bPreview:false } }">정리노트</router-link>
    <router-link :to="{name:'github', params:{ bPreview:false } }">작업한프로젝트</router-link>
  </div>
  <router-view id="main_container"/>
</template>

<style>
#app {
  font-family: consolas, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
#main_container{
  margin-top: 45px;
}
#main_container>div{
    margin-bottom: 15px;
    box-shadow: 5px 5px 3px rgba(102, 102, 102,0.3);
}
#header_nav_container {
  z-index : 1;
  position: fixed;
  width:100%;
  height: 35px;
  top:0px;
  right:0px;
  display: flex;
  flex-direction:row;
  background-color: white;
  box-sizing: border-box;
  padding:10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),
              0  8px 16px -8px rgba(0,0,0,0.3),
              0 -6px 16px -6px rgba(0,0,0,0.25);
  border-radius: 5px;
}
#header_nav_container a {
  text-decoration: none;
  color : #0008FC;
  font-size: 12px;
  text-align:center;
  font-weight: 600;
}
#header_nav_container a:not(:last-child){
  margin-right: 10px;
}
</style>
