<template>
  <eb-v-stack
    :spacing="6"
    is-full-height
    class="relative"
    overflow="hidden"
  >
    <!-- Assignment Name -->
    <eb-v-stack
      :padding-t="2"
      :padding-l="4"
      :padding-r="4"
    >
      <eb-list-item
        :title="component.getAssignmentName()"
        :subtitle="component.getAssignmentDueDate()"
        :icon="['far', 'books']"
        icon-color="gray"
      />
    </eb-v-stack>

    <!-- Assignment Description -->
    <div
      class="h-full w-full p-4 bg-gray-100 rounded-md prose overflow-y-auto"
      v-html="component.state.assignment?.description"
    />

    <!-- Loading Screen -->
    <eb-loading
      v-if="component.isLoadingVisible()"
      background-color="white"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./assignment-model";

onMounted(() => {
	component.init();
});
</script>