<template>
  <div class="w-full pb-safe bg-navy-500 flex">
    <button
      v-for="item in items"
      :key="item.key"
      class="h-16 text-gray-100 flex-1 flex items-center justify-center"
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
          class="text-xl"
        />
        <h1
          v-if="item.title"
          class="-mb-1 pt-0.5 text-sm font-medium"
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