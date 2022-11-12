<template>
  <desktop-layout>
    <eb-v-stack
      v-if="view.isAssignmentSubmissionsVisible()"
      :spacing="8"
    >
      <!-- Page Header -->
      <eb-v-stack :spacing="2">
        <!-- Go back to classroom link -->
        <eb-link
          :label="view.getText('back')"
          :icon="['far', 'chevron-left']"
          @click="view.onBackButtonClicked()"
        />

        <!-- Assignment name -->
        <eb-heading :label="view.getPageTitle()" />
        
        <!-- Submissions subtitle -->
        <eb-heading
          :label="view.getText('submissions')"
          size="normal"
          color="gray"
          weight="medium"
        />
      </eb-v-stack> 

      <!-- Tabs -->
      <eb-tabs
        :options="view.getTabs()"
        :active="view.state.activeTab"
        page-background="gray"
        @on-tab-clicked="view.onTabClicked($event)"
      />

      <!-- Assignment Submissions Table -->
      <eb-table
        :items="view.getAssignmentSubmissions()"
        :is-loading="view.isAssignmentSubmissionsTableLoading()"
        :empty-state-title="view.getText('no-submissions-found')"
      />
    </eb-v-stack>

    <eb-loading v-if="view.isLoadingVisible()" />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../assignment-submissions-model";
</script>