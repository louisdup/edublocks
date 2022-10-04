<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('something-went-wrong')"
      :icon="['far', 'times']"
      icon-color="red"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getText('problem-processing-request') }}
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('close')"
        color="white"
        @click="modal.onCloseClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { modal } from "./error-model";

defineProps<{
	error: Error;
}>();
</script>