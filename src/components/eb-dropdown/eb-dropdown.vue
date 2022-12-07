<template>
  <popper
    v-bind="$attrs"
    interactive
    :placement="placement"
    :show="component.state.isOpen"
    class="!m-0 !border-none"
  >
    <slot />
    <template #content>
      <div class="origin-bottom-right w-56 rounded-lg shadow bg-white divide-y divide-gray-200 border border-gray-100">
        <div
          v-for="(group, index) in component.getFilteredDropdownOptions(options)"
          :key="index"
          class="p-2"
        >
          <template
            v-for="option in group"
            :key="option.title"
          >
            <button
              v-if="option.visible !== false"
              class="w-full px-3 py-2 justify-between flex items-center text-sm text-left font-medium text-gray-500 rounded-md hover:bg-gray-100 transition-colors"
              @click="component.onOptionClicked(option)"
            >
              <span>{{ option.title }}</span>
              <eb-icon
                :icon="option.icon"
                size="normal"
                color="gray"
              />
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