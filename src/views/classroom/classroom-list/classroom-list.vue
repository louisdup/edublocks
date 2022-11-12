<template>
  <template v-if="view.showMobileTemplate()">
    <classroom-list-mobile />
  </template>
  <template v-if="view.showDesktopTemplate()">
    <classroom-list-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./classroom-list-model";
  
// Import templates.
import ClassroomListDesktop from "./templates/classroom-list-desktop.vue";
import ClassroomListMobile from "./templates/classroom-list-mobile.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>