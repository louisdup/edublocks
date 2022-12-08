<template>
  <desktop-layout @scroll="view.onPageScroll($event)">
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

    <!-- Featured Project Banner -->
    <eb-banner
      :title="view.getText('featured-project')"
      :subtitle="view.getFeaturedProjectName()"
      :description="view.getFeaturedProjectDescription()"
      :button-label="view.getText('view-project')"
      thumbnail="/images/showcase/introducing-html.png"
      color="navy"
      @buttonClick="view.onViewFeaturedProjectClicked()"
    />

    <!-- Showcase Projects Grid -->
    <eb-grid>
      <!-- Loading State -->
      <eb-card
        v-for="card in 9"
        v-if="view.state.isLoadingInitialShowcaseProjects"
        :key="card"
        :is-loading="true"
      />

      <!-- Showcase Projects -->
      <eb-card 
        v-for="project in view.state.showcaseProjects"
        v-else
        :key="project.id"
        :title="project.title"
        :subtitle="view.getShowcaseProjectModeName(project)"
        :thumbnail-color="view.getShowcaseProjectThumbnailColor(project)"
        :thumbnail-icon="view.getShowcaseProjectThumbnailIcon(project)"
        :dropdown-options="view.getShowcaseProjectDropdownOptions(project)"
        @click="view.onShowcaseProjectClicked(project)"
      />
    </eb-grid>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../showcase-model";
</script>