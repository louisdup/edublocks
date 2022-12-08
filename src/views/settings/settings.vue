<template>
  <template v-if="view.showDesktopTemplate()">
    <settings-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./settings-model";
  
// Import templates.
import SettingsDesktop from "./templates/settings-desktop.vue";
  
// Initalise the view.
onMounted(() => {
	view.init();
});
</script>