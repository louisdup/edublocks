<template>
  <!-- Joining classroom loading screen -->
  <eb-loading
    v-if="view.isLoadingVisible()"
    background-color="white"
  />

  <!-- Can't join classroom empty state -->
  <eb-empty-state
    v-if="view.isCantJoinEmptyStateVisible()"
    :title="view.getText('cant-join-classroom')"
    :subtitle="view.getText('you-are-already-a-member')"
    :icon="['far', 'ban']"
    is-full-height
    is-full-width
  />
</template>

<script setup lang="ts">
import { view } from "../join-classroom-model";
</script>