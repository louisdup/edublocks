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
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../home-model";
</script>