<template>
  <div class="h-full flex flex-col sm:flex-row">
    <SideBar />
    <div class="flex-1 overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SideBar } from '@/shared/ui/sidebar';
</script>

<style scoped></style>
