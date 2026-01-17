import { createRouter, createWebHistory } from 'vue-router'

// 1. Define your routes
// Using dynamic imports (component: () => import(...)) for better performance
const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: () => import('../views/Home.vue') 
  },
  { 
    path: '/breathing', 
    name: 'Breathing',
    component: () => import('../views/Breathing.vue') 
  },
  { 
    path: '/wellness', 
    name: 'Wellness',
    component: () => import('../views/Wellness.vue') 
  },
  { 
    path: '/ai-support', 
    name: 'AiSupport',
    component: () => import('../views/AiSupport.vue') 
  }
]

// 2. Create the router instance
const router = createRouter({
  history: createWebHistory(), // Uses the browser's history API for clean URLs (no #)
  routes,
})

// 3. Export the router so main.js can use it
export default router