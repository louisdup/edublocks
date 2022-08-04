<template>
  <div class="h-screen w-screen bg-gray-100 flex flex-col">
    <div class="h-full w-full flex">
      <desktop-nav />
      <div class="h-full w-full overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DesktopNav from "./components/desktop-nav/desktop-nav.vue";
</script>