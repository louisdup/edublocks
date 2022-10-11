<template>
  <font-awesome-icon
    :icon="icon"
    :class="component.getClassesForIcon(size, color, backgroundColor)"
  />
</template>

<script setup lang="ts">
import { component } from "./eb-icon-model";

defineProps<{
	icon: Array<string>;
	color?: string;
	size?: string;
	backgroundColor?: string;
}>();
</script>