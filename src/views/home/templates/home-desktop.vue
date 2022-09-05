<template>
  <desktop-layout>
    <!-- Title bar section with New Project button. -->
    <eb-heading :label="view.getPageTitle()">
      <!-- New Project Button -->
      <eb-button
        :label="view.getText('new-project')"
        :icon="['fas', 'plus']"
        color="pink"
      />
    </eb-heading>

    <!-- Grid of platforms to create a new project. -->
    <eb-slider :label="view.getText('create-new-project')">
      <eb-slider-slide
        v-for="platform in view.getPlatforms()"
        :key="platform.config.key"
      >
        <eb-list-item 
          :left-title="platform.config.name"
          :left-subtitle="view.getText('blank-project')"
          :thumbnail="platform.config.logo"
          is-button
        />
      </eb-slider-slide> 
    </eb-slider>

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
    <eb-table
      v-if="view.isCurrentUserLoggedIn()"
      :label="view.getText('recent-projects')"
      :headers="view.getRecentProjectsTableHeaders()"
    >
      <eb-table-row
        v-for="project in view.state.recentProjects"
        :key="project.id"
      >
        <!-- Project Column -->
        <eb-table-cell>
          <eb-list-item
            :left-title="project.name"
            :left-subtitle="view.getPlatformFromKey(project.platform).config.name"
            :thumbnail="view.getPlatformFromKey(project.platform).config.logo"
            is-full-width
          />
        </eb-table-cell>
        <!-- Type Column -->
        <eb-table-cell>
          <eb-label
            :label="view.getText(project.type)"
            color="gray"
          />
        </eb-table-cell>
        <!-- Updated Column -->
        <eb-table-cell>
          <eb-label
            :label="view.formatDate(project.updated)"
            color="gray"
          />
        </eb-table-cell>
        <!-- Size Column -->
        <eb-table-cell>
          <eb-label
            :label="view.formatSize(project.size)"
            color="gray"
          />
        </eb-table-cell>
        <!-- Actions Column -->
        <eb-table-cell class="text-right">
          <eb-icon :icon="['far', 'ellipsis-h']" />
        </eb-table-cell>
      </eb-table-row>
    </eb-table>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>