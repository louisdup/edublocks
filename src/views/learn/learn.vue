<template>
  <template v-if="view.showDesktopTemplate()">
    <learn-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./learn-model";
  
// Import templates.
import LearnDesktop from "./templates/learn-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>