<template>
  <template v-if="view.showDesktopTemplate()">
    <classroom-list-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./classroom-list-model";
  
// Import templates.
import ClassroomListDesktop from "./templates/classroom-list-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>