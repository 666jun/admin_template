<template>
  <component :is="menuComponent" :item="item">
    <template v-if="item.children">
      <vertical-nav-item
        v-for="childrenItem in item.children"
        :key="childrenItem.path"
        :item="childrenItem"
      ></vertical-nav-item>
    </template>
  </component>
</template>

<script>
	import SubMenu from './component/SubMenu'
	import MenuItem from './component/MenuItem'

	export default {
		name: "VerticalNavItem",
		props: {
			item: {
				type: Object,
				require:true
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
