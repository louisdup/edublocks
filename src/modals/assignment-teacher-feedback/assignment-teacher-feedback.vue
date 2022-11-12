<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('teacher-feedback')"
      align="left"
      size="lg"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <div
        v-if="modal.isFeedbackVisible(assignmentSubmission)"
        class="prose"
        v-html="assignmentSubmission.feedback"
      />
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('close')"
        color="white"
        @click="modal.onCloseClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { ClassroomAssignmentSubmissionModel } from "@/data/models/classroom-assignment-submission-model";
import { modal } from "./assignment-teacher-feedback-model";
  
defineProps<{
	assignmentSubmission: ClassroomAssignmentSubmissionModel;
}>();
</script>