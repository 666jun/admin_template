import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layouts/layout'  //页面整体布局框架页面
import {children, pathArr} from './children'
import historyRoute from '../utils/historyRoute/index'
import globalSetting from "../setting/globalSetting";
import nprogress from 'nprogress'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: globalSetting.indexPath,
    component: Layout,
    children: children
  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

nprogress.configure({
  easing: 'ease',  // 动画方式
  speed: 500,  // 递增进度条的速度
  showSpinner: false, // 是否显示加载icon
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.1 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
  if (globalSetting.nprogress) {
    nprogress.start();
  }
  historyRoute.canOrNotPush(to);
  next();
});
router.afterEach(() => {
  nprogress.done();
})

export default router
