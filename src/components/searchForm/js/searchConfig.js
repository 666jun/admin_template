/****************************************************************************************************
 *** 配置查找组件 如果一样可以进行复用                                            ***
 ****************************************************************************************************/
const config = {
	//配置一
	configOne: [
		inputMethod({formKey: 'name', title: '姓名'}),
		selectMethod({dataKey: 'options', formKey: 'food', title: '食品',}),
		cascaderMethod({dataKey: 'options2', formKey: 'com', title: '组件'})
	]
}
export default config

function inputMethod(config) {
	let inputObj = {
		type: 'input',   // 指定类型为输入框
		formKey: config.formKey, // 返回的对象接受的key
		placeholder: config.placeholder ||'请输入', //输入框的默认标语
		title: config.title  //输入框的标题名称
	};
	return inputObj;
}

/****************  selectObj属性key说明  **********************************************************
 *  1.  type [String]           ---默认--- 指定类型为选项框(默认即为‘select’)
 *  2.  dataKey [String]        ---必须--- 传入选项框所需要的数据（即为data对象对应的key名）
 *  3.  formKey [String]        ---必须--- 指定返回的对象接收的 key ()
 *  4.  title [String]          ---必须--- 输入框的标题名称
 *  5.  valueKey [String]       ---选择--- 【不传默认为 value】 选项数据值对应的 key
 *  6.  labelKey [String]       ---选择--- 【不传默认为 label】 选项框列表选项的名称对应的 key
 *  7.  vForKey [String]        ---选择--- 【不传默认为 value】 v-for循环用于指定 :key 的对应key
 *  8.  placeholder [String]    ---选择--- 【不传默认为 请选择】 选择框的默认标语
 *  9.  clearable [Boolean]     ---选择--- 【不传默认为 true】是否可以清空选项
 *  10. multiple [Boolean]      ---选择--- 【不传默认为 false】是否开启多选
 *  11. collapseTags [Boolean]  ---选择--- 【不传默认为 false】多选的时候 是否折叠选择结果
 * ************************************************************************************************/
function selectMethod(config) {
	let arr = ['dataKey', 'formKey', 'title']
	for (let i of arr) {
		if (!config[i]) {
			console.error(`${i} 设置出错，请前往配置文件确认`)
			return {}
		}
	}
	let selectObj = {
		type: 'select',
		dataKey: config.dataKey,
		formKey: config.formKey,
		title: config.title,
		valueKey: config.valueKey || 'value',
		labelKey: config.labelKey || 'label',
		vForKey: config.vForKey || 'value',
		placeholder: config.placeholder || '请选择',
		clearable: config.clearable || true,
		multiple: config.multiple || false,
		collapseTags: config.collapseTags || false,
	}
	return selectObj;
}


/****************  cascaderObj属性key说明  **********************************************************
 *  1.  type [String]           ---默认--- 指定类型为选项框(默认即为‘cascader’)
 *  2.  dataKey [String]        ---必须--- 传入选项框所需要的数据（即为data对象对应的key名）
 *  3.  formKey [String]        ---必须--- 指定返回的对象接收的 key ()
 *  4.  title [String]          ---必须--- 输入框的标题名称
 *  5.  valueKey [String]       ---选择--- 【不传默认为 value】 选项数据值对应的 key
 *  6.  labelKey [String]       ---选择--- 【不传默认为 label】 选项框列表选项的名称对应的 key
 *  7.  childrenKey [String]    ---选择--- 【不传默认为 children】 选项数据的子数据的 key
 *  7.  placeholder [String]    ---选择--- 【不传默认为 请选择】 选择框的默认标语
 *  8.  clearable [Boolean]     ---选择--- 【不传默认为 true】是否可以清空选项
 *  9.  multiple [Boolean]      ---选择--- 【不传默认为 false】是否开启多选
 *  10. collapseTags [Boolean]  ---选择--- 【不传默认为 false】多选的时候 是否折叠选择结果
 *  11. checkStrictly [Boolean] ---选择--- 【不传默认为 false】是否严格的遵守父子节点不互相关联(即是父节点也可以进行选中)
 *  12. expandTrigger [String]  ---选择--- 【不传默认为 hover】级联展开触发方式可以选择click展开，默认hover
 * ************************************************************************************************/
function cascaderMethod(config) {
	let arr = ['dataKey', 'formKey', 'title']
	for (let i of arr) {
		if (!config[i]) {
			console.error(`${i} 设置出错，请前往配置文件确认`)
			return {}
		}
	}
	let cascaderObj = {
		type: 'cascader',
		dataKey: config.dataKey,
		formKey: config.formKey,
		title: config.title,
		valueKey: config.valueKey || 'value',
		labelKey: config.labelKey || 'label',
		childrenKey: config.childrenKey || 'children',
		placeholder: config.placeholder || '请选择',
		clearable: config.clearable || true,
		multiple: config.multiple || false,
		collapseTags: config.collapseTags || false,
		checkStrictly: config.checkStrictly || false,
		expandTrigger: config.expandTrigger || 'hover'
	}
	return cascaderObj;
}
