<template>
  <mobile-layout
    :title="view.getPageTitle()"
    @scroll="view.onPageScroll($event)"
  >
    <!-- Search box -->
    <eb-h-stack :spacing="4">
      <eb-search
        v-model="view.state.search"
        :placeholder="view.getText('search-projects')"
        @input="view.onSearchInput()"
      />

      <eb-button
        :icon="['far', 'file-import']"
        color="white"
        icon-color="darkGray"
        @click="view.onOpenLocalProjectClicked()"
      />
    </eb-h-stack>

    <!-- Projects Table -->
    <eb-table
      :items="view.getProjects()"
      :is-loading="view.isProjectsTableLoading()"
      :empty-state-title="view.getProjectsTableEmptyStateTitle()"
      :empty-state-subtitle="view.getProjectsTableEmptyStateSubtitle()"
    />
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../projects-model";
</script>