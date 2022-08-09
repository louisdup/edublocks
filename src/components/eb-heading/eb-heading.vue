<template>
  <div class="flex items-center">
    <h1 :class="component.variants({ size, weight, color })">
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
	label: string,
	size: string,
	weight: string,
	color: string
}>();
</script>