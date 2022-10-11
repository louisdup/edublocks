<template>
  <div class="relative flex-1">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
      <eb-icon
        :icon="['far', 'search']"
        class="text-gray-500 text-sm"
      />
    </div>
    <input
      type="text"
      class="bg-gray-200 rounded-md border-none w-full text-sm py-3 pl-11 pr-4 focus:border-gray-300 focus:ring-gray-300"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', component.getInputValue($event))"
    >
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-search-model";

defineProps<{
	placeholder?: string;
	modelValue?: string;
}>();

defineEmits(["update:modelValue"]);
</script>