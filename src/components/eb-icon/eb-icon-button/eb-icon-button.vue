<template>
  <button
    :class="component.variants({ isActive })"
    @click="$emit('click')"
  >
    <eb-icon
      :icon="icon"
      :color="color"
    />
  </button>
</template>

<script setup lang="ts">  
import { component } from "./eb-icon-button-model";

defineProps<{
	icon: Array<string>;
	color?: string;
	isActive?: boolean;
}>();

defineEmits(["click"]);
</script>