<template>
  <el-header>
    <span class="header-switch" :class="{'el-icon-s-fold':!flag,'el-icon-s-unfold':flag}" @click="asideSwitch"></span>

    <div class="header-crumb" v-if="$globalSetting.crumb">
      <Crumb></Crumb>
    </div>

    <div class="header-right">
      <span class="header-style" @click="drawer = true" v-if="$globalSetting.themeSwitch">
        <icon name="icon-zhuti"></icon>
      </span>
      <div class="header-user">
        <div class="shadow-blur">H</div>
        <el-popover placement="bottom" width="80" trigger="hover">
          <div class="tooltip-menu">
            <div class="menu-items" @click="1">
              退出登录
              <i class="menu-items-left"></i>
              <i class="menu-items-right"></i>
            </div>
            <div class="menu-items" @click="0">
              修改密码
              <i class="menu-items-left"></i>
              <i class="menu-items-right"></i>
            </div>
          </div>
          <div class="username" slot="reference">He</div>
        </el-popover>
      </div>
    </div>

    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :size="'400px'"
      @open="drawerOpen"
      :destroy-on-close="true"
    >
      <h4 slot="title">主题设置</h4>
      <div class="style-select">
        <span>布局：</span>
        <el-radio-group v-model="style.layout" size="mini">
          <el-radio-button label="vertical">垂直</el-radio-button>
          <el-radio-button label="horizontal">横向</el-radio-button>
        </el-radio-group>
      </div>
      <div class="style-select">
        <span>主题：</span>
        <el-radio-group v-model="style.theme" size="mini">
          <el-radio-button v-for="theme in $globalSetting.themeArr" :label="theme.value" :key="theme.value">
            {{theme.name}}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="style-button">
        <el-button type="primary" size="small" @click="handleStyle">确认</el-button>
        <el-button size="small" @click="drawer = false">取消</el-button>
      </div>
    </el-drawer>
  </el-header>
</template>

<script>
  export default {
    name: "VerticalHeader",
    data() {
      return {
        flag: false,
        drawer: false,
        direction: 'rtl',
        style: {
          layout: '',
          theme: ''
        }
      }
    },
    methods: {
      asideSwitch() {
        this.flag = !this.flag;
        this.$emit('asideSwitch', this.flag)
      },
      handleStyle() {
        this.$store.commit('setStyle', this.style);
        this.drawer = false;
      },
      drawerOpen() {
        let style = Object.assign({}, this.$store.state.style)
        this.style.layout = style.layout;
        this.style.theme = style.theme;
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-header {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--Header-Bg);
    border-bottom: 1px solid var(--Border-Color);
    box-shadow: 0 3px 4px rgba(0, 21, 41, 0.15);
  }

  .header-switch {
    cursor: pointer;
    font-size: 24px;
    color: var(--Font-Color1);
  }

  .header-crumb {
    margin-left: 30px;
  }

  .header-right {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
  }

  .header-right .header-style {
    margin-right: 20px;
    cursor: pointer;
    svg{
      font-size: 36px;
    }
  }

  .header-right .header-user {
    height: 50px;
    display: flex;
    align-items: center;

    > div {
      height: 45px;
      width: 45px;
      border-radius: 5px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      line-height: 45px;
      color: var(--Font-Color1);
      background-color: var(--Header-Img-Bg);
    }

    .username {
      font-size: 16px;
      cursor: pointer;
      margin: 0 10px;
      color: var(--Font-Color1);
    }
  }

  .el-header /deep/ .el-drawer {
    outline: none;

    button {
      outline: none;
    }
  }

  .el-header .style-select {
    margin-left: 30px;
    margin-bottom: 20px;
  }

  .el-header .style-button {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }


</style>
