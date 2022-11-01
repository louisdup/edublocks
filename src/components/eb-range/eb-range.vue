<template>
  <div class="w-full">
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-700 mb-4"
    >
      {{ label }} ({{ modelValue }}{{ component.getUnitText(unit) }})
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    
    <div class="w-full flex items-center space-x-4">
      <h1
        v-if="minimum"
        class="text-xs text-gray-500"
      >
        {{ minimum }}
      </h1>
      <input
        id="range"
        type="range"
        :min="minimum"
        :max="maximum"
        :value="modelValue"
        class="w-full h-2.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
        @input="$emit('update:modelValue', component.getInputValue($event))"
      >
      <h1
        v-if="maximum"
        class="text-xs text-gray-500"
      >
        {{ maximum }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-range-model";

defineProps<{
	label?: string;
	unit?: string;
	required?: boolean;
	minimum?: string;
	maximum?: string;
	modelValue?: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<style lang="postcss">
#range::-webkit-slider-thumb {
    @apply appearance-none h-5 w-5 rounded-full bg-sky-500;
}
</style>