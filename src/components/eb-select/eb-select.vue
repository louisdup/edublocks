<template>
  <div
    v-if="isLoading"
    class="h-10 w-full rounded-md bg-gray-100 flex items-center justify-center"
  >
    <svg
      class="animate-spin h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>

  <div
    v-else
    class="w-full"
  >
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-500 mb-2"
    >
      {{ label }}
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    <div class="w-full">
      <select
        class="bg-gray-100 border-none block w-full rounded-md py-2.5 pl-4 pr-10 focus:ring-gray-300 focus:outline-none text-sm"
        :class="error ? 'border-red-500' : 'border-gray-300'"
        @input="component.updateModelValue($event, $emit)"
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
	isLoading?: boolean;
	error?: string;
}>();

defineEmits(["update:modelValue", "input"]);
</script>