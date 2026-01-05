// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../Views/InicioView.vue'
import Home from '../Views/HomeView.vue'
import Menu from '../Views/MenuView.vue'


const routes = [
  { path: '/', name: 'Inicio', component: Inicio },
  { path: '/home', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
