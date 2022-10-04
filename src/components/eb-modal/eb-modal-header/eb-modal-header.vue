<template>
  <div class="px-8 pt-8 relative">
    <div class="text-center space-y-4">
      <eb-icon
        v-if="icon"
        :icon="icon"
        :color="iconColor"
        :background-color="iconColor"
      />
      <eb-heading
        :label="title"
        size="2xl"
        :align="align"
        is-full-width
      />
    </div>

    <div class="absolute top-5 right-4 flex items-center">
      <button
        class="h-10 w-10 rounded-md flex items-center justify-center text-gray-900 hover:bg-gray-100 cursor-pointer transition-colors"
        @click="$emit('close')"
      >
        <eb-icon :icon="['far', 'times']" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title: string;
	align: string;
	icon: Array<string>;
	iconColor: string;
}>();

defineEmits(["close"]);
</script>
