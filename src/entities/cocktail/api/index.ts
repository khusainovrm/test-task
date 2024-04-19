import api from '@/shared/api';
import type { CocktailResponse } from '@/entities/cocktail';

const API_URL = '/json/v1/1';

export async function searchCocktail(code: string): Promise<CocktailResponse> {
  const { data } = await api.get(`${API_URL}/search.php?s=${code}`);
  return data;
}
