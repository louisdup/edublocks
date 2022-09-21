<template>
  <div :class="component.variants({ spacing, isFullHeight, isFullWidth })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-v-stack-model";

defineProps<{
	spacing?: number;
	isFullHeight?: boolean;
	isFullWidth?: boolean;
}>();
</script>