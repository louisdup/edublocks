<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('delete-project')"
      :icon="['far', 'trash']"
      icon-color="red"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full max-w-lg text-center mx-auto text-gray-500">
        {{ modal.getText('delete-confirmation') }} <span class="font-bold">{{ project.name }}</span>?
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
        @click="modal.onDeleteClicked(project)"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { modal } from "./delete-project-model";
  
defineProps<{
	project: FirestoreProjectModel;
}>();
</script>