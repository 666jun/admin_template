<template>
  <div class="table-one">
    <template>
      <slot name="table-tool"></slot>
    </template>
    <el-table :data="tableData"  stripe style="width: 100%">
      <!--数据列-->
      <template v-for="(column,index) in config.tableColumn">
        <!--标签-->
        <el-table-column
          v-if="column.type==='tag'"
          :label="column.label"
          :align="column.align"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
        >
          <template slot-scope="scope">
            <el-tag
              :type="tagTypeMethods(scope.row,column.methodsKey)"
              close-transition>{{scope.row[column.prop]}}
            </el-tag>
          </template>
        </el-table-column>
        <!--图片-->
        <el-table-column
          v-else-if="column.type==='img'"
          :label="column.label"
          :align="column.align"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
        >
          <template slot-scope="scope">
            <el-image
              :style="{width:`${column.widthSize}px`, height: `${column.heightSize}px`, borderRadius:`${column.radius}px`}"
              :src="scope.row[column.prop]"
              :preview-src-list="column.preview? [scope.row[column.prop]]:[]">
            </el-image>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :type="column.type"
          :label="column.label"
          :prop="column.prop"
          :align="column.align"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
        >
        </el-table-column>
      </template>

      <!--操作列-->
      <el-table-column
        :label="config.tableOperate.label"
        :align="config.tableOperate.align"
        :width="config.tableOperate.width"
        :min-width="config.tableOperate.minWidth"
        :fixed="config.tableOperate.fixed"
        v-if="config.tableOperate.show">
        <template slot-scope="scope">
          <el-button
            size="mini"
            v-for="(button,index) in config.tableOperate.operate"
            :key="index"
            :type="button.type"
            :disabled="button.status && scope.row[button.statusName]"
            @click="handleClick(button,scope.$index, scope.row)">
            {{button.name}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="paginationData.total"
        :page-size="paginationData.pageSize"
        @current-change="currentPageChange($event)"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import config from "./js/tableConfig.js";
  import tagMethods from "./js/tagMethods";

  export default {
    name: "TableOne",
    props: {
      configKey: {  //config配置数据对应的key
        type: String,
        require: true
      },
      tableData: {
        type: Array,
        default: () => {
          return []
        }
      },
      paginationData: {
        type: Object,
        default() {
          return {
            total: 100,
            pageSize: 5,
          }
        }
      }
    },
    data() {
      return {
        config: null,
      }
    },
    created() {
      this.config = config[this.configKey];
    },
    methods: {
      handleClick(button, index, row) {
        if (button.popUp) {
          this.$confirm(`${button.popUpText}`, {
            title: button.popUpTitle,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
          }).then(() => {
            this.$emit(`${button.event}`, {index, row});
          }).catch(() => {
            return
          });
          return;
        }
        this.$emit(`${button.event}`, {index, row});
      },
      tagTypeMethods(data, key) {
        return tagMethods[key](data)
      },
      currentPageChange(event) {
        const arr = ['pageNum', event];
        this.$emit('paginationChange', arr)
      }
    }
  }
</script>

<style scoped lang="scss">
  .table-one {
    background-color: var(--Bg-Color);
    box-shadow: 0 2px 4px rgba(31,30,47,0.1);
    padding: 30px;
    box-sizing: border-box;
    border-radius: 8px;
    .el-table {
      background-color: transparent;
    }

    /deep/ .el-table tr,
    /deep/ .el-table th {
      background-color: transparent;
    }

    .table-pagination {
      display: flex;
      margin-top: 15px;

      .el-pagination {
        margin-left: auto;
        padding: 0;
      }
    }
  }
</style>
