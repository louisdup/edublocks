<template>
  <splitpanes class="default-theme">
    <slot />
  </splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<style>
.splitpanes__splitter{    
    width: 1rem !important;
    background-color: #e5e7eb !important;
    border-left: transparent !important;
}

.splitpanes__pane {
    background-color: transparent !important;
}

.splitpanes--vertical .splitpanes__pane {
  transition: none !important;
}
</style>