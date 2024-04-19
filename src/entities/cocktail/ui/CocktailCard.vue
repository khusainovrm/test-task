<template>
  <div>{{ drink.idDrink }}</div>
</template>

<script setup lang="ts">
import type { Cocktail } from '@/entities/cocktail';

defineProps<{
  drink: Cocktail;
}>();
</script>

<style scoped></style>
