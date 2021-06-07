/****************************************************************************************************
 *** 此处用来定义标签状态规则的方法 在表格列配置tableColumn中  type要指定为tag  methods指定为此处定义的方法名 ***
 ****************************************************************************************************/

const tagMethods = {
  pageUserTag: (data) => {
    switch (data.tag) {
      case '未开始':
        return 'info'
      case '进行中':
        return 'warning'
      case '已完成':
        return 'success'
      case '等待中':
        return 'primary'
    }
  }
}

export default tagMethods
