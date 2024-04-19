import type { CoctailCode } from '@/shared/types';

export interface CocktailResponse {
  drinks: Cocktail[];
}

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: any;
  strTags?: string;
  strVideo: any;
  strCategory: string;
  strIBA?: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed: string;
  dateModified?: string;
}

export type CocktailDetailed = Cocktail & {
  [key: `strIngredient${number}`]: string;
  [key: `strMeasure${number}`]: string;
};

export type DrinkRequest = {
  [key in CoctailCode]?: CocktailResponse;
};

export type CocktailStoreState = {
  drinkRequests: DrinkRequest;
  loading: boolean;
  error: string | null;
};
