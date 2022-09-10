<template>
  <div class="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
    <mobile-header :title="title" />
    <div class="h-full w-full p-4 space-y-5 overflow-y-auto">
      <slot />
    </div>
    <mobile-nav />
  </div>
</template>

<script setup lang="ts">
import MobileNav from "./components/mobile-nav/mobile-nav.vue";
import MobileHeader from "./components/mobile-header/mobile-header.vue";

defineProps<{
	title?: string;
}>();
</script>