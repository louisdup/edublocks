<template>
  <div class="space-y-2">
    <eb-heading
      :label="label"
      size="small"
      color="gray"
      weight="medium"
    />
    <div class="-mx-3 flex space-x-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>