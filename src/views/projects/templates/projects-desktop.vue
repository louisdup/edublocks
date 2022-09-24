<template>
  <desktop-layout @scroll="view.onPageScroll($event)">
    <!-- Title bar section with New Project button. -->
    <eb-heading :label="view.getPageTitle()">
      <eb-h-stack :spacing="6">
        <!-- Import Project Button -->
        <eb-button
          :label="view.getText('import-project')"
          color="white"
        />

        <!-- New Project Button -->
        <eb-button
          :label="view.getText('new-project')"
          :icon="['fas', 'plus']"
          color="pink"
        />
      </eb-h-stack>
    </eb-heading>

    <!-- Search & Data Layout Selectors -->
    <eb-h-stack :spacing="6">
      <eb-search
        v-model="view.state.search"
        :placeholder="view.getText('search-projects')"
        @input="view.onSearchInput()"
      />

      <eb-h-stack :spacing="2">
        <eb-icon-button
          :icon="['far', 'bars']"
          :is-active="view.isDataLayoutList()"
          @click="view.setDataLayout('list')"
        />
        <eb-icon-button
          :icon="['far', 'grid-2']"
          :is-active="view.isDataLayoutGrid()"
          @click="view.setDataLayout('grid')"
        />
      </eb-h-stack>
    </eb-h-stack>

    <!-- List of projects, if a user is logged in and the user chooses to display data in a list layout -->
    <eb-table
      v-if="view.isProjectsTableVisible()"
      :headers="view.getRecentProjectsTableHeaders()"
    >
      <eb-table-row
        v-for="project in view.state.projects"
        :key="project.id"
      >
        <!-- Project Column -->
        <eb-table-cell>
          <eb-list-item
            :left-title="project.name"
            :left-subtitle="view.getModeFromKey(project.mode).config.name"
            :thumbnail="view.getModeFromKey(project.mode).config.logo"
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
          <eb-dropdown
            :options="view.getProjectDropdownOptions(project)"
            placement="bottom-end"
          >
            <eb-icon :icon="['far', 'ellipsis-h']" />
          </eb-dropdown>
        </eb-table-cell>
      </eb-table-row>
    </eb-table>

    <!-- Grid of projects, if a user is logged in and the user chooses to display data ia a grid layout -->
    <eb-grid v-if="view.isDataLayoutGrid()">
      <eb-card
        v-for="project in view.state.projects"
        :key="project.id"
        :title="project.name"
        :subtitle="view.getModeFromKey(project.mode).config.name"
        :image="view.getModeFromKey(project.mode).config.image"
        :dropdown-options="view.getProjectDropdownOptions(project)"
      />
    </eb-grid>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../projects-model";
</script>