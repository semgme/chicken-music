import { createRouter, createWebHashHistory } from 'vue-router'
import UserCenter from '../views/user-center.vue'
import Recommend from '../views/recommend.vue'
import Search from '../views/search.vue'
import Singer from '../views/singer.vue'
import TopList from '../views/top-list.vue'

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/top-list',
    component: TopList
  },
  {
    path: '/user',
    component: UserCenter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
