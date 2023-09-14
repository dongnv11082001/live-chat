import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Chatroom from '../views/Chatroom.vue';
import { auth } from '@/firebase/config';

const requireAuth = (to: any, from: any, next: any) => {
  if (!auth.currentUser) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
