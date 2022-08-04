<template>
  <eb-sidebar
    :items="component.items"
    :logo="true"
    :active="component.getActiveItem()"
    :minimize="component.shouldSidebarBeMinimized()"
  />
</template>

<script setup lang="ts">
import { component } from "./desktop-nav-model";
</script>