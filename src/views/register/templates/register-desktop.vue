<template>
  <promo-layout>
    <template #promo>
      <eb-v-stack :spacing="6">
        <img
          :src="view.getLogoPath()"
          class="h-10"
        >

        <eb-heading
          :label="view.getText('unlock-features')"
          size="normal"
          weight="medium"
          color="gray"
        />

        <eb-bullet-list :items="view.getPromoItems()" />
      </eb-v-stack>
    </template>
    <template #content>
      <form v-if="view.showRegisterForm()">
        <eb-v-stack :spacing="6">
          <eb-heading
            :label="view.getText('register')"
            size="3xl"
            weight="semibold"
          />

          <eb-h-stack :spacing="6">
            <eb-button
              :icon="['fab', 'google']"
              color="white"
              icon-color="gray"
              is-full-width
              @click.prevent="view.onGoogleClicked()"
            />

            <eb-button
              :icon="['fab', 'microsoft']"
              color="white"
              icon-color="gray"
              is-full-width
              @click.prevent="view.onMicrosoftClicked()"
            />

            <eb-button
              :icon="['fab', 'apple']"
              color="white"
              icon-color="gray"
              is-full-width
              @click.prevent="view.onAppleClicked()"
            />
          </eb-h-stack>

          <eb-input
            v-model="view.state.data['name']"
            :label="view.getText('name')"
            :error="view.state.errors['name']"
            type="text"
            required
            @input="view.validateField('name')"
          />

          <eb-input
            v-model="view.state.data['email']"
            :label="view.getText('email-address')"
            :error="view.state.errors['email']"
            type="email"
            required
            @input="view.validateField('email')"
          />

          <eb-h-stack :spacing="6">
            <eb-input
              v-model="view.state.data['password']"
              :label="view.getText('password')"
              :error="view.state.errors['password']"
              type="password"
              required
              @input="view.validateField('password')"
            />

            <eb-input
              v-model="view.state.data['confirm_password']"
              :label="view.getText('confirm-password')"
              :error="view.state.errors['confirm_password']"
              type="password"
              required
              @input="view.validateField('confirm_password')"
            />
          </eb-h-stack>

          <eb-button
            :label="view.getText('register-for-free')"
            :is-loading="view.isRegisterButtonLoading()"
            :is-disabled="view.isRegisterButtonDisabled()"
            is-full-width
            @click.prevent="view.onRegisterButtonClicked()"
          />
        </eb-v-stack>
      </form>

      <eb-v-stack
        v-else
        :spacing="6"
      >
        <eb-heading
          :label="view.getText('verify-your-email-address')"
          size="3xl"
          weight="semibold"
        />

        <eb-heading
          :label="view.getVerifyEmailDescriptionText()"
          size="normal"
          weight="normal"
          color="gray"
        />

        <eb-h-stack :spacing="6">
          <eb-button
            :label="view.getText('sign-out')"
            color="white"
            is-full-width
            @click="view.onSignOutButtonClicked()"
          />

          <eb-button
            :label="view.getText('resend-email')"
            :is-loading="view.isRegisterButtonLoading()"
            is-full-width
            @click="view.onResendEmailButtonClicked()"
          />
        </eb-h-stack>
      </eb-v-stack>
    </template>
  </promo-layout>
</template>

<script setup lang="ts">
import { view } from "../register-model";
</script>