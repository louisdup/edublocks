<template>
  <div :class="component.variants({ backgroundColor, spacing, alignX, alignY, justifyContent, paddingT, paddingB, paddingL, paddingR, isFullHeight, isFullWidth })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-h-stack-model";

defineProps<{
	backgroundColor?: string;
	spacing?: number;
	alignX?: string;
	alignY?: string;
	justifyContent?: number;
	paddingT?: number;
	paddingB?: number;
	paddingL?: number;
	paddingR?: number;
	isFullHeight?: boolean;
	isFullWidth?: boolean;
}>();
</script>