<template>
  <div class="w-full flex-none">
    <div class="h-16 w-full flex items-center justify-between px-4 mt-safe">
      <eb-icon
        :icon="['far', 'bars']"
        color="transparent"
      />
      <div class="flex items-center space-x-4">
        <template
          v-for="button in buttons"
          :key="button.key"
        >
          <eb-button
            v-if="button.visible !== false"
            :icon="button.icon"
            :color="button.color"
            size="sm"
            @click="button.action()"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EditorButtonModel } from "@/data/models/editor-button-model";
import { component } from "./editor-mobile-header-model";

defineProps<{
	buttons: Array<EditorButtonModel>;
}>();
</script>