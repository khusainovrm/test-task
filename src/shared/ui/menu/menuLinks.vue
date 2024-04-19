<template>
  <div class="flex flex-col justify-between">
    <router-link v-for="link in links" :to="link" :key="link" @click="emit('handleClick')">
      <div class="py-2 px-4">
        {{ link }}
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  links: string[];
}>();
const emit = defineEmits<{
  handleClick: [];
}>();
</script>
