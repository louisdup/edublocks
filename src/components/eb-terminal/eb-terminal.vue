<template>
  <div
    id="terminal"
    class="h-full w-full"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Data } from "../types";
import { component } from "./eb-terminal-model";

const props: Data = defineProps<{
	data: Array<string>;
}>();

// eslint-disable-next-line @typescript-eslint/typedef
const emit = defineEmits(["input"]);

onMounted(() => {
	component.init(props, emit);
});
</script>

<style lang="postcss">
.xterm-viewport::-webkit-scrollbar {
  @apply bg-[#282c34] rounded-r-md;
}

.xterm-viewport::-webkit-scrollbar-thumb {
  @apply bg-gray-700 rounded-lg;
}

.xterm .xterm-viewport {
  @apply bg-[#282c34] rounded-md;
  scrollbar-color: #282c34;
}

.xterm {
  @apply p-4 h-full;
}
</style>