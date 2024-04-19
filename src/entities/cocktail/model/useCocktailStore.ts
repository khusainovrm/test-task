import { defineStore } from 'pinia';
import { searchCocktail } from '../api';
import type { CocktailStoreState } from '@/entities/cocktail';
import type { CoctailCode } from '@/shared/types';
import { getErrorMessage } from '@/shared/api';

export const useCocktailStore = defineStore('cocktailStore', {
  state: (): CocktailStoreState => ({
    drinkRequests: {},
    loading: false,
    error: null,
  }),
  actions: {
    async getCocktail(code: CoctailCode) {
      if (this.drinkRequests[code]) {
        return;
      }
      try {
        this.loading = true;
        this.error = null;
        this.drinkRequests[code] = await searchCocktail(code);
      } catch (error) {
        this.error = getErrorMessage(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
