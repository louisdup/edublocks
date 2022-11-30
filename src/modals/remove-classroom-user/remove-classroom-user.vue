<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('remove-user')"
      :icon="['far', 'ban']"
      icon-color="red"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getText('are-you-sure-you-want-to-remove') }}
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('remove')"
        color="red"
        :is-loading="modal.isRemoveButtonLoading()"
        @click="modal.onRemoveButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { modal } from "./remove-classroom-user-model";
  
const props: Data = defineProps<{
	classroomId: string;
	userId: string;
}>();

modal.init(props);
</script>