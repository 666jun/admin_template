import Vue from 'vue'
import Vuex from 'vuex'
import globalSetting from "../setting/globalSetting";
import {children, pathArr} from "../router/children";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    style: styleInit(),
    historyRoute: historyRouteInit(),
  },
  mutations: {
    setStyle: (state, data) => {
      state.style = data;
      document.documentElement.setAttribute('theme', data.theme);
      window.localStorage.setItem('style', JSON.stringify(data));
    },
    pushHistoryRoute: (state, item) => {
      state.historyRoute.push(item)
    },
    removeHistoryRoute: (state, data) => {
      state.historyRoute.splice(data.index, 1)
    }
  },
  actions: {},
  modules: {}
})

function styleInit() {
  let style = window.localStorage.getItem('style')  //获取主题配置，如果没有默认全局设置
  if (style) {
    let data = JSON.parse(style);
    document.documentElement.setAttribute('theme', data.theme);
    return data;
  }
  document.documentElement.setAttribute('theme', globalSetting.theme);
  return {
    layout: globalSetting.layout,
    theme: globalSetting.theme
  }
}

function historyRouteInit() {
  if (!pathArr.includes(globalSetting.indexPath)) {
    console.error('配置文件的首页路径有误！');
    return [];
  } else {
    let allChildren = flatArr(children);
    let obj = allChildren.find((item) => {
      return item.path === globalSetting.indexPath
    })
    return [obj]
  }
}
// 递归获取路由所有的children 使其全部同级
function flatArr(arr, target = []) {
  for (let i of arr) {
    target.push(i);
    if (i.children) {
      flatArr(i.children, target);
    }
  }
  return target
}

export default store


