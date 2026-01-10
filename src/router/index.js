import { createRouter, createWebHistory } from 'vue-router'
// Ensure these paths match your actual filenames in src/views/
import Home from '../views/Home.vue'
import Breathing from '../views/Breathing.vue'
import Wellness from '../views/Wellness.vue'
import AiSupport from '../views/AiSupport.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/breathing', component: Breathing },
  { path: '/wellness', component: Wellness },
  { path: '/ai-support', component: AiSupport },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// THIS LINE IS REQUIRED
export default router