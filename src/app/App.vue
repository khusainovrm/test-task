<template>
  <component :is="layout" class="app">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import { LayoutNames } from '@/shared/config/layoutNames';
import SidebarLayout from '@/layouts/SidebarLayout.vue';
import EmptyLayout from '@/layouts/EmptyLayout.vue';

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === LayoutNames.Sidebar) {
    return SidebarLayout;
  }
  return EmptyLayout;
});
</script>

<style lang="scss" scoped>
.app {
  max-width: 1024px;
  margin: 0 auto;
  background: linear-gradient(180deg, #f2f8fd 0%, #dfe8ef 100%);
  min-height: 100dvh;
}
</style>
