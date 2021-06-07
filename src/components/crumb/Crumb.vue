<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in routeData"
      :key="item.path"
      @click.native="goToPage(item)">
      {{item.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: "Crumb",
    data() {
      return {
        routeData: null
      }
    },
    created() {
      this.routeData = [];
      for (let i of this.$route.matched) {
        if (i.path === '') continue;
        this.routeData.push(i)
      }
    },
    methods: {
      goToPage(item) {
        if (item.path === this.$route.path) return;
        this.$router.push(item.path)
      }
    },
    computed: {
      routeArr() {
        return this.$route.matched;
      }
    },
    watch: {
      routeArr(newVal) {
        this.routeData = [];
        for (let i of newVal) {
          if (i.path === '') continue;
          this.routeData.push(i)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  /deep/ .el-breadcrumb__item {
    animation: fade .6s ease;
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateX(40px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /deep/ .el-breadcrumb__inner {
    cursor: pointer;
  }

  /deep/ .el-breadcrumb__separator[class*=icon] {
    margin: 0 3px;
  }

  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    cursor: text;
  }
</style>
