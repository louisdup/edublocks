<template>
  <div>
    <label class="block text-sm font-medium text-gray-500 mb-4">
      {{ label }}
    </label>
    <div class="flex items-center space-x-6 w-full">
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
        <p class="text-sm text-gray-500">
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
}>();

defineEmits(["update:modelValue"]);
</script>