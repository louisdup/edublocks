<template>
  <p class="text-sm text-pink-500 font-medium cursor-pointer">
    {{ label }}
  </p>
</template>

<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>