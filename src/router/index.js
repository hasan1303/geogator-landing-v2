import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'
import AGB from '../views/AGB.vue'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/impressum', component: Impressum },
    { path: '/datenschutz', component: Datenschutz },
    { path: '/agb', component: AGB },
  ]
})

export default router