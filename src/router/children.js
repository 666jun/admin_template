import Components from './components.js'

export const pathArr = ['/home','/home/detail','/about','/user','/404','/401'];

export const children = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      icon:'el-icon-s-home'
    },
    component: Components.home,
    children: [
      {
        path: '/home/detail',
        name: 'homeDetail',
        meta: {
          title: '首页详情',
          icon:'el-icon-s-help'
        },
        component: Components.homeDetail
      },
      {
        path: '/home/loading',
        name: 'homeLoading',
        meta: {
          title: '加载页',
          icon:'el-icon-s-help'
        },
        component: Components.Loading
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
      icon:'el-icon-s-order'
    },
    component: Components.about
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户',
      icon:'el-icon-user-solid'
    },
    component: Components.user,
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '错误404',
      icon:'el-icon-error'
    },
    component: Components.Page404
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '错误401',
      icon:'el-icon-error'
    },
    component: Components.Page401
  },
];







