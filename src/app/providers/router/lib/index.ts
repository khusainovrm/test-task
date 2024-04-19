import type { RouteLocationNormalized } from 'vue-router';
import { coctailCodes } from '@/shared/config/coctailCodes';

export const isValidCocktailCode = (to: RouteLocationNormalized) => {
  //@ts-ignore
  return to.fullPath !== '/' && coctailCodes.includes(to.params.id?.toString().toLowerCase());
};
