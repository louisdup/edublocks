<template>
  <editor-mobile-layout :header-buttons="view.getHeaderButtonsForCurrentPlatform()">
    <!-- Blocks Editor -->
    <blockly :is-resizing="view.state.isSplitViewBeingResized" />

    <!-- Output Panel -->
    <eb-sheet
      :is-expanded="view.isOutputPanelExpanded().value"       
      @on-expanded-click="view.onOutputPanelExpanded()"
    >
      <eb-v-stack
        :spacing="4"
        is-full-height
      >
        <!-- Output Panel Tabs -->
        <eb-tabs
          :options="view.getOutputTabsForCurrentPlatform()"
          :active="view.getOutputPanelActiveTabKey()"
          @on-tab-clicked="view.onOutputPanelTabClicked($event)"
        />
            
        <!-- Output Panel Component -->
        <component
          :is="view.getOutputPanelActiveComponent()"
          :is-resizing="view.state.isSplitViewBeingResized"
        />
      </eb-v-stack>
    </eb-sheet>
  </editor-mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../editor-model";
import Blockly from "../components/blockly/blockly.vue";
</script>