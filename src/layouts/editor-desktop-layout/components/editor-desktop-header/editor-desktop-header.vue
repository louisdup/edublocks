<template>
  <div class="h-16 w-full bg-white flex items-center justify-between flex-none pl-2 pr-4 border-b border-gray-200">
    <div class="flex items-center space-x-2">
      <eb-dropdown
        v-if="component.isMenuVisible()"
        :options="component.getMenuDropdownOptions()"
        placement="bottom-end"
      >
        <eb-button
          :icon="['far', 'bars']"
          size="sm"
          color="transparent"
        />
      </eb-dropdown>
      
      <eb-button
        :label="component.getCurrentProjectName()"
        :image="component.getCurrentModeLogo()"
        size="sm"
        color="gray"
        :class="component.getProjectButtonClass()"
        @click="$emit('onProjectButtonClicked')"
      />
    </div>

    <div class="flex items-center space-x-4">
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

defineEmits(["onProjectButtonClicked"]);
</script>