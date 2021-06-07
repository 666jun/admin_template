<template>
  <div class="about">
    <h1>阴影</h1>
    <div class="shadow-box shadow">
      <icon name="icon-zhuti"></icon>
    </div>
    <count-to :endVal="8000"></count-to>

    <h1>背景</h1>
    <div class="bg-box">
      <div class="shadow-blur" v-for="item in ColorList" :class="'bg-'+item.name">{{item.title}}</div>
    </div>
    <h1>淡色背景</h1>
    <div class="bg-box-thin">
      <div v-for="item in ColorList.slice(0,-3)" :class="'bg-thin-'+item.name">{{item.title}}</div>
    </div>

    <div class="card bg-gradual-red">
      <img src="../../assets/img/circle.svg" alt="">
    </div>
  </div>
</template>
<script>
	export default {
		name: 'about',
		data() {
			return {
				ColorList: [{
					title: '嫣红',
					name: 'red',
					color: '#e54d42'
				},
					{
						title: '桔橙',
						name: 'orange',
						color: '#f37b1d'
					},
					{
						title: '明黄',
						name: 'yellow',
						color: '#fbbd08'
					},
					{
						title: '橄榄',
						name: 'olive',
						color: '#8dc63f'
					},
					{
						title: '森绿',
						name: 'green',
						color: '#39b54a'
					},
					{
						title: '天青',
						name: 'cyan',
						color: '#1cbbb4'
					},
					{
						title: '海蓝',
						name: 'blue',
						color: '#0081ff'
					},
					{
						title: '姹紫',
						name: 'purple',
						color: '#6739b6'
					},
					{
						title: '木槿',
						name: 'mauve',
						color: '#9c26b0'
					},
					{
						title: '桃粉',
						name: 'pink',
						color: '#e03997'
					},
					{
						title: '棕褐',
						name: 'brown',
						color: '#a5673f'
					},
					{
						title: '玄灰',
						name: 'grey',
						color: '#8799a3'
					},
					{
						title: '草灰',
						name: 'gray',
						color: '#aaaaaa'
					},
					{
						title: '墨黑',
						name: 'black',
						color: '#333333'
					},
					{
						title: '雅白',
						name: 'white',
						color: '#ffffff'
					},
				]
			}
		},
		components: {},
    methods:{
    }
	}
</script>
<style lang="scss" scoped>
  .about {
    width: 100%;
  }

  .shadow-box {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    font-size: 24px;
    background-color: var(--Bg-Color);
  }

  .bg-box,
  .bg-box-thin {
    display: flex;
    flex-wrap: wrap;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      margin-top: 20px;
      margin-right: 20px;
      border-radius: 6px;
    }
  }
.card{
  border-radius: 8px;
  overflow: hidden;
  width: 366px;
  height: 220px;
  position: relative;
  display: flex;
  img{
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
  }
}

</style>
