<template>
  <desktop-layout>
    <eb-h-stack
      align-y="center"
      justify-content="between"
    >
      <!-- Page Title -->
      <eb-heading :label="view.getPageTitle()" />

      <!-- Actions -->
      <eb-h-stack :spacing="4">
        <!-- New Classroom Button -->
        <eb-button
          :label="view.getText('new-classroom')"
          :icon="['fas', 'plus']"
          color="white"
          @click="view.onNewClassroomButtonClicked()"
        />

        <!-- Join Classroom Button -->
        <eb-button
          :label="view.getText('join-classroom')"
          :icon="['far', 'user-plus']"
          @click="view.onJoinClassroomButtonClicked()"
        />
      </eb-h-stack>
    </eb-h-stack>

    <!-- Classrooms Table -->
    <eb-table
      :items="view.getClassrooms()"
      :is-loading="view.isClassroomsTableLoading()"
    />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../classroom-list-model";
</script>