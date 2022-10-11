<template>
  <div :class="component.variants({ backgroundColor, spacing, paddingT, paddingB, paddingL, paddingR, isFullHeight, isFullWidth })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-h-stack-model";

defineProps<{
	backgroundColor?: string;
	spacing?: number;
	paddingT?: number;
	paddingB?: number;
	paddingL?: number;
	paddingR?: number;
	isFullHeight?: boolean;
	isFullWidth?: boolean;
}>();
</script>