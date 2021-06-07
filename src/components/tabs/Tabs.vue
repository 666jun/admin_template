<template>

  <ul class="tab" v-if="tabList">
    <li
      v-for="(item,index) in tabList"
      :key="index"
      :class="activeIndex==index?'tab-item-active':''"
      @click="handleTabClick(item,index)"
    >
<!--      <icon name="icon-ditu"></icon>-->
      {{item}}
    </li>
    <span class="tab-bottom-bar">
      <i></i>
    </span>
  </ul>
</template>

<script>
  /**
   *  Tabs 选项卡（一般用于组件间的切换）
   *  @property {Array} tabList 传入tabs的数组 例如 ['选项1','选项2']
   *  @event {Function} handleTabClick 点击tab元素触发
   */
  export default {
    name: "Tabs",
    props: {
      tabList: {
        type: Array,
        require: true
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      handleTabClick(item, index) {
        this.activeIndex = index;
        let ele = document.querySelector('.tab-bottom-bar');
        ele.style.transform = `translateX(${index * 100}%)`;
        this.$emit('handleTabClick', {item, index})
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab {
    height: 50px;
    color: #000;
    background-color: #FFF;
    list-style: none;
    display: flex;
    align-items: center;
    position: relative;

    li {
      width: 120px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .tab-item-active {
      color: #dc1717;
    }

    span {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 120px;
      height: 4px;
      transition: transform .4s ease;
      display: flex;
      justify-content: center;

      i {
        display: inline-block;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background-color: #dc1717;
      }
    }

    @for $i from 1 through 6 {
      li:nth-child(#{$i}):hover ~ .tab-bottom-bar {
        transform: translateX(100% * ($i - 1)) !important;
      }
    }
  }
</style>
