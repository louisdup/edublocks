<template>
  <div
    class="w-full prose text-sm"
    v-html="content"
  />
</template>

<script setup lang="ts">
defineProps<{
	content: string;
}>();
</script>