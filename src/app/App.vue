<template>
  <div class="wrapper">
    <div class="fix-scroll-jumping">
      <component :is="layout">
        <RouterView />
      </component>
    </div>
  </div>
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
.wrapper {
  overflow: hidden;
}

.fix-scroll-jumping {
  padding: 0 calc(20px - (100vw - 100%)) 0 0;
  margin-right: -20px;

  @include mobile {
    padding: 0;
    margin-right: initial;
  }
}
</style>
