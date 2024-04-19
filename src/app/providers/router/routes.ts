import type { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/shared/config';
import { LayoutNames } from '@/shared/config/layoutNames';
import { coctailCodes } from '@/shared/config/coctailCodes';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/${coctailCodes[0]}`,
  },
  {
    path: '/:id',
    name: RouteName.Cocktail,
    component: () => import('@/pages/CocktailPage.vue'),
    meta: {
      layout: LayoutNames.Sidebar,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouteName.NotFound,
    component: () => import('@/pages/NotFoundPage.vue'),
  },
];

export default { routes };