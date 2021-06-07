const Components = {
  Page404: () => import('../views/404.vue'),
  Page401: () => import('../views/401.vue'),
  home: () => import('../views/home/home.vue'),
  homeDetail: () => import('../views/home/page/detail.vue'),
  about: () => import('../views/about/about.vue'),
  user: () => import('../views/user/user.vue'),
  Loading: () => import('../components/loading/Loading.vue'),
};
export default Components
