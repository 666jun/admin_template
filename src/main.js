import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css'   //加载进度条样式
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'  //图标库
import './assets/icon-font/iconfont.js'  //icon-font图标库
import './assets/css/public.scss'           // 公共样式文件
import './assets/css/element.scss'      // element-ui样式修改文件
import '../src/components/js/components.js'  // 封装的公共组件
import globalSetting from "./setting/globalSetting"; //全局配置
import api from './utils/api/api.js'
import tools from './utils/tools/tools.js'

Vue.use(ElementUI);
Vue.prototype.$globalSetting = globalSetting;
Vue.prototype.$api = api;
Vue.prototype.$tools = tools;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
