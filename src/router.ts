import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/habit',
      name: 'habit',
      component: () => import(/* webpackChunkName: "Habit" */ './views/Habit/Habit.vue'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName */'./views/Setting/Setting.vue'),
    },
  ],
});
