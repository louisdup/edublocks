<template>
  <div class="bg-white flex flex-col border-r border-gray-200 p-2">
    <div class="h-full space-y-1 overflow-y-auto">
      <button
        v-for="item in items"
        :key="item.key"
        class="h-12 px-3 flex items-center justify-center space-x-4 rounded-lg text-left transition-colors"
        :class="component.getItemActiveClassList(item)"
        @click="component.onItemClick(item)"
      >
        <eb-icon
          :icon="item.icon"
          :color="component.getItemIconColor(item)"
          size="lg"
          class="fa-fw"
        />
        <span
          v-if="item.title && !minimize"
          class="font-medium text-sm w-40"
        >
          {{ item.title }} 
        </span>
      </button>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Data } from "../types";
import { EbSidebarModel } from "./eb-sidebar-model";
import { EbSidebarItem } from "./eb-sidebar-types";

const props: Data = defineProps<{
	items: Array<EbSidebarItem>;
	minimize: boolean;
	active: string;
}>();

const component: EbSidebarModel = new EbSidebarModel(props);
</script>
