<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('submit-assignment')"
      :icon="['far', 'check']"
      icon-color="blue"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getText('changes-no-longer-allowed') }}
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('submit')"
        color="blue"
        :is-loading="modal.isSubmitButtonLoading()"
        @click="modal.onSubmitButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { modal } from "./submit-assignment-model";
  
const props: Data = defineProps<{
	classroomId: string;
	assignmentId: string;
	submissionId: string;
}>();

modal.init(props);
</script>