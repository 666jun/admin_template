<template>
  <div>
    <Tabs :tabList="tabList" @handleTabClick="handleTabClick($event)"></Tabs>

    <icon name="icon-qianbao1"></icon>
  </div>
</template>

<script>
  export default {
    name: "detail",
    components:{},
    data() {
      return {
        activeIndex: 0,
        tabList:['现场情况','场所监控','视频监控','首页大屏'],
      }
    },
    methods: {
      handleTabClick(event){
        console.log(event);
      }
    }
  }
</script>

<style scoped lang="scss">
  /deep/svg{
    font-size: 40px;
  }
</style>
