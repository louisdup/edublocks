<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getTitle()"
      align="left"
      size="lg"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-h-stack
        v-if="modal.state.currentStep === 0"
        align-x="center"
        is-full-width
      >
        <img
          src="/images/modes/microbit/connect-cable.gif"
          class="h-64"
        >
      </eb-h-stack>

      <eb-v-stack
        v-if="modal.state.currentStep === 1"
        :spacing="4"
      >
        <eb-h-stack
          align-x="center"
          is-full-width
        >
          <img
            src="/images/modes/microbit/select-microbit.png"
            class="h-64 rounded-lg border border-gray-200"
          >
        </eb-h-stack>

        <eb-heading
          :label="modal.getText('select-microbit-from-list')"
          size="md"
          color="lightGray"
          align="center"
          weight="medium"
        />
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('back')"
        :is-disabled="modal.isBackButtonDisabled()"
        color="white"
        @click="modal.onBackButtonClicked()"
      />
      <eb-button
        :label="modal.getText('next')"
        color="blue"
        @click="modal.onNextButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { modal } from "./connect-microbit-model";

onMounted(() => {
	modal.init();
});
</script>