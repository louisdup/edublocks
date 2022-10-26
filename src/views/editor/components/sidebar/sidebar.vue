<template>
  <eb-h-stack is-full-height>
    <!-- Sidebar Tabs -->
    <eb-v-stack
      :spacing="1"
      :padding-t="2"
      :padding-b="2"
      :padding-l="2"
      :padding-r="2"
    >
      <eb-icon-button
        v-for="tab in component.getSidebarTabsForCurrentMode()"
        :key="tab.key"
        :icon="tab.icon"
        :is-active="component.isSidebarTabActive(tab)"
        size="xl"
        color="gray"
        @click="component.onSidebarTabClicked(tab)"
      />
    </eb-v-stack>

    <!-- Sidebar Component -->
    <eb-v-stack
      v-if="component.isSidebarExpanded()"
      :spacing="4"
      :padding-t="4"
      :padding-b="4"
      :padding-l="4"
      :padding-r="4"
      is-full-height
      is-full-width
      class="border-l border-gray-200"
    >
      <component
        :is="component.getSidebarActiveComponent()"
      />
    </eb-v-stack>
  </eb-h-stack>
</template>

<script setup lang="ts">
import { component } from "./sidebar-model";
</script>