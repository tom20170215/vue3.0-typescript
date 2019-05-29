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
      meta: {
        main: true,
      },
    },
    {
      path: '/habit',
      name: 'habit',
      component: () => import(/* webpackChunkName: "Habit" */ './views/Habit/Habit.vue'),
      meta: {
        main: true,
      },
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import(/* webpackChunkName: "Setting" */'./views/Setting/Setting.vue'),
      meta: {
        main: true,
      },
    },
    {
      path: '/new',
      component: () => import(/* webpackChunkName: "New" */'./views/New/New.vue'),
      children: [
        {
          path: 'library',
          name: '习惯库',
          component: () => import(/* webpackChunkName: "NewLibrary" */'./views/New/library/NewLibrary.vue'),
        },
        {
          path: 'Habit',
          name: '习惯',
          component: () => import(/* webpackChunkName: "NewHabit" */'./views/New/habit/NewHabit.vue'),
        }
      ]
    }
  ],
});
