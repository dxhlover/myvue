import Vue from 'vue'
import Router from 'vue-router'
import $store from '@/store/index'
import { routerMode } from '@/config/env'

Vue.use(Router)

//vue异步组件和webpack的【代码分块点】功能结合，实现了按需加载
/*
*   首页相关页面
*/
const IndexRoute = () => import ('@/views/Index/indexRoute');
// 首页
const Index = () => import ('@/views/Index');

/*
*   banner活动相关页面 此处只为后期添加的除了兑换类活动、报名类活动、限制类活动、资讯详情以外的扩展活动做准备
*/
const NewsListRoute = () => import ('@/views/NewsList/newsListRoute');
const NewsList = () => import('@/views/NewsList')

/*
*   我的相关页面
*/
const MineRoute = () => import ('@/views/AboutUS/mineRoute');
// 关于我们页面
const AboutUS = () => import ('@/views/AboutUS');


const router = new Router({
  mode: routerMode || routerMode == '' ? routerMode : 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: IndexRoute,
      children: [
        {
          path: '',
          name: 'index',
          meta: { title: '首页', useMeteTitle: true },
          component: Index
        },
      ]
    },
    {
      path: '/mine',
      component: MineRoute,
      children: [
        {
          path: 'aboutUS/:version',
          name: 'aboutUS',
          meta: { title: '关于我们', useMeteTitle: true },
          component: AboutUS
        }
      ]
    },
    {
      path: '/newsList',
      component: NewsListRoute,
      children: [
        {
          path: '',
          name: 'newsList',
          meta: { title: '新闻列表', useMeteTitle: true },
          component: NewsList
        },
      ]
    }
  ]
})



// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.useMeteTitle) {
    document.title = to.meta.title
  }else {
    document.title = 'xxxx'
  }
  next()
  // if($store.state.common.token != '' || to.path == '/login') {
  //   next()
  // }else {
  //   next({
  //     path: "/login",
  //     query: {
  //       redirect: to.fullPath
  //     }
  //   });
  // }
});

export default router;
