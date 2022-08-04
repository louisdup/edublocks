<template>
  <template v-if="ScreenUtilities.isDesktopLayout.value">
    <home-desktop />
  </template>
  <template v-else>
    Mobile
  </template>
</template>

<script setup lang="ts">
import { ScreenUtilities } from "@/utilities/screen-utilities";
import HomeDesktop from "./home-desktop.vue";
</script>