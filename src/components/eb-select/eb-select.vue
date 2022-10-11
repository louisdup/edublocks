<template>
  <div class="w-full">
    <label class="block text-sm font-medium text-gray-900">
      {{ label }}
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    <div class="mt-2">
      <select
        class="bg-gray-100 border-none mt-1 block w-full rounded-md py-2.5 pl-4 pr-10 focus:ring-gray-300 focus:outline-none text-sm"
        :class="error ? 'border-red-500' : 'border-gray-300'"
        @input="$emit('update:modelValue', component.getSelectValue($event))"
      >
        <option
          v-for="option in options"
          :key="option.label"
          :value="option.value"
          :selected="modelValue === option.value"
        >
          {{ option.label }}
        </option>
      </select>
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
import { component } from "./eb-select-model";
import { EbSelectOption } from "./eb-select-types";

defineProps<{
	label: string;
	options: Array<EbSelectOption>;
	modelValue?: string;
	required?: boolean;
	error?: string;
}>();

defineEmits(["update:modelValue"]);
</script>