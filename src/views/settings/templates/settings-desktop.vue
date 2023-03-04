<template>
  <desktop-layout>
    <!-- Page Title -->
    <eb-heading :label="view.getPageTitle()" />

    <!-- Tabs -->
    <eb-tabs
      :options="view.getTabs()"
      :active="view.state.activeTab"
      page-background="gray"
      @on-tab-clicked="view.onTabClicked($event)"
    />

    <!-- Profile Section -->
    <eb-container v-if="view.isProfileSectionVisible()">
      <eb-heading
        :label="view.getText('profile')"
        size="normal"
        color="gray"
        weight="medium"
      />

      <eb-h-stack :spacing="6">
        <!-- Profile Picture -->
        <eb-list-item :thumbnail="view.getCurrentUserProfilePicture()" />

        <!-- Name -->
        <eb-list-item
          :title="view.getText('name')"
          :subtitle="view.getCurrentUserName()"
        />

        <!-- Email -->
        <eb-list-item
          :title="view.getText('email')"
          :subtitle="view.getCurrentUserEmail()"
        />

        <!-- Joined Date -->
        <eb-list-item
          :title="view.getText('joined')"
          :subtitle="view.getCurrentUserJoinDate()"
        />
      </eb-h-stack>
    </eb-container>

    <!-- Language Section -->
    <eb-container>
      <eb-heading
        :label="view.getText('language')"
        size="normal"
        color="gray"
        weight="medium"
      />

      <eb-h-stack
        :spacing="4"
        align-y="bottom"
      >
        <!-- Change Language Select -->
        <eb-select
          v-model="view.state.data['language']"
          :label="view.getText('change-language')"
          :options="view.getLanguageOptions()"
        />

        <!-- Save Language Changes -->
        <eb-button
          :label="view.getText('save')"
          @click="view.onLanguageSaveButtonClicked()"
        />
      </eb-h-stack>
    </eb-container>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../settings-model";
</script>