import { useCocktailDetailed } from './useCocktailDetailed';
import type { Cocktail } from './types';
import { describe, expect, test } from 'vitest';

describe('useCocktailDetailed', () => {
  test('should correctly extract ingredients with measures', () => {
    const cocktail: Cocktail = {
      idDrink: '1',
      strIngredient1: 'Ingredient1',
      strIngredient2: 'Ingredient2',
      strMeasure1: 'Measure1',
      strMeasure2: 'Measure2',
    };

    const expectedIngredients = ['Ingredient1:  Measure1', 'Ingredient2:  Measure2'];

    const { ingredients } = useCocktailDetailed(cocktail);

    expect(ingredients.value).toStrictEqual(expectedIngredients);
  });

  test('should correctly extract ingredients without measures', () => {
    const cocktail: Cocktail = {
      idDrink: '1',
      strIngredient1: 'Ingredient1',
      strIngredient2: 'Ingredient2',
    };

    const expectedIngredients = ['Ingredient1', 'Ingredient2'];

    const { ingredients } = useCocktailDetailed(cocktail);

    expect(ingredients.value).toStrictEqual(expectedIngredients);
  });
});
