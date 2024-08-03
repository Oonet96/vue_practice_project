<template>
  <nav>
    <router-link to="/">홈</router-link>
    <router-link to='/book'>북마크</router-link>
    <router-link to='/note'>정리노트</router-link>
    <router-link to='/github'>작업한프로젝트</router-link>
  </nav>
  <router-view id="main_container"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
#main_container{
  margin-top: 45px;
}
nav {
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
nav a {
  text-decoration: none;
  color : #0008FC;
  /* text-transform:uppercase; */
  font-size: 12px;
  text-align:center;
  font-weight: 600;
}
nav a:not(:last-child){
  margin-right: 10px;
  /* margin-bottom: 10px; */
}
</style>
