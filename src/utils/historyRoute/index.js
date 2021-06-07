import store from "../../store/index";

function canOrNotPush(item) {
  let currentRoute = store.state.historyRoute;
  for (let route of currentRoute){
    if (item.path===route.path){ //如果找到有一样的路由那么不要重复push
      return
    }
  }
  store.commit('pushHistoryRoute',item);
}
function closeAll() {
  let arr = [1,2,3]
  let arr2 = arr.concat();
  arr2[0] = 5;
}
closeAll();

export default {
  canOrNotPush
}
