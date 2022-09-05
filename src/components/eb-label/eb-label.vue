<template>
  <p :class="component.variants({ color })">
    {{ label }}
  </p>
</template>

<script setup lang="ts">
import { component } from "./eb-label-model";

defineProps<{
	label: string;
	color?: string;
}>();
</script>