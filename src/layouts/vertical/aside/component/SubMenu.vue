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
    },
    computed: {}
  }
</script>

<style scoped lang="scss">
  /deep/ .el-submenu__title {
    display: flex;
    align-items: center;

    .el-submenu__icon-arrow {
      margin-top: -9px;
      margin-right: 10px;
      font-size: 16px;
      color: #FFF;
    }

    > i {
      margin: 0 5px 0 15px;
    }

    > span {
      /*margin-left: 20px;*/
    }
  }
</style>
