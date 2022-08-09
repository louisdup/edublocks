<template>
  <div>
    <label
      :for="name"
      class="block text-sm font-medium text-gray-700"
    >
      {{ label }}
      <span
        v-if="required"
        class="ml-2 text-red-700"
      >
        *
      </span>
    </label>
    <div class="mt-1">
      <input
        :type="type"
        :name="name"
        :disabled="disabled"
        class="py-3 px-4 shadow-sm focus:ring-navy-500 focus:border-navy-500 block w-full sm:text-sm border-gray-300 rounded-md disabled:bg-gray-100"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	name: string,
	label: string,
	type: string,
	disabled: boolean,
	required: boolean,
	placeholder: string,
	modelValue: string,
	error: string
}>();

defineEmits(["update:modelValue"]);
</script>