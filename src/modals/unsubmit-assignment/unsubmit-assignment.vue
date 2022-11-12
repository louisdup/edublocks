<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getModalTitle()"
      :icon="['far', 'rotate-left']"
      icon-color="blue"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getModalContent() }}
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('unsubmit')"
        color="blue"
        :is-loading="modal.isUnsubmitButtonLoading()"
        @click="modal.onUnsubmitButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { modal } from "./unsubmit-assignment-model";
  
const props: Data = defineProps<{
	classroomId: string;
	assignmentId: string;
	submissionId: string;
	isCurrentUserAdmin: boolean;
}>();

modal.init(props);
</script>