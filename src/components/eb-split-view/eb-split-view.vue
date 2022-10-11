<template>
  <splitpanes>
    <slot />
  </splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
</script>

<style lang="postcss">
.splitpanes__splitter {
  @apply relative;
}

.splitpanes__splitter:before {
  content: '';
  @apply absolute left-0 top-0 z-10;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  @apply -left-2 -right-2 h-full;
}

.splitpanes--vertical .splitpanes__pane {
  @apply !transition-none;
}
</style>