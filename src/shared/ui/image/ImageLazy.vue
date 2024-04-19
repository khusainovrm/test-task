<template>
  <div ref="htmlImg">
    <transition name="fade">
      <img v-if="visible" v-bind="$attrs" :src="src" :alt="alt" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

withDefaults(
  defineProps<{
    src: string;
    alt?: string;
  }>(),
  {
    alt: '',
  },
);

const observer = ref<IntersectionObserver | null>(null);
const htmlImg = ref<HTMLImageElement | null>(null);
const visible = ref(false);

onMounted(() => {
  const el = htmlImg.value;

  if (el) {
    observer.value = new IntersectionObserver(([e]) => {
      if (e.intersectionRatio > 0 && !visible.value) {
        visible.value = true;
      }
    });

    observer.value.observe(el);
  }
});

onUnmounted(() => {
  if (observer.value && htmlImg.value) {
    observer.value.unobserve(htmlImg.value);
  }
});
</script>
