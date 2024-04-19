import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { isValidCocktailCode } from '@/app/providers/router/lib';
import { RouteName } from '@/shared/config';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  if (isValidCocktailCode(to)) {
    next();
  } else if (to.name !== RouteName.NotFound) {
    next({ name: RouteName.NotFound });
  } else {
    next();
  }
});

export default {
  router,
};
