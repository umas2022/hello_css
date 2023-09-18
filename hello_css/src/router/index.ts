import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LayoutIndex from "@/views/sys_layout/LayoutIndex.vue"


const routes: Array<RouteRecordRaw> = [

  // home
  {
    path: '/home',
    alias:'/',
    name: 'home',
    component: LayoutIndex,
    children: [{
      path: "/home",
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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
