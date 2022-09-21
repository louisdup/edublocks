<template>
  <div
    v-show="isResizing"
    class="h-full w-full bg-gray-50 rounded-md border border-gray-300"
  />
  <div
    v-show="!isResizing"
    id="blocklyDiv"
    :class="component.variants({ isRounded })" 
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./blockly-model";

defineProps<{
	isResizing?: boolean;
	isRounded?: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>

<style lang="postcss">
.blocklySvg {
  @apply border-none rounded-none sm:rounded-md bg-gray-50;
}

.blocklyMainBackground {
  @apply stroke-0;
}

.blocklyToolboxDiv {
  @apply bg-gray-100 text-gray-900 rounded-none sm:rounded-l-md border-r border-gray-300;
}

.blocklyTreeLabel {
  @apply text-gray-900 font-sans font-medium text-sm md:block hidden;
}

.blocklyToolboxContents {
  @apply p-2 !pt-1;
}

.blocklyTreeRow {
  @apply !p-2 !pl-1 rounded-md w-full h-full flex items-center justify-center hover:!bg-gray-200 cursor-pointer transition-all mb-2;
}

.customIcon {
  @apply text-gray-100 mb-1 pt-1.5 h-7 w-7 rounded-full text-center;
}

.blocklyTreeRowContentContainer {
  @apply flex flex-col items-center;
}

.blocklyFlyoutScrollbar {
  @apply !hidden;
}
</style>