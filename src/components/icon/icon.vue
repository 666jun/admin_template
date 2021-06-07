<template>
  <svg class="icon-font" aria-hidden="true">
    <use :xlink:href='iconName'></use>
  </svg>
</template>

<script>
  /**
   * icon 图标 （需要阿里巴巴图标库）
   * @property name 图标名称
   * */
  export default {
    name: "icon",
    props: {
      name: {
        type: String,
        require: true
      }
    },
    computed:{
      iconName(){
        return `#${this.name}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .icon-font {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
