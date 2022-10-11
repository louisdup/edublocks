<template>
  <editor-desktop-layout :header-buttons="view.getHeaderButtonsForCurrentMode()">
    <eb-split-view
      @ready="view.onSplitViewReady()"
      @resize="view.onSplitViewResize()" 
      @resized="view.onSplitViewResized()"
    >   
      <!-- Sidebar -->
      <eb-split-view-pane
        :size="view.getSidebarSize()"
        :min-size="view.getSidebarMinimumSize()"
        :max-size="view.getSidebarMaximumSize()"
      >
        <sidebar />
      </eb-split-view-pane>
    
      <!-- Blocks Editor -->
      <eb-split-view-pane v-if="view.isBlocksEditorVisible()">
        <blockly :is-resizing="view.state.isSplitViewBeingResized" />
      </eb-split-view-pane>
      
      <!-- Output Panel -->
      <eb-split-view-pane :size="view.getOutputPanelInitialSize()">
        <output-panel :is-resizing="view.state.isSplitViewBeingResized" />
      </eb-split-view-pane>
    </eb-split-view>
  </editor-desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../editor-model";
import Blockly from "../components/blockly/blockly.vue";
import OutputPanel from "../components/output-panel/output-panel.vue";
import Sidebar from "../components/sidebar/sidebar.vue";
</script>
