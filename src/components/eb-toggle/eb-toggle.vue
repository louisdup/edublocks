<template>
  <div class="flex items-center space-x-3 flex-none">
    <label
      v-if="label"
      class="text-sm font-medium text-gray-500"
    >
      {{ label }}
    </label>

    <button
      class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
      :class="component.getButtonToggledClassList(modelValue)"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        :class="component.getToggleToggledClassList(modelValue)"
        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Data } from "../types";
import { component } from "./eb-toggle-model";

const props: Data = defineProps<{
	label?: string;
	modelValue?: boolean;
}>();

// eslint-disable-next-line @typescript-eslint/typedef
const emit = defineEmits(["update:modelValue"]);

component.init(props, emit);
</script>