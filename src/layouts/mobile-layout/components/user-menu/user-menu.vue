<template>
  <div class="h-full flex items-center">
    <eb-dropdown
      v-if="component.isUserLoggedIn()"
      :options="component.getDropdownOptions()"
      placement="bottom-end"
      class="w-full"
    >
      <img
        :src="component.getCurrentUserProfilePicture()"
        class="h-8 rounded-full"
      >
    </eb-dropdown>

    <eb-button
      v-else
      :icon="['far', 'arrow-right-to-arc']"
      align="left"
      size="xs"
      @click="component.onLoginClicked()"
    />
  </div>
</template>

<script setup lang="ts">
import { component } from "./user-menu-model";
</script>