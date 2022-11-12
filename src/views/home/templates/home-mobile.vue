<template>
  <mobile-layout :title="view.getPageTitle()">
    <!-- List of modes to create a new project. --> 
    <eb-slider
      :label="view.getText('create-new-project')"
      :spacing="4"
    >
      <eb-slider-slide
        v-for="mode in view.getModes()"
        :key="mode.config.key"
      >
        <eb-chip 
          :title="mode.config.name"
          :thumbnail="mode.config.logo"
          is-button
          @click="view.onCreateNewProjectListItemClicked(mode)"
        />
      </eb-slider-slide> 
    </eb-slider>

    <!-- Table of recent projects by the current user -->
    <eb-table
      :label="view.getText('recent-projects')"
      :items="view.getRecentProjects()"
      :is-loading="view.isProjectsTableLoading()"
      :empty-state-title="view.getProjectsTableEmptyStateTitle()"
      :empty-state-subtitle="view.getProjectsTableEmptyStateSubtitle()"
    />
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>