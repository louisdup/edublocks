<template>
  <editor-desktop-layout
    v-if="view.isEditorVisible()"
    :header-buttons="view.getHeaderButtonsForCurrentMode()"
    @onProjectButtonClicked="view.onProjectButtonClicked()"
  >
    <!-- Sidebar -->
    <sidebar />

    <!-- Blocks/Output Split View -->
    <eb-split-view
      @ready="view.onSplitViewReady()"
      @resize="view.onSplitViewResize()" 
      @resized="view.onSplitViewResized()"
    >   
      <!-- Blocks Editor -->
      <eb-split-view-pane v-if="view.isBlocksEditorVisible()">
        <blockly :is-resizing="view.state.isSplitViewBeingResized" />
      </eb-split-view-pane>
      
      <!-- Output Panel -->
      <eb-split-view-pane :size="30">
        <output-panel :is-resizing="view.state.isSplitViewBeingResized" />
      </eb-split-view-pane>
    </eb-split-view>
  </editor-desktop-layout>

  <!-- Project Loading Status Screen -->
  <eb-loading
    v-if="view.isLoadingProject()"
    background-color="white"
  />

  <!-- No Access Empty State -->
  <eb-empty-state
    v-if="view.isNoAccessEmptyStateVisible()"
    :title="view.getText('no-access')"
    :subtitle="view.getText('project-is-private')"
    :icon="['far', 'ban']"
    is-full-height
    is-full-width
  />
</template>

<script setup lang="ts">
import { view } from "../editor-model";
import Blockly from "../components/blockly/blockly.vue";
import OutputPanel from "../components/output-panel/output-panel.vue";
import Sidebar from "../components/sidebar/sidebar.vue";
</script>
