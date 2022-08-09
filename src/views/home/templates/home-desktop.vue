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

    <!-- Grid of modes to create a new project. -->
    <eb-heading
      :label="view.getText('create-new-project')"
      size="small"
      color="gray"
      weight="medium"
    />

    <!-- Grid of recent showcase projects. -->
    <eb-heading
      :label="view.getText('showcase')"
      size="small"
      color="gray"
      weight="medium"
    />

    <!-- List of recent user projects, if a user is logged in. -->
    <eb-heading
      :label="view.getText('recent-projects')"
      size="small"
      color="gray"
      weight="medium"
    />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>