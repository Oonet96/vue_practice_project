import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GitRepoView from '../views/GitRepoView.vue';
import BookmarkView from '../views/BookmarkView.vue';
import SummaryView from '../views/SummaryView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/github',
    name: 'github',
    component: GitRepoView,
    props:true
  },
  {
    path: '/book',
    name: 'book',
    component: BookmarkView,
    props:true
  },
  {
    path: '/note',
    name: 'note',
    component: SummaryView,
    props:true
  }
  
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
