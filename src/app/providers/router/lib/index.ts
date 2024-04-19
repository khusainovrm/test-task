import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { coctailCodes } from '@/shared/config/coctailCodes';
import { RouteName } from '@/shared/config';

export const checkForRedirect = (to: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.fullPath !== '/' && !coctailCodes.includes(to.params.id as string)) {
    next({ name: RouteName.NotFound });
  }
};
