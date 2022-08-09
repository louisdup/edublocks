<template>
  <div class="h-screen w-screen bg-gray-100 flex flex-col">
    <div class="h-full w-full flex">
      <desktop-nav />
      <div class="h-full w-full overflow-hidden p-10 max-w-7xl mx-auto space-y-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopNav from "./components/desktop-nav/desktop-nav.vue";
</script>