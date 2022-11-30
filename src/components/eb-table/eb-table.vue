<template>
  <div class="w-full space-y-4">
    <eb-heading
      v-if="label"
      :label="label"
      size="normal"
      color="gray"
      weight="medium"
    />

    <div
      v-if="component.isTableVisible(items, isLoading)"
      class="w-full bg-white rounded-lg shadow-sm p-2 space-y-2"
    >
      <button
        v-for="item in items"
        :key="item.title"
        class="w-full p-3 flex items-center text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors rounded-md group"
      >
        <div
          class="flex items-center space-x-4 w-full"
          @click="item.action()"
        >
          <div
            v-if="item.thumbnail || item.icon"
            class="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center flex-none"
          >
            <img
              v-if="item.thumbnail"
              :src="item.thumbnail"
              :class="component.getThumbnailWidth(item.isThumbnailFullWidth)"
            >

            <eb-icon
              v-if="item.icon"
              :icon="item.icon"
              color="darkGray"
            />
          </div>
          <div class="text-sm leading-6 items-center overflow-hidden">
            <h1 class="font-medium text-gray-900">
              {{ item.title }}
            </h1>
            <div class="flex text-xs space-x-2 text-gray-500">
              <div
                v-for="(metadata, index) in item.meta"
                :key="metadata.key"
                class="flex items-center space-x-2 overflow-hidden"
              >
                <eb-heading
                  :label="metadata.label"
                  size="xs"
                  weight="normal"
                  :color="component.getMetaItemColor(metadata.color)"
                  class="truncate"
                />
                <div
                  v-if="index !== item.meta.length - 1"
                  class="h-1 w-1 rounded-full bg-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="item.dropdownOptions"
          class="hidden group-hover:block group-focus:block"
        >
          <eb-dropdown
            :options="item.dropdownOptions"
            placement="bottom-end"
          >
            <button class="bg-white h-7 w-7 rounded-md transition-all flex items-center justify-center text-gray-900 shadow-sm">
              <eb-icon :icon="['far', 'ellipsis']" />
            </button>
          </eb-dropdown>
        </div>
      </button>

      <div v-if="isLoading">
        <div
          v-for="item in 5"
          :key="item"
          class="w-full p-3 flex items-center space-x-4 rounded-md animate-pulse"
        >
          <div class="h-9 w-9 rounded-lg bg-gray-200" />
          <div class="space-y-0.5">
            <div class="h-4 w-24 bg-gray-200" />
            <div class="h-4 w-72 bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
    
    <eb-empty-state
      v-if="component.isEmptyStateVisible(items, isLoading)"
      :title="emptyStateTitle"
      :subtitle="emptyStateSubtitle"
      background-color="gray"
    />
  </div>
</template>

<script setup lang="ts">
import { EbTableItem } from "./eb-table-types";
import { component } from "./eb-table-model";

defineProps<{
	label?: string;
	items: Array<EbTableItem>;
	isLoading?: boolean;
	emptyStateTitle?: string;
	emptyStateSubtitle?: string;
}>();
</script>