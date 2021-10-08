import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Recipe from '../views/Recipe.vue';
import Letters from '../views/Letters.vue';
import { requireAuth } from './guard';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/recipes/:id',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/letters',
    name: 'Letters',
    component: Letters,
    beforeEnter: requireAuth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
