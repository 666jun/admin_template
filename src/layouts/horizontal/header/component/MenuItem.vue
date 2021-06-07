<template>
  <el-menu-item :index="item.path">
    <i v-if="item.meta.icon" :class="item.meta.icon"></i>
    <span slot="title">{{item.meta.title}}</span>
  </el-menu-item>
</template>

<script>
  export default {
    name: "MenuItem",
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

