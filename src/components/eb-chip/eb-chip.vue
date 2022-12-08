<template>
  <button :class="component.variants({ isFullWidth })">
    <div class="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        class="w-4"
      >

      <eb-icon
        v-if="icon"
        :icon="icon"
        color="blue"
      />
    </div>
    <div>
      <h1 class="text-gray-900 font-medium text-sm">
        {{ title }}
      </h1>
      <p class="text-gray-500 text-xs">
        {{ subtitle }}
      </p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { component } from "./eb-chip-model";

defineProps<{
	thumbnail?: string;
	icon?: Array<string>;
	title: string;
	subtitle?: string;
	isFullWidth?: boolean;
}>();
</script>