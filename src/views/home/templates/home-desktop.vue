<template>
  <desktop-layout>
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

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

    <!-- List of projects from the showcase. -->
    <eb-slider
      :label="view.getText('showcase')"
      margin="-3"
      :spacing="2"
    >
      <!-- Loading State -->
      <eb-card
        v-for="card in 10"
        v-if="view.state.isLoadingShowcaseProjects"
        :key="card"
        :is-loading="true"
      />

      <!-- Showcase Projects -->
      <eb-slider-slide
        v-for="project in view.state.showcaseProjects"
        v-else
        :key="project.id"
      >
        <eb-card 
          :title="project.title"
          :subtitle="project.mode"
          :image="project.image"
          :dropdown-options="view.getShowcaseProjectDropdownOptions(project)"
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
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>