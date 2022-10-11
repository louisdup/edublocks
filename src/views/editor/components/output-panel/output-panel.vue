<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
    :padding-b="4"
    :padding-l="4"
    :padding-r="4"
    is-full-height
  >
    <!-- Output Panel Tabs -->
    <eb-tabs
      :options="component.getOutputTabsForCurrentMode()"
      :active="component.getOutputPanelActiveTabKey()"
      @on-tab-clicked="component.onOutputPanelTabClicked($event)"
    />
            
    <!-- Output Panel Component -->
    <component
      :is="component.getOutputPanelActiveComponent()"
      :is-resizing="isResizing"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { component } from "./output-panel-model";

defineProps<{
	isResizing: boolean;
}>();
</script>