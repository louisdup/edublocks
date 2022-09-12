<template>
  <p class="text-sm text-pink-500 font-medium cursor-pointer hover:opacity-80 transition-opacity">
    {{ label }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>