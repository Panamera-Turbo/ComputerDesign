<template>
  <div id="main">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }


#app {
  background:url("../src/assets/bg3.jpg");
  // background:#2c3e50;
  
  width:100%;			//大小设置为100%
  height:100%;			//大小设置为100%
  position:fixed;
  background-size:100% 100%;
}
</style>
