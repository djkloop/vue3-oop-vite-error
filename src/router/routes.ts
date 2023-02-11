import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView'

export const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
]
