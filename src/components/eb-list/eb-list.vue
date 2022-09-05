<template>
  <div class="space-y-4">
    <eb-heading
      :label="label"
      size="small"
      color="gray"
      weight="medium"
    />
    <div class="space-y-6">
      <slot />
    </div>
  </div>
</template>
  
<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>