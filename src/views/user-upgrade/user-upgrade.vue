<template>
  <template v-if="view.showDesktopTemplate()">
    <user-upgrade-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { view } from "./user-upgrade-model";
  
// Import templates.
import UserUpgradeDesktop from "./templates/user-upgrade-desktop.vue";
import { onMounted } from "vue";

onMounted(() => {
	view.init();
});
</script>