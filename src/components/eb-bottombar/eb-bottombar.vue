<template>
  <div class="w-full pb-safe bg-white border-t border-gray-200 flex">
    <button
      v-for="item in items"
      :key="item.key"
      class="h-[3.75rem] flex-1 flex items-center justify-center"
      :class="component.getItemActiveClassList(item)"
      @click="component.onItemClick(item)"
    >
      <component
        :is="item.component"
        v-if="item.component"
        v-bind="item.componentProps"
      />
      <div
        v-else
        class="text-center"
      >
        <eb-icon
          v-if="item.icon"
          :icon="item.icon"
          :color="component.getIconActiveColor(item)"
          class="text-lg"
        />
        <h1
          v-if="item.title"
          class="-mb-1 pt-0.5 text-xs"
        >
          {{ item.title }}
        </h1>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Data } from "../types";
import { EbBottombarModel } from "./eb-bottombar-model";
import { EbBottombarItem } from "./eb-bottombar-types";

const props: Data = defineProps<{
	items: Array<EbBottombarItem>;
	active: string;
}>();

const component: EbBottombarModel = new EbBottombarModel(props);
</script>