import { describe, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import CocktailCard from './CocktailCard.vue';

describe('CocktailCard', () => {
  test('mount component', async () => {
    expect(CocktailCard).toBeTruthy();

    const wrapper = shallowMount(CocktailCard, {
      props: {
        drink: {
          idDrink: '1',
          strDrink: 'Vino',
          strInstructions: 'mix',
        },
      },
    });

    expect(wrapper.text()).toContain('Instructions:');
    expect(wrapper.text()).toContain('List of ingredients:');
    expect(wrapper.text()).toContain('Vino');
  });
});
