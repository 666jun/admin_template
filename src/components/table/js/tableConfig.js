const config = {
  // 用户页面表格配置
  pageUser: {
    /********************************************************************************************************************************
     1  示例: {type:'index', prop: '序号', label:'序号', align: 'center', width:'50', minWidth:'50',},
     2  prop [String] 对应列内容的字段名
     3  label [String] 列标题
     4  align [String](left,center,right) 对齐方式
     5  type [String](index,selection,expand) 可以进行配置序号，多选框，可展开的行，可以自行定义。
     6  minWidth [String] 对应列的最小宽度，与width的区别是width是固定的min-width会把剩余宽度按比例分配给设置了min-width的列
     7  fixed [String Boolean](true, left, right) 列是否固定在左侧或者右侧，true 表示固定在左侧
     //以下 type=== tag 特有
     8. methodsKey [function] 标签的状态转换处理方法，请在tagMethods里面定义
     //以下 type=== img 特有
     9. widthSize [String Number] 图片宽度
     10. heightSize [String Number] 图片高度
     11. radius [String Number] 图片圆角
     12. preview [Boolean] 图片是否开启大图预览
     *********************************************************************************************************************************/
    tableColumn: [  //表格栏配置（表格数据列）
      {type: 'index', prop: '', label: '序号', align: 'center', width: '50', fixed: false},
      // 图片
      {
        type: 'img',
        prop: 'imgUrl',
        label: '图片',
        align: 'center',
        width: '150',
        widthSize: 80,
        heightSize: 80,
        radius: 6,
        preview: true
      },

      {prop: 'date', label: '日期', align: 'center', width: '150'},
      {prop: 'name', label: '名称', align: 'center'},
      {prop: 'address', label: '地址', align: 'center'},
      // 标签
      {type: 'tag', prop: 'tag', label: '标签', methodsKey: 'pageUserTag', align: 'center', width: '150'},
    ],
    /********************************************************************************************************************************
     * 1. show [Boolean] 是否显示操作列
     * 2. label [String] 列标题
     * 3. width [String] 列宽
     * 4. minWidth [String] 最小列宽同上
     * 5. align [String](left,center,right) 对齐方式
     * 6. fixed [String Boolean](true, left, right) 列是否固定在左侧或者右侧，true 表示固定在左侧
     * 7. operate [Array] 操作列的按钮配置
     * 7.1 type [String](primary,success,info,warning,danger) 还可以设为text文字按钮 按钮的属性颜色
     * 7.2 name [String] 按钮名称
     * 7.3 status [Boolean] true:开启 按钮是否需要开启状态控制，如果需要请指定状态字段
     * 7.4 statusName [String] 控制按钮状态的字段，（如果按钮通过多个字段控制，请通过逻辑处理之后变为一个字段控制）
     * 7.5 event [String] 按钮点击触发的事件名 请在<table-one>组件通过@事件函数名称接收回调函数
     * 7.6 popUp [Boolean] true:开启 按钮的操作是否需要二次确认弹窗，仅提供简单二次确认，如果弹窗复杂，请自定义弹窗组件
     * 7.7 popUpText [String] 二次确认弹窗的文字内容
     * 7.8 popUpTitle [String] 二次确认弹窗的标题
     *********************************************************************************************************************************/
    tableOperate: {
      show: true,
      label: '操作',
      width: '300',
      minWidth: '280',
      align: 'center',
      fixed: 'right',
      operate: [  //表格按钮配置
        {type: '', name: '编辑', status: true, statusName: 'edit', event: 'handleEdit'},
        {type: 'primary', name: '增加', status: true, statusName: 'add', event: 'handleAdd'},
        {type: 'info', name: '详情', status: false, event: 'handleDetail'},
        {
          type: 'danger', name: '删除', status: false, event: 'handleDelete',
          popUp: true, popUpText: '确认删除吗？', popUpTitle: '删除'
        }
      ]
    }
  }
}

export default config
