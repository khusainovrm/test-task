<template>
  <div class="px-4 py-8 sm:py-12">
    <transition name="fade" mode="out-in">
      <div v-if="loading">loading</div>
      <div v-else-if="error">error</div>
      <div v-else-if="drinks" class="flex flex-col gap-8 sm:gap-12">
        <CocktailCard v-for="drink in drinks" :key="drink.idDrink" :drink="drink" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { CocktailCard, useCocktailStore } from '@/entities/cocktail';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import type { CoctailCode } from '@/shared/types';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const route = useRoute();
const cocktailStore = useCocktailStore();
const { drinkRequests, loading, error } = storeToRefs(cocktailStore);

const routeIdParams = computed(() => route.params.id as CoctailCode);

const drinks = computed(() => {
  return drinkRequests.value[routeIdParams.value]?.drinks || null;
});

// init
cocktailStore.getCocktail(routeIdParams.value);

onBeforeRouteUpdate((to, _, next) => {
  cocktailStore.getCocktail(to.params.id as CoctailCode);
  next();
});
</script>
