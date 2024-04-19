<template>
  <div>
    <div class="w-sidebarWidth bg-white/70 hidden sm:block h-full py-8 px-3">
      <div class="max-h-sidebarHeight h-full flex flex-col justify-between">descktop sidebar</div>
    </div>
    <!-- MOBILE ONLY sidebar layout -->
    <div class="sm:hidden w-full px-4 pt-4 flex justify-between items-center">MOBILE sidebar</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.router-link-active {
  background: white;
}
</style>
