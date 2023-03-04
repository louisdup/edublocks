<template>
  <div
    v-show="isResizing"
    class="h-full w-full bg-gray-200"
  />
  <div
    v-show="!isResizing"
    id="blocklyDiv"
    class="h-full w-full"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./blockly-model";

defineProps<{
	isResizing?: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>

<style lang="postcss">
.blocklySvg {
  @apply border-none rounded-none bg-gray-200;
}

.blocklyMainBackground {
  @apply stroke-0;
}

.blocklyToolboxDiv {
  @apply bg-white;
}

.blocklyTreeLabel {
  @apply text-gray-500 font-sans font-medium text-sm md:block hidden;
}

.blocklyToolboxContents {
  @apply p-2 !pt-1;
}

.blocklyTreeRow {
  @apply !p-2 rounded-lg w-full h-full flex items-center cursor-pointer transition-all !mb-1;
}

.blocklyTreeRowContentContainer { 
  @apply !flex-row space-x-3;
}

.blocklyTreeRow:not(.blocklyTreeSelected) {
  @apply hover:!bg-gray-100;
}

.customIconWrapper {
  @apply text-gray-100 flex items-center justify-center h-8 w-8 rounded-lg shadow-lg text-center text-lg;
}

.blocklyTreeRowContentContainer {
  @apply flex flex-col items-center;
}

.blocklyFlyoutScrollbar {
  @apply !hidden;
}

.blocklyFlyoutButton {
  @apply fill-blue-500 hover:!fill-blue-400 transition-colors;
}

.blocklyFlyoutButtonBackground {
  @apply stroke-blue-500;
}

.blocklyFlyoutButton .blocklyText {
  @apply !text-sm !font-sans !font-medium cursor-pointer;
}

.blocklyTooltipDiv {
  @apply !p-6 !rounded-lg !bg-white !shadow prose;
}
</style>