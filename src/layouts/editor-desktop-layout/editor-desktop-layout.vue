<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden">
    <editor-desktop-header
      :buttons="headerButtons"
      @on-project-button-clicked="$emit('onProjectButtonClicked')"
    />
    <div class="h-full w-full flex flex-col bg-white overflow-hidden">
      <div class="h-full w-full flex">
        <slot />
      </div>
    </div>
  </div>

  <!-- Modal Dynamic Component -->
  <component
    :is="state.modal?.modal"
    v-bind="state.modal?.options"
  />

  <!-- Toast Notification -->
  <eb-toast-notification :content="ToastUtilities.notification.value" />
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import EditorDesktopHeader from "./components/editor-desktop-header/editor-desktop-header.vue";

import { state } from "@/data/state";
import { ToastUtilities } from "@/utilities/toast-utilities";

defineProps<{
	headerButtons: Array<EditorButtonModel>;
}>();

defineEmits(["onProjectButtonClicked"]);
</script>