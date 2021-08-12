import { createRouter, createWebHashHistory } from 'vue-router'
import UserCenter from '../views/user-center.vue'
import Recommend from '../views/recommend.vue'
import Search from '../views/search.vue'
import Singer from '../views/singer.vue'
import TopList from '../views/top-list.vue'
import SingerDetail from '../views/singer-detail.vue'
import album from '../views/album.vue'
import topDetail from '../views/top-detail.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: album
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: topDetail
      }
    ]
  },
  {
    path: '/user',
    component: UserCenter
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
