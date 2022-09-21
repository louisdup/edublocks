<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden">
    <editor-desktop-header :buttons="headerButtons" />
    <div class="h-full w-full flex flex-col p-4 bg-gray-200">
      <div class="h-full w-full flex space-x-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import EditorDesktopHeader from "./components/editor-desktop-header/editor-desktop-header.vue";

defineProps<{
	headerButtons: Array<EditorButtonModel>;
}>();
</script>