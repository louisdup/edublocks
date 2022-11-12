<template>
  <div :class="component.variants({ backgroundColor })">
    <div class="scale-125">
      <img
        class="h-full animate-top-slide-in"
        src="/images/loading/top-block.svg"
      >
      <img
        class="h-full animate-middle-slide-in"
        src="/images/loading/middle-block.svg"
      >
      <img
        class="h-full animate-bottom-slide-in"
        src="/images/loading/bottom-block.svg"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-loading-model";

defineProps<{
	backgroundColor?: string;
}>();
</script>