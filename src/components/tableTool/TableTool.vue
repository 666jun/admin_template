<template>
  <div class="table-tool">
    <div class="table-tool-btn">
      <el-button type="primary" icon="el-icon-upload2" size="small">批量导入</el-button>
      <el-button type="primary" icon="el-icon-download" size="small">导出数据</el-button>
      <el-button type="danger" icon="el-icon-delete" size="small">批量删除</el-button>
    </div>
  </div>
</template>

<script>
	export default {
		name: "tableTool"
	}
</script>

<style scoped lang="scss">
.table-tool{
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  .table-tool-btn{
    /*margin-left: auto;*/
  }
}
</style>
