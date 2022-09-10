<template>
  <template v-if="view.showMobileTemplate()">
    <projects-mobile />
  </template>
  <template v-if="view.showDesktopTemplate()">
    <projects-desktop />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./projects-model";

// Import templates.
import ProjectsDesktop from "./templates/projects-desktop.vue";
import ProjectsMobile from "./templates/projects-mobile.vue";

// Initalise the view.
onMounted(() => {
	view.init();
});
</script>