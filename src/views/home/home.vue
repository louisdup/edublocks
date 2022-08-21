<template>
  <template v-if="view.showMobileTemplate()">
    <home-mobile />
  </template>
  <template v-if="view.showDesktopTemplate()">
    <home-desktop />
  </template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { view } from "./home-model";

// Import templates.
import HomeDesktop from "./templates/home-desktop.vue";
import HomeMobile from "./templates/home-mobile.vue";

// Initalise the view.
onMounted(() => {
	view.init();
});
</script>