<template>
  <div class="history-route">
    <ScrollPane class="history-main">
      <div class="history-item" :class="$route.path==route.path?'history-item-active':''"
           v-for="(route,index) in historyRoute" :key="route.path"
           @click="handleOpenRoute(route,index)">
        <span :class="route.path==$globalSetting.indexPath?'index-path':''">{{route.meta.title}}</span>
        <i class="el-icon-close" v-if="route.path !== $globalSetting.indexPath"
           @click.stop="handleCloseRoute(route,index)"></i>
      </div>
    </ScrollPane>
    <el-dropdown trigger="click">
      <span class="el-icon-arrow-down"></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-circle-close" @click="closeOthers">关闭其他</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-close" @click="closeAll">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  import ScrollPane from "./ScrollPane";

  export default {
    name: "HistoryRoute",
    components: {ScrollPane},
    data() {
      return {}
    },
    methods: {
      handleOpenRoute(route, index) {
        if (this.$route.path === route.path) return;
        this.$router.push(route.path)
      },
      handleCloseRoute(route, index) {
        //首页不可关闭
        if (route.path === this.$globalSetting.indexPath) return;
        let data = {route, index};
        this.$store.commit('removeHistoryRoute', data);
        //往前移动路径
        if (this.$route.path === route.path) {
          let newPath = this.$store.state.historyRoute[index - 1].path;
          this.$router.push(newPath)
        }
      },
      closeAll(){

      },
      closeOthers(){

      }
    },
    computed: {
      historyRoute() {
        return this.$store.state.historyRoute
      }
    }
  }
</script>

<style scoped lang="scss">
  .history-route {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: var(--Route-Bg);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0 3px 4px rgba(0, 21, 41, 0.12);
  }

  .history-route .history-main {
    width: 100%;
    white-space: nowrap;

    /deep/ .el-scrollbar__wrap {
      overflow-x: auto;
      overflow-y: hidden;
      height: 45px;
      margin-bottom: -2px !important;
      padding: 0 20px;
    }

    /deep/ .el-scrollbar__wrap::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    /deep/ .el-scrollbar__view {
      margin-top: 9px;
      /*width: 2500px;*/
    }
  }

  .history-main .history-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 25px;
    padding: 0 16px;
    line-height: 25px;
    margin-right: 10px;
    border: none;
    /*border: 1px solid var(--Route-Item-Thin-Bg);*/
    background-color: var(--Route-Item-Thin-Bg);
    color: var(--Route-Item-Bg);
    cursor: pointer;
    border-radius: 5px;
    animation: fade_in .4s ease;
    @keyframes fade_in {
      from {
        transform: translateX(20px);
      }
      to {
        transform: translateX(0px);
      }
    }

    > span {
      display: inline-block;
      font-size: 12px;
      white-space: nowrap;
      transition: transform .3s ease;
    }

    > i {
      display: none;
      position: absolute;
      height: 14px;
      line-height: 14px;
      text-align: center;
      width: 15px;
      border-radius: 50%;
      font-size: 12px;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      transition: all .3s ease;
    }

    > i:hover {
      background-color: var(--Dot-Bg);
    }
  }

  .history-main .history-item-active {
    background-color: var(--Route-Item-Bg);
    color: var(--Route-Item-Font);

    > i:hover {
      background-color: var(--Dot-Active-Bg);
    }
  }

  .history-item:hover {
    > span {
      transform: translateX(-8px);
    }

    > i {
      display: inline-block;
    }
  }

  // 首页不可关闭所以按钮样式无变化
  .index-path {
    transform: unset !important;
  }

  .el-dropdown{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    background-color: #FFF;
    margin-right: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
  }
</style>
