<template>
  <mobile-layout :title="view.getPageTitle()">
    <!-- Grid of recent showcase projects. -->
    <eb-slider :label="view.getText('showcase')">
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
          :subtitle="project.platform"
          :image="project.image"
          :dropdown-options="view.getShowcaseProjectDropdownOptions(project)"
        />
      </eb-slider-slide> 
    </eb-slider>

    <!-- List of recent user projects, if a user is logged in. -->
    <eb-list :label="view.getText('recent-projects')">
      <eb-list-item
        v-for="project in view.state.recentProjects"
        :key="project.id"
        :left-title="project.name"
        :left-subtitle="view.getPlatformFromKey(project.platform).config.name"
        :right-subtitle="project.type"
        :thumbnail="view.getPlatformFromKey(project.platform).config.logo"
        is-full-width
      />
    </eb-list>
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>