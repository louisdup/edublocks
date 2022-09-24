<template>
  <div class="h-16 w-full bg-navy-500 flex items-center justify-between flex-none px-4">
    <div class="flex items-center space-x-4">
      <img
        :src="component.getLogoPath()"
        class="h-9"
      >
      <eb-button
        :label="component.getCurrentProjectName()"
        :image="component.getCurrentPlatformLogo()"
        size="sm"
        color="semiTransparent"
      />
    </div>
    <div class="flex items-center overflow-hidden space-x-4">
      <template
        v-for="button in buttons"
        :key="button.key"
      >
        <eb-button
          v-if="button.visible !== false"
          :label="button.label"
          :icon="button.icon"
          :color="button.color"
          size="sm"
          @click="button.action()"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import { component } from "./editor-desktop-header-model";

defineProps<{
	buttons: Array<EditorButtonModel>;
}>();
</script>