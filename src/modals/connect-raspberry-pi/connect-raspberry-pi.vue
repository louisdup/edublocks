<template>
  <eb-modal>
    <eb-modal-header
      :title="modal.getText('connect-to-raspberry-pi')"
      :icon="['fab', 'raspberry-pi']"
      icon-color="red"
      align="center"
      is-close-hidden
    />

    <eb-modal-content>
      <eb-v-stack
        is-full-width
        :spacing="6"
      >
        <eb-heading
          :label="modal.getText('please-enter-ip')"
          size="md"
          color="lightGray"
          align="center"
          weight="medium"
        />

        <eb-input
          v-model="modal.state.data['ip_address']"
          :error="modal.state.errors['ip_address']"
          type="text"
          placeholder="e.g. 192.168.0.125"
          required
          class="max-w-xs mx-auto"
          @input="modal.validateField('ip_address')"
        />
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer>
      <eb-button
        :label="modal.getText('setup-guide')"
        color="white"
        class="mr-auto"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCancelButtonClicked()"
      />

      <eb-button
        :label="modal.getText('connect')"
        color="blue"
        :is-disabled="modal.isConnectButtonDisabled()"
        :is-loading="modal.isConnectButtonLoading()"
        @click="modal.onConnectButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { modal } from "./connect-raspberry-pi-model";

onMounted(() => {
	modal.init();
});
</script>