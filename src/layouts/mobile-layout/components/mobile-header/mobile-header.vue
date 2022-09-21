<template>
  <div class="pt-safe bg-navy-500">
    <div class="px-4 h-16 flex items-center">
      <eb-heading
        :label="title"
        size="lg"
        color="white"
        weight="semibold"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title?: string;
}>();
</script>