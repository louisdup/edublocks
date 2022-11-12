<template>
  <div class="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
    <eb-icon
      v-if="icon"
      :icon="icon"
      color="blue"
      size="sm"
    />
    <p class="text-sm text-blue-500 font-medium">
      {{ label }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	label: string;
	icon?: Array<string>;
}>();
</script>