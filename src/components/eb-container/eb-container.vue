<template>
  <div :class="component.variants({ padding, isFullWidth })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-container-model";

defineProps<{
	padding?: number;
	isFullWidth?: boolean;
}>();
</script>