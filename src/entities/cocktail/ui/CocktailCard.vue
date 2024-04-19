<template>
  <div class="p-2 flex flex-col gap-4 sm:gap-2 sm:flex-row">
    <!--    content-->
    <div class="flex-1 order-2 sm:order-1">
      <h1 class="mb-2">{{ drink.strDrink }}</h1>

      <section class="mb-8">
        <p>{{ drink.strCategory }}</p>
        <p>{{ drink.strAlcoholic }}</p>
        <p>{{ drink.strGlass }}</p>
      </section>

      <section class="mb-8">
        <h3>Instructions:</h3>
        <p>{{ drink.strInstructions }}</p>
      </section>

      <section>
        <h2>List of ingredients:</h2>
        <p v-for="item in ingredients" :key="item">{{ item }}</p>
      </section>
    </div>

    <!--    image-->
    <div class="flex-1 order-1 sm:order-2">
      <ImageLazy :src="drink.strDrinkThumb!" class="rounded-2xl aspect-[4/3] object-cover" alt="drink" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageLazy from '@/shared/ui/image/ImageLazy.vue';
import type { Cocktail } from '../model';
import { useCocktailDetailed } from '../model';

const props = defineProps<{
  drink: Cocktail;
}>();

const { ingredients } = useCocktailDetailed(props.drink);
</script>
