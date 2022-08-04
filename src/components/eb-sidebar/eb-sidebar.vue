<template>
  <div class="bg-navy-500 h-full flex-none">
    <div
      v-if="logo"
      class="px-6 pt-6 pb-2"
    >
      <img
        :src="component.getSidebarLogoImage()"
        class="h-10"
      >
    </div>
    <div class="overflow-y-auto p-4 space-y-1">
      <button
        v-for="item in items"
        :key="item.key"
        :class="active === item.key ? 'bg-white/10' : 'focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 focus:ring-offset-navy-500 cursor-pointer hover:bg-white/10 transition-all'"
        class="flex items-center space-x-4 rounded-md p-4 text-left text-gray-200 outline-none"
      >
        <div class="flex h-5 w-5 items-center justify-center">
          <eb-icon
            v-if="item.icon"
            :icon="item.icon"
            class="fa-fw text-xl"
          />
        </div>
        <span
          v-if="item.title && !minimize"
          class="w-44 text-sm font-medium"
        > 
          {{ item.title }} 
        </span>
      </button>
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
	logo: boolean;
	active: string;
}>();

const component: EbSidebarModel = new EbSidebarModel(props);
</script>
