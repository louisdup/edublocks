<template>
  <div :class="component.variants({ backgroundColor })">
    <div class="space-y-14">
      <div class="w-full flex justify-center">
        <div>
          <div class="scale-125">
            <img
              class="h-full animate-top-slide-in"
              src="/images/loading/top-block.svg"
            >
            <img
              class="h-full animate-middle-slide-in"
              src="/images/loading/middle-block.svg"
            >
            <img
              class="h-full animate-bottom-slide-in"
              src="/images/loading/bottom-block.svg"
            >
          </div>
        </div>
      </div>

      <div
        v-if="title || subtitle"
        class="w-full max-w-lg text-center space-y-2"
      >
        <h1
          v-if="title"
          class="font-semibold text-2xl text-gray-700"
        >
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="mt-1 text-gray-500"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-loading-model";

defineProps<{
	title?: string;
	subtitle?: string;
	backgroundColor?: string;
}>();
</script>