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
    
    <!-- Grid of recent showcase projects. -->
    <eb-slider
      :label="view.getText('showcase')"
      margin="-3"
    >
      <eb-card
        v-for="card in 10"
        v-if="view.state.isLoadingShowcaseProjects"
        :key="card"
        :is-loading="true"
      />

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
    />
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>