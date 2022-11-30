<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('delete-classroom')"
      :icon="['far', 'trash']"
      icon-color="red"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getText('are-you-sure-you-want-to-delete') }}
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('delete')"
        color="red"
        :is-loading="modal.isDeleteButtonLoading()"
        @click="modal.onDeleteButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { modal } from "./delete-classroom-model";
  
const props: Data = defineProps<{
	classroomId: string;
}>();

modal.init(props);
</script>