const globalSetting = {
  // 首页路由
  indexPath: '/home',
  // 路由白名单(不进行拦截)
  routeWhiteArr: ['/login', '/404', '/401'],
  // 页面加载进度条 true:显示
  nprogress: true,
  // 头部面包屑是否显示(横向布局没有面包屑，如需要可自行引入)
  crumb:true,
  // 是否开启主题配置
  themeSwitch:false,
  // 默认布局 垂直:vertical 横向:horizontal
  layout: 'vertical',
  // 默认主题风格样式 可在assets/css/theme下定制样式主题
  theme: 'default',
  // 主题风格列表 新增的主题需要在下面添加
  themeArr: [{value: 'default', name: '飞龙在天'}, {value: 'dark', name: '暗夜猎手'}]
}

export default globalSetting
