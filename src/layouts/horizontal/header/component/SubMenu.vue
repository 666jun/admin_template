<template>
  <el-submenu :index="item.path" :popper-append-to-body="false">
    <template slot="title">
      <i v-if="item.meta.icon" :class="item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
    </template>
    <slot></slot>
  </el-submenu>

</template>

<script>
  export default {
    name: "SubMenu",
    components: {},
    props: {
      item: {
        type: Object,
        default: () => {
          return {}
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  /deep/ .el-submenu__title {
    .el-submenu__icon-arrow {
      margin-top: 2px!important;
      font-size: 16px;
    }
  }
</style>
