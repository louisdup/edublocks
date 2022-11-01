<template>
  <desktop-layout @scroll="view.onPageScroll($event)">
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

    <!-- Search box -->
    <eb-h-stack :spacing="4">
      <eb-search
        v-model="view.state.search"
        :placeholder="view.getText('search-projects')"
        @input="view.onSearchInput()"
      />

      <eb-button
        :label="view.getText('import-project')"
        :icon="['far', 'file-import']"
        color="white"
        icon-color="darkGray"
      />
    </eb-h-stack>

    <!-- Projects List -->
    <eb-table
      :items="view.getRecentProjects()"
      :is-loading="view.isProjectsTableLoading()"
      :empty-state-title="view.getProjectsTableEmptyStateTitle()"
      :empty-state-subtitle="view.getProjectsTableEmptyStateSubtitle()"
    />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../projects-model";
</script>