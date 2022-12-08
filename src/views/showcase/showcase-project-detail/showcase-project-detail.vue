<template>
  <template v-if="view.showDesktopTemplate()">
    <showcase-project-detail-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./showcase-project-detail-model";
  
// Import templates.
import ShowcaseProjectDetailDesktop from "./templates/showcase-project-detail-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>