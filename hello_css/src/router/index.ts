import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutIndex from "@/views/sys_layout/LayoutIndex.vue"


const routes: Array<RouteRecordRaw> = [

  // home
  {
    path: '/home',
    alias: '/',
    name: 'home',
    component: LayoutIndex,
    children: [{
      path: "/home",
      alias: '/',
      name: "home",
      component: () => import('../views/HomeView.vue')
    }]
  },

  // c001
  {
    path: '/c001_wave_button',
    name: '波浪按钮',
    component: LayoutIndex,
    children: [{
      path: "/c001_wave_button",
      component: () => import('../views/c001_wave_button/PageIndex.vue')
    }]
  },

  // c002
  {
    path: '/c002_flow_border',
    name: '流光边框',
    component: LayoutIndex,
    children: [{
      path: "/c002_flow_border",
      component: () => import('../views/c002_flow_border/PageIndex.vue')
    }]
  },

  // c003
  {
    path: '/c003_neon_light',
    name: '霓虹灯特效',
    component: LayoutIndex,
    children: [{
      path: "/c003_neon_light",
      component: () => import('../views/c003_neon_light/PageIndex.vue')
    }]
  },

  // c004
  {
    path: '/c004_click_like',
    name: '点赞动效',
    component: LayoutIndex,
    children: [{
      path: "/c004_click_like",
      component: () => import('../views/c004_click_like/PageIndex.vue')
    }]
  },

  // c005
  {
    path: '/c005_scroll',
    name: '瀑布流滚动',
    component: LayoutIndex,
    children: [{
      path: "/c005_scroll",
      component: () => import('../views/c005_scroll/PageIndex.vue')
    }]
  },

  // c006
  {
    path: '/c006_aspect_ratio',
    name: '保持宽高比',
    component: LayoutIndex,
    children: [{
      path: "/c006_aspect_ratio",
      component: () => import('../views/c006_aspect_ratio/PageIndex.vue')
    }]
  },

  // c007
  {
    path: '/c007_cool_button',
    name: '玻璃灯光按钮',
    component: LayoutIndex,
    children: [{
      path: "/c007_cool_button",
      component: () => import('../views/c007_cool_button/PageIndex.vue')
    }]
  },

  // c008
  {
    path: '/c008_glass_card',
    name: '玻璃卡片',
    component: LayoutIndex,
    children: [{
      path: "/c008_glass_card",
      component: () => import('../views/c008_glass_card/PageIndex.vue')
    }]
  },

  // c009
  {
    path: '/c009_drop_card',
    name: '水滴卡片',
    component: LayoutIndex,
    children: [{
      path: "/c009_drop_card",
      component: () => import('../views/c009_drop_card/PageIndex.vue')
    }]
  },

  // c010
  {
    path: '/c010_particle',
    name: '粒子特效',
    component: LayoutIndex,
    children: [{
      path: "/c010_particle",
      component: () => import('../views/c010_particle/PageIndex.vue')
    }]
  },

  // c011
  {
    path: '/c011_rating',
    name: '圆形进度条',
    component: LayoutIndex,
    children: [{
      path: "/c011_rating",
      component: () => import('../views/c011_rating/PageIndex.vue')
    }]
  },

  // c012
  {
    path: '/c012_wave_text',
    name: '文字水流',
    component: LayoutIndex,
    children: [{
      path: "/c012_wave_text",
      component: () => import('../views/c012_wave_text/PageIndex.vue')
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
