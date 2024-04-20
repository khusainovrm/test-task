import { beforeEach, describe, expect, type MockedFunction, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CocktailPage from './CocktailPage.vue';
import { createPinia, setActivePinia, type Store } from 'pinia';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { type CocktailStoreState, useCocktailStore } from '@/entities/cocktail';

vi.mock('vue-router');
vi.mock('axios', () => {
  return {
    default: {
      post: vi.fn(),
      get: vi.fn(),
      delete: vi.fn(),
      put: vi.fn(),
      create: vi.fn().mockReturnThis(),
      interceptors: {
        request: {
          use: vi.fn(),
          eject: vi.fn(),
        },
        response: {
          use: vi.fn(),
          eject: vi.fn(),
        },
      },
    },
  };
});

const code = 'mojito';
const mockResponse = {
  data: {
    drinks: [
      {
        idDrink: 1,
        strDrink: 'mojito1',
      },
      {
        idDrink: 2,
        strDrink: 'mojito2',
      },
    ],
  },
};
let store: Store<
  'cocktailStore',
  CocktailStoreState,
  {},
  { getCocktail(code: 'mojito' | 'margarita' | 'a1' | 'kir'): void }
>;

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = vi.fn().mockImplementation(intersectionObserverMock);

(useRoute as MockedFunction<any>).mockReturnValue({
  params: vi.fn(),
});

(axios.get as MockedFunction<typeof axios.get>).mockResolvedValue(mockResponse);

beforeEach(async () => {
  setActivePinia(createPinia());
  store = useCocktailStore();
});

describe('CocktailPage', () => {
  test('mount component', async () => {
    expect(CocktailPage).toBeTruthy();
  });

  test('after fetch text shown', async () => {
    const wrapper = mount(CocktailPage);

    expect(wrapper.text()).toContain('Loading...');

    await store.getCocktail(code);

    expect(wrapper.text()).toContain('mojito1List of ingredients:mojito2List of ingredients:');
  });
});
