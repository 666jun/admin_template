<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name:'App',
    data(){
      return{}
    }
  }
</script>
<style lang="scss">
  @import "../src/assets/css/theme.scss";  //主题配置
  #app {
    width: 100%;
    height: 100vh;
    overflow-x:hidden;
    overflow-y: hidden;
  }

  #app::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  #app::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
  #app::-webkit-scrollbar-thumb {
    background-color: #cacaca;
    border-radius: 10px;
  }
  #app::-webkit-scrollbar-thumb:hover {
    background-color: #9f9b9d;
  }
  #app::-webkit-scrollbar-corner {
    background-color: #FFFFFF;
  }
</style>
