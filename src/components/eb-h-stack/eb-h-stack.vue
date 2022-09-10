<template>
  <div :class="component.variants({ spacing })">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-h-stack-model";

defineProps<{
	spacing?: number;
}>();
</script>