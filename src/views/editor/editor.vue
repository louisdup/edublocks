<template>
  <template v-if="view.showMobileTemplate()">
    <editor-mobile />
  </template>
  <template v-if="view.showDesktopTemplate()">
    <editor-desktop />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./editor-model";

// Import templates.
import EditorDesktop from "./templates/editor-desktop.vue";
import EditorMobile from "./templates/editor-mobile.vue";

// Initalise the view.
onMounted(() => {
	view.init();
});
</script>