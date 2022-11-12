<template>
  <div :class="component.variants({ isFullHeight, isFullWidth, backgroundColor })">
    <div class="text-center py-8 px-4">
      <eb-icon
        v-if="icon"
        :icon="icon"
        size="4xl"
        color="gray"
        class="mb-4"
      />
      <h1 class="font-semibold text-sm text-gray-700">
        {{ title }}
      </h1>
      <p
        v-if="subtitle"
        class="mt-1 text-sm text-gray-500"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-empty-state-model";

defineProps<{
	title: string;
	subtitle?: string;
	icon?: Array<string>;
	backgroundColor?: string;
	isFullHeight?: boolean;
	isFullWidth?: boolean;
}>();
</script>