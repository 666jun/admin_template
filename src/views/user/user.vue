<template>
  <div class="user">
    <search-form
      :configKey="'configOne'"
      :data="searchFormData"
      @search="search($event)"
    >
    </search-form>
    <table-one
      :configKey="'pageUser'"
      @handleAdd="handleAdd($event)"
      @handleEdit="handleEdit($event)"
      @handleDelete="handleDelete($event)"
      :tableData="tableData"
    >
      <!--      <table-tool slot="table-tool"></table-tool>-->
    </table-one>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '进行中',
          add: false,
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603476904722&di=04d4048bdf88580e753826f8d9b88d21&imgtype=0&src=http%3A%2F%2Fpic.sucaibar.com%2Fpic%2F201308%2F09%2F320572472d.jpg',
          edit: false
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '等待中',
          add: false,
          imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603476904722&di=04d4048bdf88580e753826f8d9b88d21&imgtype=0&src=http%3A%2F%2Fpic.sucaibar.com%2Fpic%2F201308%2F09%2F320572472d.jpg',
          edit: false
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '未开始',
          add: false,
          imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg',
          edit: false
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '已完成',
          add: false,
          imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1473836766,4030812874&fm=26&gp=0.jpg',
          edit: false
        }
        ],
        searchFormData: {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }],
          options2: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }],
        }
      }
    },
    methods: {
      handleAdd(data) {
        this.tableData[data.index].add = true;
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      },
      handleEdit(data) {
        this.tableData[data.index].edit = true;
        this.$message({
          type: 'warning',
          message: '编辑成功'
        })
      },
      handleDelete(data) {
        this.tableData.splice(data.index, 1)
        this.$message({
          type: 'info',
          message: '删除成功'
        })
      },
      search(form) {
        console.log(form)
      }
    }
  }
</script>

<style scoped lang="scss">
  .user {
  }
</style>
