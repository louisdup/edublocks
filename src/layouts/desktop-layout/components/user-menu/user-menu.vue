<template>
  <eb-dropdown
    v-if="component.isUserLoggedIn()"
    :options="component.getDropdownOptions()"
    placement="right-end"
    class="w-full"
  >
    <button class="w-full flex items-center text-left p-3 space-x-3 rounded-lg hover:bg-gray-100 focus:bg-gray-100 transition-all">
      <img
        :src="component.getCurrentUserProfilePicture()"
        class="h-8 rounded-full"
      >
      <div v-if="!minimize">
        <h1 class="text-gray-900 text-sm font-medium">
          {{ component.getCurrentUserDisplayName() }}
        </h1>
        <p class="text-gray-500 text-xs">
          {{ component.getText('my-account') }}
        </p>
      </div>
    </button>
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