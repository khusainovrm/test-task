import { beforeEach, describe, expect, type MockedFunction, test, vi } from 'vitest';
import { useCocktailStore } from './useCocktailStore';
import axios from 'axios';
import { createPinia, setActivePinia, type Store } from 'pinia';
import type { CocktailStoreState } from '@/entities/cocktail';

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
    drinks: [],
  },
};
let store: Store<
  'cocktailStore',
  CocktailStoreState,
  {},
  { getCocktail(code: 'mojito' | 'margarita' | 'a1' | 'kir'): void }
>;

beforeEach(async () => {
  setActivePinia(createPinia());
  store = useCocktailStore();
  (axios.get as MockedFunction<typeof axios.get>).mockResolvedValue(mockResponse);
});

describe('useCocktailStore', () => {
  test('getCocktail action - cocktail requested', async () => {
    await store.getCocktail(code);

    expect(axios.get).toHaveBeenCalledWith('/json/v1/1/search.php?s=mojito');
    expect((axios.get as any).mock.calls.length).toBe(1);
  });

  test('getCocktail action - successful request', async () => {
    // Initial state checks
    expect(store.loading).toBe(false);
    expect(store.error).toBe(null);

    store.getCocktail(code);

    // Expect loading state as async request is initiated
    expect(store.loading).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async operations to complete

    expect(store.drinkRequests[code]).toStrictEqual({ drinks: [] });
    expect(store.loading).toBe(false);
  });

  test('getCocktail action - request throwing error', async () => {
    (axios.get as MockedFunction<typeof axios.get>).mockImplementationOnce(() =>
      Promise.reject({ response: { status: 400, data: { error: { message: 'Error' } } } }),
    );

    // Initial state checks
    expect(store.loading).toBe(false);
    expect(store.error).toBe(null);

    store.getCocktail(code);

    // Expect loading state as async request is initiated
    expect(store.loading).toBe(true);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async operations to complete

    expect(store.error).toBe('Error');
    expect(store.loading).toBe(false);
  });
});
