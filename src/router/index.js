import Vue from 'vue'
import Router from 'vue-router'
// import test from '@/components/test'
import home from '@/components/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/card-draw'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '首页组件',
      }
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('@/views/home.vue'),
      meta: {
        title: '首页',
      }
    },
    {
      path: '/img',
      name: 'img',
      component: () => import('@/components/img-box.vue'),
      meta: {
        title: '首页',
      }
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@/views/example.vue'),
      meta: {
        title: '示例',
      }
    },
    {
      path: '/example2',
      name: 'example2',
      component: () => import('@/views/example2.vue'),
      meta: {
        title: '非父子组件间传值',
      },
    },
    {
      path: '/card-draw',
      name: 'card-draw',
      component: () => import('@/views/card-draw.vue'),
      meta: {
        title: '卡牌抽奖',
      }
    },
    {
      path: '/card-draw-example',
      name: 'card-draw-example',
      component: () => import('@/views/card-draw-example.vue'),
      meta: {
        title: '卡牌抽奖示例',
      }
    },
    {
      path: '/rotate',
      name: 'rotate',
      component: () => import('@/views/rotate.vue'),
      meta: {
        title: '旋转',
      }
    },
    {
      path: '/left-del',
      name: 'left-del',
      component: () => import('@/views/left-del.vue'),
      meta: {
        title: '左滑删除',
      }
    },
    {
      path: '/csClick',
      name: 'csClick',
      component: () => import('@/views/csClick.vue'),
      meta: {
        title: '获取元素自定义属性值',
      }
    },
  ]
})
