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
      <template
        v-for="tab in component.getSidebarTabsForCurrentMode()"
        :key="tab.key"
      >
        <eb-icon-button
          v-if="tab.visible !== false"
          :icon="tab.icon"
          :is-active="component.isSidebarTabActive(tab)"
          size="xl"
          color="gray"
          @click="component.onSidebarTabClicked(tab)"
        />
      </template>
    </eb-v-stack>

    <!-- Sidebar Component -->
    <eb-v-stack
      v-if="component.isSidebarExpanded()"
      is-full-height
      class="border-l border-gray-200 relative w-72 flex-none"
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