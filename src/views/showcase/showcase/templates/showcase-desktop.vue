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
    </eb-grid>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../showcase-model";
</script>