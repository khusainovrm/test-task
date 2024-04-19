import type { Cocktail } from './types';
import { computed } from 'vue';

/**
 * Computed variable that extracts ingredients and measures from the given props.drink object.
 *
 * @param {Cocktail} drink - The cocktail object from which to extract ingredients and measures.
 * @returns {Object} - An object containing the computed variable `ingredients`.
 */
export const useCocktailDetailed = (drink: Cocktail) => {
  const extractNumber = (str: string | undefined, prefix: string) => Number(str?.replace(prefix, ''));
  const findMeasure = (measureList: string[], ingredientNumber: number) =>
    measureList.find((strM) => extractNumber(strM, 'strMeasure') === ingredientNumber);

  /**
   * Computed variable that extracts ingredients and measures from the given props.drink object.
   *
   * @returns {string[]} Array of ingredients with measures, if available.
   */
  const ingredients = computed(() => {
    const keys = Object.keys(drink);

    const strIngredient = keys
      .filter((str) => str.startsWith('strIngredient'))
      .filter((i) => drink[i as keyof Cocktail]);

    const strMeasure = keys.filter((str) => str.startsWith('strMeasure'));

    return strIngredient.map((ingredient, index) => {
      const measure = strMeasure[index];
      const ingredientNumber = extractNumber(ingredient, 'strIngredient');
      const measureNumber = extractNumber(measure, 'strMeasure');

      const foundMeasure =
        ingredientNumber === measureNumber ? measure : findMeasure(strMeasure, ingredientNumber) || '';

      if (drink[foundMeasure as keyof Cocktail]) {
        return `${drink[ingredient as keyof Cocktail]}:  ${drink[foundMeasure as keyof Cocktail]}`;
      }

      return drink[ingredient as keyof Cocktail];
    });
  });

  return {
    ingredients,
  };
};
