<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('create-classroom')"
      :icon="['fas', 'plus']"
      icon-color="blue"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-input
        v-model="modal.state.data['name']"
        :label="modal.getText('classroom-name')"
        :error="modal.state.errors['name']"
        type="text"
        required
        @input="modal.validateField('name')"
      />
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />
      
      <eb-button
        :label="modal.getText('create')"
        color="blue"
        :is-disabled="modal.isCreateButtonDisabled()"
        :is-loading="modal.isCreateButtonLoading()"
        @click="modal.onCreateButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { modal } from "./create-classroom-model";

onMounted(() => {
	modal.init();
});
</script>