<template>
  <p :class="component.variants({ align, color, isFullWidth })">
    {{ label }}
  </p>
</template>

<script setup lang="ts">
import { component } from "./eb-label-model";

defineProps<{
	label: string;
	align?: string;
	color?: string;
	isFullWidth?: boolean;
}>();
</script>