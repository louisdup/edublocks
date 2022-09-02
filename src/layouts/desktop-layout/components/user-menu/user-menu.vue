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
      class="hover:bg-opacity-10"
    />
  </eb-dropdown>

  <button
    v-else
    class="flex items-center space-x-4 rounded-md p-4 text-left text-gray-200 outline-none focus:ring-2 focus:ring-navy-400 focus:ring-offset-2 focus:ring-offset-navy-500 cursor-pointer hover:bg-white/10 focus:bg-white/10 transition-all"
    @click="component.onLoginClicked()"
  >
    <div class="flex h-5 w-5 items-center justify-center">
      <eb-icon
        :icon="['far', 'arrow-right-to-arc']"
        class="fa-fw text-xl"
        color="white"
      />
    </div>
    <span class="w-44 text-sm font-medium"> 
      {{ component.getText("login") }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { component } from "./user-menu-model";

defineProps<{
	minimize: boolean;
}>();
</script>