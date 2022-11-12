<template>
  <desktop-layout>
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

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