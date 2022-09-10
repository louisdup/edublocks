<template>
  <div class="space-y-2">
    <eb-heading
      v-if="label"
      :label="label"
      size="small"
      color="gray"
      weight="medium"
    />
    <div class="-mx-3 auto-cols-auto grid-cols-[repeat(auto-fill,264px)] justify-between grid gap-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	label?: string;
}>();
</script>