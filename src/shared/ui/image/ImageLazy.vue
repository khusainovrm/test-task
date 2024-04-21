<template>
  <div ref="htmlImg" :class="{ 'bg-slate-100': !error }">
    <transition name="fade">
      <img
        v-if="visible"
        v-bind="$attrs"
        :src="src"
        :alt="alt"
        class="transition-opacity"
        :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
        @load="loaded = true"
        @error="error = true"
      />
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
const loaded = ref(false);
const error = ref(false);

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
