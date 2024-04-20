<template>
  <div
    v-if="showMobileMenu || !isMobile"
    class="fixed inset-0 z-20 bg-slate-400 p-4 sm:static sm:w-full sm:max-w-52 sm:bg-slate-200 sm:block sm:py-8 sm:px-3"
  >
    <div class="sm:hidden text-right mb-8">
      <span class="cursor-pointer" @click="showMobileMenu = false">&#x2715;</span>
    </div>
    <!-- @vue-ignore -->
    <MenuLinks :links="cocktailCodes" @handleClick="showMobileMenu = false" />
  </div>
  <!-- MOBILE ONLY  -->
  <div class="sm:hidden sticky z-10 top-0 h-14 bg-slate-500 w-full px-4 flex justify-end items-center">
    <HambergerIcon v-model="showMobileMenu" />
  </div>
</template>

<script setup lang="ts">
import { cocktailCodes } from '@/shared/config/cocktailCodes';
import HambergerIcon from '@/shared/ui/hamburger/HambergerIcon.vue';
import { computed, onBeforeUnmount, ref } from 'vue';
import MenuLinks from '@/shared/ui/menu/menuLinks.vue';

const showMobileMenu = ref(false);

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const isMobile = computed(() => windowWidth.value < 640);

window.addEventListener('resize', handleResize);

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
