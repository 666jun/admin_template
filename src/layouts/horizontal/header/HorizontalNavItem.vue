<template>
  <component :is="menuComponent" :item="item">
    <template v-if="item.children">
      <horizontal-nav-item
        v-for="childrenItem in item.children"
        :key="childrenItem.path"
        :item="childrenItem"
      ></horizontal-nav-item>
    </template>
  </component>
</template>

<script>
  import SubMenu from './component/SubMenu'
  import MenuItem from './component/MenuItem'

  export default {
    name: "HorizontalNavItem",
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    components: {
      SubMenu,
      MenuItem
    },
    computed: {
      menuComponent() {
        if (this.item.children) {
          return 'SubMenu'
        } else {
          return 'MenuItem'
        }
      }
    },

  }
</script>

<style scoped>

</style>
