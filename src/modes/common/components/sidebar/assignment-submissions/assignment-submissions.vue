<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
    :padding-b="4"
    :padding-l="4"
    :padding-r="4"
    class="divide-y divide-gray-200"
  >
    <eb-v-stack>
      <eb-h-stack
        is-full-width
        align-y="center"
        justify-content="between"
      >
        <eb-heading
          :label="component.getTitle()"
          size="lg"
        />

        <eb-link
          :label="component.getText('back')"
          :icon="['far', 'chevron-left']"
          @click="component.onBackButtonClicked()"
        />
      </eb-h-stack>

      <eb-heading
        :label="component.getAssignmentName()"
        size="sm"
        color="gray"
        weight="medium"
      />
    </eb-v-stack>

    <!-- Select Submission to view  -->
    <eb-v-stack :padding-t="4">
      <eb-select
        v-model="component.state.data['submission']"
        :label="component.getText('select-submission')"
        :is-loading="component.isAssignmentSubmissionsSelectInputLoading()"
        :options="component.getAssignmentSubmissions()"
        @input="component.onAssignmentSubmissionSelectInput()"
      />
    </eb-v-stack>

    <!-- Teacher Feedback Section -->
    <eb-v-stack
      :padding-t="4"
      :spacing="4"
    >
      <eb-list-item
        :title="component.getCurrentAssignmentSubmissionTitle()"
        :subtitle="component.getCurrentAssignmentSubmissionSubtitle()"
        :thumbnail="component.getCurrentAssignmentSubmissionThumbnail()"
      />

      <eb-v-stack
        v-if="component.isCurrentAssignmentSubmissionMarkingSectionVisible()"
        :spacing="4"
      >
        <eb-toggle
          v-model="component.state.data['marked']"
          :label="component.getText('marked')"
        />
      
        <eb-text-editor
          v-model="component.state.data['feedback']"
          :label="component.getText('feedback')"
          :height="300"
        />

        <eb-button
          :label="component.getText('save')"
          size="xs"
          is-full-width
          :is-loading="component.isSaveButtonLoading()"
          :is-disabled="component.isSaveButtonDisabled()"
          @click="component.onSaveButtonClicked()"
        />
      
        <eb-button
          :label="component.getText('unsubmit-hand-back')"
          size="xs"
          color="white"
          is-full-width
          @click="component.onUnsubmitButtonClicked()"
        />
      </eb-v-stack>
    </eb-v-stack>
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./assignment-submissions-model";

onMounted(() => {
	component.init();
});
</script>