<template>
  <div>
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-500"
    >
      {{ label }}
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    <div class="flex items-center space-x-6 w-full mt-2">
      <button
        v-for="option in options"
        :key="option.key"
        class="p-4 rounded-md flex-1 relative cursor-pointer text-left"
        :class="component.getRadioButtonActiveClass(modelValue, option.key)"
        @click="$emit('update:modelValue', option.key)"
      >
        <h1 class="font-medium text-sm text-gray-900">
          {{ option.title }}
        </h1>
        <p
          v-if="option.subtitle"
          class="text-sm text-gray-500"
        >
          {{ option.subtitle }}
        </p>
        <eb-icon
          v-if="modelValue === option.key"
          :icon="['fas', 'check-circle']"
          class="absolute top-4 right-4"
          color="blue"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-radio-group-model";
import { EbRadioGroupOption } from "./eb-radio-group-types";

defineProps<{
	label?: string;
	options: Array<EbRadioGroupOption>;
	modelValue: string;
	required?: boolean;
}>();

defineEmits(["update:modelValue", "input"]);
</script>