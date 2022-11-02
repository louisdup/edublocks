<template>
  <div class="flex items-center space-x-3">
    <div class="w-full h-3 bg-gray-100 rounded-full">
      <div
        class="h-full rounded-full bg-blue-500"
        :style="`width: ${value}%`"
      />
    </div>

    <h1 class="text-gray-700 font-medium w-12 text-right">
      {{ value }}%
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	value: number;
}>();

defineEmits(["update:modelValue"]);
</script>