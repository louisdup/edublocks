<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('join-classroom')"
      :icon="['far', 'user-plus']"
      icon-color="blue"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-v-stack
        is-full-width
        :spacing="6"
      >
        <eb-heading
          :label="modal.getText('ask-teacher-for-code')"
          size="md"
          weight="medium"
          color="lightGray"
          align="center"
        />
        <eb-input
          v-model="modal.state.data['code']"
          :label="modal.getText('code')"
          :error="modal.state.errors['code']"
          type="text"
          required
          @input="modal.validateField('code')"
        />
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />
      <eb-button
        :label="modal.getText('join')"
        color="blue"
        :is-disabled="modal.isJoinButtonDisabled()"
        :is-loading="modal.isJoinButtonLoading()"
        @click="modal.onJoinClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { modal } from "./join-classroom-model";

onMounted(() => {
	modal.init();
});
</script>