<template>
  <eb-bottombar
    :items="component.getItems()"
    :active="component.getActiveItem()"
  />
</template>

<script setup lang="ts">
import { component } from "./mobile-nav-model";
</script>