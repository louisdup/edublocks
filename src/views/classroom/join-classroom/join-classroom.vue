<template>
  <template v-if="view.showDesktopTemplate()">
    <join-classroom-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./join-classroom-model";
  
// Import templates.
import JoinClassroomDesktop from "./templates/join-classroom-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>