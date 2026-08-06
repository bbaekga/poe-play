import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'stash',
        name: 'stash',
        component: () => import('pages/StashPage.vue')
      },
      {
        path: 'beasts',
        name: 'beasts',
        component: () => import('pages/BeastsPage.vue')
      },
      {
        path: 'uniqueDust',
        name: 'uniqueDust',
        component: () => import('pages/UniqueDustPage.vue')
      },
      {
        path: 'reCombination',
        name: 'reCombination',
        component: () => import('pages/ReCombinationPage.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
