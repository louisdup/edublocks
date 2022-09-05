<template>
  <mobile-layout>
    <!-- Title bar for home page. -->
    <eb-heading :label="view.getPageTitle()" />

    <!-- Grid of modes to create a new project. -->
    <eb-heading
      :label="view.getText('create-new-project')"
      size="small"
      color="gray"
      weight="medium"
    />

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
        :left-subtitle="project.platform"
        :right-subtitle="project.type"
        thumbnail="https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821153845%21Python-logo-notext.svg"
        is-full-width
      />
    </eb-list>
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>