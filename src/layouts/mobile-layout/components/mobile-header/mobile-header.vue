<template>
  <div class="pt-safe bg-white">
    <div class="px-4 h-16 flex items-center">
      <eb-heading
        :label="title"
        size="lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	title?: string;
}>();
</script>