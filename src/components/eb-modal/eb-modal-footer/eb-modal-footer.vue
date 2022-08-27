<template>
  <div class="px-8 py-6 bg-gray-100 rounded-b-md flex flex-col">
    <div :class="component.variants({ align })">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-modal-footer-model";

defineProps<{
	align: string;
}>();
</script>
