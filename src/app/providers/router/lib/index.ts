import type { RouteLocationNormalized } from 'vue-router';
import { cocktailCodes } from '@/shared/config/cocktailCodes';

export const isValidCocktailCode = (to: RouteLocationNormalized) => {
  //@ts-ignore
  return to.fullPath !== '/' && cocktailCodes.includes(to.params.id?.toString().toLowerCase());
};
