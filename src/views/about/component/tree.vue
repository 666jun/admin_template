<template>
  <div class="tree-menu">
    <ul v-for="item in data">
      <tree-item :data="item"></tree-item>
    </ul>
  </div>
</template>

<script>
	import treeItem from './treeItem'
	export default {
		components: {
			treeItem
		},
		data() {
			return{
				data:[
					{
						'name': 'Web秀',
						'children': [{
							'name': 'web前端',
							'children': [{
								'name': 'CSS'
							}, {
								'name': 'JavaScript'
							}, {
								'name': 'Vue'
							}, {
								'name': '小程序'
							}, {
								'name': 'Three.js'
							}]
						}, {
							'name': '服务器'
						}, {
							'name': '工具类'
						}]
					}, {
						'name': '今日头条',
						'children': [{
							'name': '图片'
						}, {
							'name': '新闻',
							'children': []
						}]
					}, {
						'name': 'Angular'
					}
				]
      }
		},
	}
</script>
