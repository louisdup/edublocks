<template>
  <desktop-layout>
    <eb-v-stack
      v-if="view.isClassroomDetailVisible()"
      :spacing="8"
    >
      <!-- Page Header -->
      <eb-h-stack
        align-y="center"
        justify-content="between"
      >
        <eb-v-stack :spacing="2">
          <!-- Go back to classroom link -->
          <eb-link
            :label="view.getText('back')"
            :icon="['far', 'chevron-left']"
            @click="view.onBackButtonClicked()"
          />

          <!-- Classroom name -->
          <eb-heading :label="view.getPageTitle()" />

          <!-- Assignments subtitle -->
          <eb-heading
            v-if="view.isAssignmentsHeadingVisible()"
            :label="view.getText('assignments')"
            size="normal"
            color="gray"
            weight="medium"
          />
        </eb-v-stack> 

        <!-- Add Assignment Button -->
        <eb-button
          v-if="view.isNewAssignmentButtonVisible()"
          :label="view.getText('new-assignment')"
          :icon="['fas', 'plus']"
          color="blue"
          @click="view.onNewAssignmentButtonClicked()"
        />
      </eb-h-stack>

      <!-- Tabs -->
      <eb-tabs
        :options="view.getTabs()"
        :active="view.state.activeTab"
        page-background="gray"
        @on-tab-clicked="view.onTabClicked($event)"
      />

      <!-- Assignments Table -->
      <eb-table
        v-if="view.isAssignmentsTableVisible()"
        :items="view.getAssignments()"
        :is-loading="view.isAssignmentsTableLoading()"
        :empty-state-title="view.getText('no-assignments-found')"
      />

      <!-- Classroom Users -->
      <eb-v-stack
        v-if="view.isUsersTableVisible()"
        :spacing="6"
      >
        <eb-h-stack
          align-y="center"
          justify-content="between"
        >
          <eb-heading
            :label="view.getText('users')"
            size="normal"
            color="gray"
            weight="medium"
          />

          <!-- Add Users Button -->
          <eb-button
            :label="view.getText('add-users')"
            size="xs"
            color="white"
            @click="view.onAddUsersButtonClicked()"
          />
        </eb-h-stack>

        <!-- Users List -->
        <eb-table :items="view.getUsers()" />
      </eb-v-stack>

      <!-- Danger Zone -->
      <eb-v-stack
        v-if="view.isDangerZoneVisible()"
        :spacing="6"
      >
        <eb-heading
          :label="view.getText('danger-zone')"
          size="normal"
          color="gray"
          weight="medium"
        />

        <!-- Delete Classroom -->
        <eb-h-stack justify-content="between">
          <eb-list-item
            :title="view.getText('delete-classroom')"
            :subtitle="view.getText('once-you-delete')"
          />
          
          <eb-button
            :label="view.getText('delete-classroom')"
            size="xs"
            color="red"
            @click="view.onDeleteClassroomButtonClicked()"
          />
        </eb-h-stack>
      </eb-v-stack>
    </eb-v-stack>

    <eb-loading v-if="view.isLoadingVisible()" />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../classroom-detail-model";
</script>