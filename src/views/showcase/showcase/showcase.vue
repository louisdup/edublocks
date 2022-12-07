<template>
  <template v-if="view.showDesktopTemplate()">
    <showcase-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./showcase-model";
  
// Import templates.
import ShowcaseDesktop from "./templates/showcase-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>