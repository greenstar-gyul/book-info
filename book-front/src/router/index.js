import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import BookUpdate from '../views/BookUpdate.vue'
import BookRegi from '@/views/BookRegi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookView,
    },
    {
      path: '/book/update/:id',
      name: 'bookUpdate',
      component: BookUpdate,
    },    
    {
      path: '/book/register',
      name: 'bookRegister',
      component: BookRegi,
    },
  ],
})

export default router
