<template>
  <editor-desktop-layout :header-buttons="view.getHeaderButtonsForCurrentMode()">
    <eb-split-view
      @ready="view.onSplitViewReady()"
      @resize="view.onSplitViewResize()" 
      @resized="view.onSplitViewResized()"
    >   
      <eb-split-view-pane>
        <!-- Blocks Editor -->
        <blockly :is-resizing="view.state.isSplitViewBeingResized" />
      </eb-split-view-pane>
      <eb-split-view-pane :size="view.getOutputPanelInitialSize()">
        <!-- Output Panel -->
        <eb-container
          :padding="2"
          is-full-width
        >
          <eb-v-stack
            :spacing="2"
            is-full-height
          >
            <!-- Output Panel Tabs -->
            <eb-tabs
              :options="view.getOutputTabsForCurrentMode()"
              :active="view.getOutputPanelActiveTabKey()"
              @on-tab-clicked="view.onOutputPanelTabClicked($event)"
            />
            
            <!-- Output Panel Component -->
            <component
              :is="view.getOutputPanelActiveComponent()"
              :is-resizing="view.state.isSplitViewBeingResized"
            />
          </eb-v-stack>
        </eb-container>
      </eb-split-view-pane>
    </eb-split-view>
  </editor-desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../editor-model";
import Blockly from "../components/blockly/blockly.vue";
</script>
