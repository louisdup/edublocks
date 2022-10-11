<template>
  <div :class="component.variants({ backgroundColor, spacing, margin, paddingT, paddingB, paddingL, paddingR, isFullHeight, isFullWidth })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-v-stack-model";

defineProps<{
	backgroundColor?: string;
	spacing?: number;
	margin?: number;
	paddingT?: number;
	paddingB?: number;
	paddingL?: number;
	paddingR?: number;
	isFullHeight?: boolean;
	isFullWidth?: boolean;
}>();
</script>