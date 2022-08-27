<template>
  <popper
    v-bind="$attrs"
    interactive
    :placement="placement"
    :show="component.state.isOpen"
  >
    <slot />
    <template #content>
      <div class="origin-top-right w-56 rounded-md shadow-lg bg-white border border-gray-200 focus:outline-none divide-y divide-gray-100">
        <div
          v-for="(group, index) in options"
          :key="index"
          class="py-1"
        >
          <template
            v-for="option in group"
            :key="option.title"
          >
            <button
              v-if="option.visible !== false"
              class="text-gray-700 hover:text-gray-900 flex w-full hover:bg-gray-100 px-4 py-2 text-sm transition-all group"
              @click="component.onOptionClicked(option)"
            >
              <div
                v-if="option.icon"
                class="h-5 w-3 mr-3 flex justify-center items-center text-gray-400 hover:text-gray-500 text-sm"
              >
                <eb-icon :icon="option.icon" />
              </div>
              {{ option.title }}
            </button>
          </template>
        </div>
      </div>
    </template>
  </popper>
</template>

<script setup lang="ts">
import Popper from "vue3-popper";
import { EbDropdownOption } from "./eb-dropdown-types";
import { component } from "./eb-dropdown-model";

defineProps<{
	placement: "auto" | "auto-start" | "auto-end" | "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "right" | "right-start" | "right-end" | "left" | "left-start" | "left-end";
	options: Array<Array<EbDropdownOption>>;
}>();
</script>