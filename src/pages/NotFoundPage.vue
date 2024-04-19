<template>
  <div class="h-full grid place-items-center">
    <div class="flex flex-col gap-4 items-center">
      <span class="text-4xl">Not found</span>
      <Button class="my-button" @click="toMain">To main page</Button>
      <span class="text-9xl">👹</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toMain = () => {
  router.push('/');
};
</script>

<style scoped></style>
