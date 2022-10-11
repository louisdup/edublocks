<template>
  <editor-mobile-layout :header-buttons="view.getHeaderButtonsForCurrentMode()">
    <!-- Blocks Editor -->
    <blockly :is-resizing="view.state.isSplitViewBeingResized" />

    <!-- Output Panel -->
    <eb-sheet
      :is-expanded="view.isOutputPanelExpanded().value"       
      @on-expanded-click="view.onOutputPanelExpanded()"
    >
      <output-panel :is-resizing="view.state.isSplitViewBeingResized" />
    </eb-sheet>
  </editor-mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../editor-model";
import Blockly from "../components/blockly/blockly.vue";
import OutputPanel from "../components/output-panel/output-panel.vue";
</script>