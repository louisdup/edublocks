<template>
  <div class="w-full pt-safe bg-white">
    <div class="h-16 w-full px-4 flex items-center justify-between">
      <eb-heading
        :label="title"
        size="lg"
      />

      <user-menu />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserMenu from "../user-menu/user-menu.vue";

defineProps<{
	title?: string;
}>();
</script>