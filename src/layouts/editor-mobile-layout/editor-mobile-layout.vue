<template>
  <div class="h-screen w-screen flex flex-col overflow-hidden">
    <editor-mobile-header :buttons="headerButtons" />
    <div class="h-full w-full bg-gray-200 pb-16 relative">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import EditorMobileHeader from "./components/editor-desktop-header/editor-mobile-header.vue";

defineProps<{
	headerButtons: Array<EditorButtonModel>;
}>();
</script>