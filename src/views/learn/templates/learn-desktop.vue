<template>
  <desktop-layout>
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

    <!-- Curriculum Banner -->
    <eb-banner
      :title="view.getText('free-python-3-curriculum')"
      :subtitle="view.getText('six-lessons')"
      :description="view.getText('curriculum-description')"
      :button-label="view.getText('learn-more')"
      thumbnail="/images/learn/curriculum.png"
      color="purple"
      @buttonClick="view.onLearnMoreButtonClicked()"
    />

    <!-- Tabs -->
    <eb-tabs
      :options="view.getTabs()"
      :active="view.state.activeTab"
      page-background="gray"
      @on-tab-clicked="view.onTabClicked($event)"
    />

    <!-- Empty State -->
    <eb-empty-state
      v-if="view.isEmptyStateVisible()"
      :title="view.getText('no-guides-found')"
      :subtitle="view.getText('try-another-category')"
      background-color="gray"
    />

    <!-- Learn Guides Grid -->
    <eb-grid>
      <!-- Loading State -->
      <eb-card
        v-for="card in 9"
        v-if="view.state.isLoadingLearnGuides"
        :key="card"
        :is-loading="true"
      />

      <!-- Learn Guides -->
      <eb-card 
        v-for="guide in view.getFilteredLearnGuides()"
        v-else
        :key="guide.title"
        :title="guide.title"
        :description="guide.description"
        :image="guide.image.filename"
        @click="view.onLearnGuideClicked(guide)"
      />
    </eb-grid>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../learn-model";
</script>