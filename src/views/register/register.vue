<template>
  <template v-if="view.showDesktopTemplate()">
    <register-desktop />
  </template>
</template>
  
<script setup lang="ts">
import { view } from "./register-model";
  
// Import templates.
import RegisterDesktop from "./templates/register-desktop.vue";

view.init();
</script>