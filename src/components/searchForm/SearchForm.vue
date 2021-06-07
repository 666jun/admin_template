<template>
  <div class="search">
    <div class="search-form">
      <!--输入-->
      <div class="search-item" v-for="(item,index) in config" :key="index">
        <template v-if="item.type==='input'">
          <label>{{item.title}}</label>
          <el-input v-model="form[item.formKey]" :placeholder="item.placeholder"></el-input>
        </template>

        <!--选项-->
        <template v-if="item.type==='select'">
          <label>{{item.title}}</label>
          <el-select
            v-model="form[item.formKey]"
            :multiple="item.multiple"
            :collapse-tags="item.collapseTags"
            :clearable="item.clearable"
            :placeholder="item.placeholder">
            <el-option
              v-for="optionItem in data[item.dataKey]"
              :key="optionItem[item.vForKey]"
              :label="optionItem[item.labelKey]"
              :value="optionItem[item.valueKey]">
            </el-option>
          </el-select>
        </template>

        <!--级联-->
        <template v-if="item.type==='cascader'">
          <label>{{item.title}}</label>
          <el-cascader
            v-model="form[item.formKey]"
            :options="data[item.dataKey]"
            :props="{
              expandTrigger: item.expandTrigger,
              multiple: item.multiple,
              value:item.valueKey,
              label:item.labelKey,
              children:item.childrenKey,
              checkStrictly:item.checkStrictly
            }"
            :collapse-tags="item.collapseTags"
            :clearable="item.clearable"
            :placeholder="item.placeholder"
          >
          </el-cascader>
        </template>
      </div>

      <div class="search-item-none"></div>
      <div class="search-item-none"></div>
      <div class="search-item-none"></div>
    </div>

    <div class="search-footer">
      <el-button type="primary" icon="el-icon-search" size="small" @click="search()">搜索</el-button>
      <el-button type="info" size="small" icon="el-icon-refresh-right" @click="clearSearch()">重置</el-button>
    </div>
  </div>
</template>

<script>
	import config from "./js/searchConfig";

	export default {
		name: "SearchForm",
		props: {
			configKey: {  //config配置数据对应的key
				type: String,
				required: true
			},
			data: {  // 选项的数据等等
				type: Object,
				required: true
			}
		},
		data() {
			return {
				config: null,
				form: {}
			}
		},
		created() {
			this.config = config[this.configKey];
		},
		methods: {
			search() {
				this.$emit('search', this.form)
			},
			clearSearch() {
				Object.keys(this.form).forEach(key => {
					this.form[key] = '';
				})
				this.$emit('clearSearch')
			},
		}
	}
</script>

<style scoped lang="scss">
  .search {
    background-color: var(--Bg-Color);
    box-shadow: 0 2px 4px rgba(31,30,47,0.1);
    width: 100%;
    margin-bottom: 20px;
    padding: 25px 15px;
    box-sizing: border-box;
    border-radius: 8px;
  }

  .search .search-form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .search .search-form .search-item {
    flex: 23%;
    max-width: 23%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    label {
      display: inline-block;
      white-space: nowrap;
      margin-right: 10px;
      height: 35px;
      line-height: 35px;
      text-align: right;
      color: var(--Font-Color1);
    }

    .el-select {
      flex: 1;
    }

    .el-cascader {
      flex: 1;
    }
  }
  .search-item-none{
    display: flex;
    flex: 23%;
    max-width: 23%;
    height: 0;
  }

  .search .search-footer {
    margin-top: 5px;
    padding-right: 80px;
    display: flex;
    justify-content: center;

    .el-button {
      padding: 10px 30px;
    }
  }

  /deep/ .el-input__inner {
    height: 35px;
    line-height: 35px;
  }

  /deep/ .el-input__icon { // 选择框图标垂直居中
    line-height: 35px;
  }
  .el-cascader{   //级联选择图标垂直居中
    line-height: 35px;
  }
</style>
