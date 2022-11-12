<template>
  <template v-if="view.showDesktopTemplate()">
    <classroom-detail-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./classroom-detail-model";
  
// Import templates.
import ClassroomDetailDesktop from "./templates/classroom-detail-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>