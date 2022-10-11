<template>
  <div class="h-16 w-full bg-white flex items-center justify-between flex-none pl-2 pr-4 border-b border-gray-200">
    <div class="flex items-center space-x-2">
      <eb-button
        :icon="['far', 'bars']"
        size="sm"
        color="transparent"
      />
      <eb-button
        :label="component.getCurrentProjectName()"
        :image="component.getCurrentModeLogo()"
        size="sm"
        color="gray"
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