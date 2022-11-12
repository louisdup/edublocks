<template>
  <div class="w-full flex items-center space-x-4">
    <div
      v-if="thumbnail || icon"
      class="h-8 flex items-center justify-center flex-none"
    >
      <img
        v-if="thumbnail"
        :src="thumbnail"
        class="h-full rounded-full"
      >

      <eb-icon
        v-if="icon"
        :icon="icon"
        :color="iconColor"
        size="2xl"
      />
    </div>

    <div>
      <h1 class="text-gray-900 text-sm font-medium">
        {{ title }}
      </h1>
      <p class="text-gray-500 text-xs">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	subtitle?: string;
	thumbnail?: string;
	icon?: Array<string>;
	iconColor?: string;
}>();
</script>