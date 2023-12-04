import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPages from '../Pages/MemoriesPages.vue';



const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPages
  },
  {
    path: '/memories/:id',
    component: ()=> import("@/Pages/MemoriesDetailsPage.vue")
  },
  {
    path: '/memories/add',
    component: ()=> import("@/Pages/AddMemoryPage.vue")
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
