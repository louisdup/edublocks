<template>
  <div class="h-full w-full overflow-hidden rounded-md">
    <div
      v-if="isResizing"
      class="h-full w-full bg-gray-900 rounded-md"
    />
    <MonacoEditor 
      v-else
      language="python" 
      theme="vs-dark"
      :value="component.getCurrentProjectCode().value"
      :options="component.getMonacoEditorOptions()"
      class="rounded-md"
      @input="component.onCodeInput($event)"
    />
  </div>
</template>

<script setup lang="ts">
import MonacoEditor from "monaco-editor-vue3";
import { component } from "./python-code-model";

defineProps<{
	isResizing: boolean;
}>();
</script>

<style lang="postcss">
.monaco-editor .margin {
	@apply !bg-gray-900 rounded-l-md;
}

.monaco-editor, .monaco-editor-background, .monaco-editor .inputarea.ime-input {
	@apply !bg-gray-900/90 rounded-md;
}
</style>