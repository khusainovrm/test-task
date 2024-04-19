<template>
  <main class="flex flex-col sm:flex-row">
    <SideBar />
    <div ref="contentDiv" id="contentDiv" class="flex-1 overflow-auto">
      <transition name="fade" mode="out-in">
        <slot :key="useRoute().params.id" />
      </transition>
    </div>
  </main>
</template>

<script setup lang="ts">
import { SideBar } from '@/shared/ui/sidebar';
import { useRoute } from 'vue-router';
</script>
