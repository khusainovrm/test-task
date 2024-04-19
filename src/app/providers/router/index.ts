import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import { checkForRedirect } from '@/app/providers/router/lib';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  checkForRedirect(to, next);
  next();
});

export default {
  router,
};
