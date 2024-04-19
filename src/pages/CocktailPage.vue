<template>
  <div>
    <CocktailCard />
    <pre> {{ cocktailStore.drinkRequests[route.params.id as CoctailCode] }}</pre>
  </div>
</template>

<script setup lang="ts">
import { CocktailCard, useCocktailStore } from '@/entities/cocktail';
import { useRoute } from 'vue-router';
import type { CoctailCode } from '@/shared/types';

const cocktailStore = useCocktailStore();
const route = useRoute();

cocktailStore.getCocktail(route.params.id as CoctailCode);
</script>

<style scoped></style>
