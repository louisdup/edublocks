<template>
  <div
    v-if="isLoading"
    class="p-3 space-y-2 animate-pulse"
  >
    <div class="h-40 w-60 bg-gray-200 rounded-md" />
    <div class="h-4 w-36 bg-gray-200" />
    <div class="h-4 w-24 bg-gray-200" />
  </div>

  <div
    v-else
    class="p-3 hover:bg-gray-200 rounded-lg transition-colors space-y-2 group inline-block cursor-pointer"
  >
    <div class="h-40 w-60 rounded-md bg-gray-200 relative flex items-center ">
      <img
        :src="image"
        class="object-cover h-full w-full rounded-md"
      >
      <div class="hidden group-hover:block">
        <div class="bg-white h-7 w-7 rounded-md absolute right-2 top-2 transition-all flex items-center justify-center text-gray-900 shadow">
          <eb-icon :icon="['far', 'ellipsis']" />
        </div>
      </div>
    </div>
    <div
      v-if="title || subtitle"
      class="w-60"
    >
      <h1 class="text-sm font-medium text-gray-900 truncate">
        {{ title }}
      </h1>
      <p class="text-sm text-gray-500 truncate">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	subtitle: string;
	image: string;
	isLoading: boolean;
}>();
</script>