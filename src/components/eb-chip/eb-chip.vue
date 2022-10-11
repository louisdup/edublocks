<template>
  <button :class="component.variants({ isFullWidth })">
    <div class="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100">
      <img
        :src="thumbnail"
        class="w-4"
      >
    </div>
    <div class="text-sm">
      <h1 class="text-gray-900 font-medium">
        {{ title }}
      </h1>
      <p class="text-gray-500">
        {{ subtitle }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { component } from "./eb-chip-model";

defineProps<{
	thumbnail: string;
	title: string;
	subtitle?: string;
	isFullWidth?: boolean;
}>();
</script>