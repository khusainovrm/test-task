<template>
  <!-- DESCKTOP ONLY sidebar layout -->
  <div class="w-full max-w-52 bg-slate-200 hidden sm:block py-8 px-3">
    <!-- @vue-ignore -->
    <MenuLinks :links="coctailCodes" />
  </div>
  <!-- MOBILE ONLY sidebar layout -->
  <div class="sm:hidden sticky z-10 top-0 h-8 bg-slate-500 w-full px-4 flex justify-end items-center">
    <HambergerIcon v-model="showMobileMenu" />
    <SidebarMobileMenu v-if="showMobileMenu" v-model="showMobileMenu"/>
  </div>
</template>

<script setup lang="ts">
import { coctailCodes } from '@/shared/config/coctailCodes';
import HambergerIcon from '@/shared/ui/hamburger/HambergerIcon.vue';
import { ref } from 'vue';
import MenuLinks from '@/shared/ui/menu/menuLinks.vue';
import SidebarMobileMenu from '@/shared/ui/sidebar/ui/SidebarMobileMenu.vue';

const showMobileMenu = ref(false);
</script>
