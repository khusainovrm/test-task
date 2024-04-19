<template>
  <main class="layout flex flex-col sm:flex-row">
    <SideBar />
    <div ref="contentDiv" id="contentDiv" class="flex-1 overflow-auto">
      <slot :key="useRoute().params.id" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { SideBar } from '@/shared/ui/sidebar';
import { useRoute } from 'vue-router';
</script>

<style scoped lang="scss">
.layout {
  max-width: 1024px;
  margin: 0 auto;
  background: linear-gradient(180deg, #f2f8fd 0%, #dfe8ef 100%);
  min-height: 100dvh;
}
</style>
