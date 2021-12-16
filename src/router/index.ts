import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import EnterPage from '../views/EnterPage.vue';
import MainView from '../views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Enter',
    component: EnterPage,
  },
  {
    path: '/main',
    name: 'MainView',
    component: MainView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
