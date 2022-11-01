<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden">
    <editor-desktop-header
      :buttons="headerButtons"
      @on-project-button-clicked="$emit('onProjectButtonClicked')"
    />
    <div class="h-full w-full flex flex-col bg-white overflow-hidden">
      <div class="h-full w-full">
        <slot />
      </div>
    </div>
  </div>

  <!-- Modal Dynamic Component -->
  <component
    :is="state.modal?.modal"
    v-bind="state.modal?.options"
  />
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import EditorDesktopHeader from "./components/editor-desktop-header/editor-desktop-header.vue";

import { state } from "@/data/state";

defineProps<{
	headerButtons: Array<EditorButtonModel>;
}>();

defineEmits(["onProjectButtonClicked"]);
</script>