<template>
  <template v-if="view.showDesktopTemplate()">
    <assignment-submissions-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./assignment-submissions-model";
  
// Import templates.
import AssignmentSubmissionsDesktop from "./templates/assignment-submissions-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>