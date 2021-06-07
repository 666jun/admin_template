<template>
  <el-aside :width="isClose?'65px':'250px'">
    <div class="logo">
      <img src="../../../assets/logo.png" alt="">
      <span v-show="!isClose">Vue 模板</span>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :router="true"
      :collapse="isClose"
    >
      <vertical-nav-item v-for="item in navArr" :item="item" :key="item.path"></vertical-nav-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import VerticalNavItem from './VerticalNavItem'
  import {children as navArr} from "../../../router/children";

  export default {
    name: "VerticalAside",
    components: {
      VerticalNavItem
    },
    props: {
      isClose: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        navArr: []
      }
    },
    created() {
      this.navArr = navArr
    }
  }
</script>

<style scoped lang="scss">
  .el-aside {
    height: 100vh;
    background-color: var(--Aside-Bg);
    text-align: center;
    box-shadow: 0 -6px 30px rgba(0, 21, 41, 0.08);
    color: var(--Aside-Font);
    overflow-y: auto;
    overflow-x: hidden;
    transition: width .3s ease;
  }
  .el-aside::-webkit-scrollbar {
    width: 0;  //滚动条宽度0 不显示
  }

  .logo {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 8888;

    > img {
      display: inline-block;
      height: 30px;
      width: 30px;
      background-size: 100% 100%;
    }

    > span {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      font-weight: bold;
    }
  }

  .el-menu {
    border: none;
    width: 100%;
    background: none;

    /deep/.is-active {
      background-color: var(--Aside-Active) !important;
      color: var(--Aside-Active-Font)!important;
    }

    /deep/ .el-submenu__title {
      color: var(--Aside-Font);
      background-color: var(--Aside-Bg);
    }

    /deep/ .el-submenu__title:hover {
      background-color: var(--Aside-Active);
    }

    /deep/ .el-menu-item {
      color: var(--Aside-Font);
      background-color: var(--Aside-Bg);
    }
    // 展开的子栏背景
    /deep/.el-menu--inline .el-menu-item {
      color: var(--Aside-Font);
      background-color: var(--Aside-Child-Bg);
    }

    /deep/ .el-menu-item:hover {
      background-color: var(--Aside-Active);
    }

    /deep/.el-menu--popup{
      background-color: var(--Aside-Bg);
    }

  }
  /deep/.el-menu--collapse .el-submenu .el-menu{
    border: none;
  }
</style>
