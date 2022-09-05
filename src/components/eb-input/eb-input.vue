<template>
  <div>
    <label class="block text-sm font-medium text-gray-900">
      {{ label }}
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    <div class="mt-1">
      <input
        :type="type"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 px-4 py-2"
        :class="error ? 'border-red-500' : 'border-gray-300'"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', component.getInputValue($event))"
      >
    </div>
    <a
      v-if="error"
      class="text-sm text-red-500 font-medium mt-1"
    >
      {{ error }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-input-model";

defineProps<{
	label: string;
	type: string;
	placeholder?: string;
	modelValue?: string;
	required?: boolean;
	error?: string;
}>();

defineEmits(["update:modelValue"]);
</script>