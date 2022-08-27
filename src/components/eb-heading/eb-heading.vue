<template>
  <div class="flex items-center w-full">
    <h1 :class="component.variants({ align, size, weight, color, fullWidth })">
      {{ label }}
    </h1>
    <div class="ml-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-heading-model";

defineProps<{
	label: string;
	align: string;
	size: string;
	weight: string;
	color: string;
	fullWidth: boolean;
}>();
</script>