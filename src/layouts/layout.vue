<template>
  <div>
    <!--垂直布局-->
    <el-container class="vertical-container" v-if="layout==='vertical'">
      <vertical-aside :isClose="isClose" :class="isClose?'vertical-aside-close':''"></vertical-aside>
      <el-container class="my-container" :class="isClose?'container-close-sty':''">
        <vertical-header @asideSwitch="asideSwitch($event)"></vertical-header>
        <history-route></history-route>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!--横向布局-->
    <el-container class="my-container" v-if="layout==='horizontal'">
      <horizontal-header @asideSwitch="asideSwitch($event)"></horizontal-header>
      <history-route class="horizon-history-route"></history-route>
      <el-main class="horizon-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import VerticalAside from './vertical/aside/VerticalAside'
  import VerticalHeader from './vertical/header/VerticalHeader'
  import HorizontalHeader from './horizontal/header/HorizontalHeader'
  import HistoryRoute from "./historyRoute/HistoryRoute";

  export default {
    name: "layout",
    components: {
      HistoryRoute,
      VerticalAside,
      VerticalHeader,
      HorizontalHeader,
    },
    data() {
      return {
        isClose: false
      }
    },
    methods: {
      asideSwitch(e) {
        this.isClose = e
      }
    },
    computed: {
      layout() {
        return this.$store.state.style.layout;
      }
    }
  }
</script>

<style scoped lang="scss">
  .my-container {
    flex-flow: column;
  }

  /********************************************************************
   ****        1.vertical-aside-close    container-close-sty      *****
   ****        2.此两个类为了解决element-ui的导航缩小之后鼠标移入      *****
   ****        有子结构的节点append-to-body 的堆栈溢出错误，为了不     *****
   ****        使用它，所以要把aside组件fixed定位而正常显示子节点      *****
   *********************************************************************/
  .vertical-aside-close {
    position: fixed;
    z-index: 5000;
  }

  .container-close-sty {
    margin-left: 65px;
    animation: closeMargin .4s ease; //过渡效果
  }

  @keyframes closeMargin {
    from {
      margin-left: 250px;
    }
    to {
      margin-left: 65px;
    }
  }

  .el-main {
    height: calc(100vh - 60px - 45px); //导航栏多高就减去多少  (如果有historyRoute组件，其高度也要减去)
    /*position: relative;*/
    background-color: var(--Main-Bg);
  }

  .horizon-main {
    padding: 20px 5%;
  }

  .horizon-history-route {
    padding: 0 5%;
  }

  .el-main::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .el-main::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  .el-main::-webkit-scrollbar-thumb {
    background-color: #CCC;
    border-radius: 10px;
  }

  .el-main::-webkit-scrollbar-thumb:hover {
    background-color: #9f9b9d;
  }

  .el-main::-webkit-scrollbar-corner {
    background-color: #FFFFFF;
  }
</style>
