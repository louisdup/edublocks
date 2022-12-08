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
    <div
      v-if="image"
      class="h-40 w-60 rounded-md bg-gray-200 relative flex items-center"
      @click="$emit('click')"
    >
      <img
        :src="image"
        class="object-cover h-full w-full rounded-md"
      >
    </div>

    <div
      v-else
      :class="component.thumbnailVariants({ color: thumbnailColor })"
      @click="$emit('click')"
    >
      <div class="font-bold text-7xl text-white/10">
        <h1 class="ml-4">
          {{ component.getThumbnailBackgroundFirstLine(title) }}
        </h1>
        <h1 class="-ml-6 -mt-2">
          {{ component.getThumbnailBackgroundSecondLine(title) }}
        </h1>
      </div>

      <div class="absolute inset-0 flex items-center justify-center">
        <div class="space-y-2 text-center">
          <div
            v-if="thumbnailIcon"
            class="h-14 w-14 bg-white rounded-full flex items-center justify-center mx-auto"
          >
            <img
              :src="thumbnailIcon"
              class="h-8 w-8"
            >
          </div>
          
          <div class="overflow-hidden w-60 px-4">
            <h1 class="text-xl font-semibold text-white drop-shadow-sm truncate">
              {{ title }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="title || subtitle"
      class="w-60 relative"
    >
      <div @click="$emit('click')">
        <h1 class="text-sm font-medium text-gray-900 truncate">
          {{ title }}
        </h1>
        <p class="text-sm text-gray-500 truncate">
          {{ subtitle }}
        </p>
      </div>
      <div class="absolute right-0 top-1.5">
        <eb-dropdown
          v-if="dropdownOptions"
          :options="dropdownOptions"
          placement="right-end"
        >
          <button class="bg-white h-7 w-7 rounded-md transition-all flex items-center justify-center text-gray-900 shadow-sm">
            <eb-icon :icon="['far', 'ellipsis']" />
          </button>
        </eb-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-card-model";
import { EbDropdownOption } from "../eb-dropdown/eb-dropdown-types";

defineProps<{
	title: string;
	subtitle?: string;
	image?: string;
	thumbnailColor?: string;
	thumbnailIcon?: string;
	isLoading?: boolean;
	dropdownOptions?: Array<Array<EbDropdownOption>>;
}>();

defineEmits(["click"]);
</script>