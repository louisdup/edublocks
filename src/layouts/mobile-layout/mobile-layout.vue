<template>
  <div class="h-screen w-screen flex flex-col pt-safe bg-gray-100 overflow-hidden">
    <div class="h-full w-full p-6 space-y-5 overflow-y-auto">
      <slot />
    </div>
    <mobile-nav />
  </div>
</template>

<script setup lang="ts">
import MobileNav from "./components/mobile-nav/mobile-nav.vue";
</script>