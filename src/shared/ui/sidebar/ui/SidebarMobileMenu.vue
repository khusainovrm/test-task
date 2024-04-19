<template>
  <div class="fixed inset-0 bg-slate-400 p-4">
    <div class="text-right"><span class="cursor-pointer" @click="value = false">&#x2715;</span></div>
    <!-- @vue-ignore -->
    <MenuLinks :links="coctailCodes" @handleClick="value = false" class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import MenuLinks from '@/shared/ui/menu/menuLinks.vue';
import { coctailCodes } from '@/shared/config/coctailCodes';

const value = defineModel<boolean>();
</script>

<style scoped></style>
