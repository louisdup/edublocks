<template>
  <div
    :class="isExpanded ? 'h-full' : 'h-16'"
    class="absolute bottom-0 w-full bg-white drop-shadow-2xl border border-gray-300 z-[100] flex flex-col"
  >
    <div class="w-full flex justify-center px-4 pt-4">
      <button
        class="h-1.5 w-16 bg-gray-300 rounded-full"
        @click="$emit('onExpandedClick')"
      />
    </div>
    <div
      class="h-full w-full pb-safe"
      :class="isExpanded ? 'overflow-hidden' : ''"
    >
      <div class="h-full p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Data } from "../types";

const props: Data = defineProps<{
	isExpanded: boolean;
}>();

defineEmits(["onExpandedClick"]);
</script> 