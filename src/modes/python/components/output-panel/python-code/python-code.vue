<template>
  <div class="h-full w-full overflow-hidden rounded-md">
    <div
      v-if="isResizing"
      class="h-full w-full bg-[#282c34] rounded-md"
    />
    <codemirror
      v-model="component.getCurrentProjectCode().value"
      :extensions="component.getExtensions()"
      :style="component.getStyles()"
      :tab-size="component.getTabSize()"
      @input="component.onInput()"
      @focus="component.onFocus()"
      @blur="component.onBlur()"
    />
  </div>
</template>

<script setup lang="ts">
import { component } from "./python-code-model";
import { Codemirror } from "vue-codemirror";

defineProps<{
	isResizing: boolean;
}>();
</script>

<style lang="postcss">
.cm-editor{
  @apply !text-base;
}
</style>