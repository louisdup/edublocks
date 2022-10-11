<template>
  <eb-sidebar
    :items="component.getItems()"
    :active="component.getActiveItem()"
    :minimize="component.shouldSidebarBeMinimized()"
  >
    <user-menu :minimize="component.shouldSidebarBeMinimized()" />
  </eb-sidebar>
</template>

<script setup lang="ts">
import UserMenu from "../user-menu/user-menu.vue"; 
import { component } from "./desktop-nav-model";
</script>