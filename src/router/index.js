import Vue from 'vue';
import Router from 'vue-router';
import routes from './routers';
import { setTitle } from '@/libs/util';
// import config from '@/config';
// const { homeName } = config;
Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});
// 登录页路由名称
const LOGIN_PAGE_NAME = 'login';
// 路由变化前，处理事件
router.beforeEach((to, from, next) => {
  // if (to.name !== LOGIN_PAGE_NAME) {
  //   // 未登录且要跳转的页面不是登录页
  //   next({
  //     name: LOGIN_PAGE_NAME // 跳转到登录页
  //   });
  // } else if (to.name === LOGIN_PAGE_NAME) {
  //   // 未登陆且要跳转的页面是登录页
  //   next(); // 直接跳转
  // }
  // else if (token && to.name === LOGIN_PAGE_NAME) {
  //   // 已登录且要跳转的页面是登录页
  //   next({
  //     name: homeName // 跳转到homeName页
  //   });
  // }
  next();
});
// 路由变化后，处理事件
router.afterEach(to => {
  // 设置浏览器标题
  setTitle(to, router.app);
  // iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
