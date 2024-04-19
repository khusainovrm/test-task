<template>
  <component :is="layout">
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
