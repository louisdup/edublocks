<template>
  <eb-dropdown
    v-if="component.isUserLoggedIn()"
    :options="component.getDropdownOptions()"
    placement="right-end"
    class="w-full"
  >
    <eb-list-item
      v-if="minimize"
      :thumbnail="component.getCurrentUserProfilePicture()"
      rounded-thumbnail
      is-button
      is-full-width
      class="hover:bg-opacity-10"
    />
    <eb-list-item
      v-else
      :left-title="component.getCurrentUserDisplayName()"
      :left-subtitle="component.getText('my-account')"
      :thumbnail="component.getCurrentUserProfilePicture()"
      color="white"
      rounded-thumbnail
      is-button
      is-full-width
      class="hover:bg-opacity-10"
    />
  </eb-dropdown>

  <eb-button
    v-else
    :label="component.getText('login')"
    :icon="['far', 'arrow-right-to-arc']"
    align="left"
    color="transparent"
    is-full-width
    @click="component.onLoginClicked()"
  />
</template>

<script setup lang="ts">
import { component } from "./user-menu-model";

defineProps<{
	minimize: boolean;
}>();
</script>