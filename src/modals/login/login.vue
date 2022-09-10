<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('sign-into-account')"
      :icon="['far', 'arrow-right-to-arc']"
      icon-color="pink"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <form class="w-full max-w-sm mx-auto space-y-5">
        <eb-input
          v-model="modal.state.data['email']"
          :label="modal.getText('email-address')"
          :error="modal.state.errors['email']"
          type="email"
          required
          @input="modal.validateField('email')"
        />

        <eb-input
          v-model="modal.state.data['password']"
          :label="modal.getText('password')"
          :error="modal.state.errors['password']"
          type="password"
          required
          @input="modal.validateField('password')"
        />

        <div class="grid grid-cols-3 gap-4">
          <eb-button
            v-for="provider in modal.getSocialAuthProviders()"
            :key="provider.name"
            :icon="provider.icon"
            color="white"
            icon-color="gray"
            @click.prevent="modal.onSocialAuthProviderClicked(provider)"
          />
        </div>
      </form>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />
      <eb-button
        :label="modal.getText('login')"
        color="pink"
        :is-disabled="modal.isLoginButtonDisabled()"
        :is-loading="modal.isLoginButtonLoading()"
        @click="modal.onLoginClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { modal } from "./login-model";
</script>