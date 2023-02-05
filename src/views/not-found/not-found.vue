<template>
  <template v-if="view.showDesktopTemplate()">
    <not-found-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { view } from "./not-found-model";
  
// Import templates.
import NotFoundDesktop from "./templates/not-found-desktop.vue";
</script>