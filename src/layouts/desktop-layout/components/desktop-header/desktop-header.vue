<template>
  <div class="h-16 w-full bg-white border-b border-gray-200 flex-none flex items-center pl-2 pr-4 justify-between">
    <div class="flex items-center space-x-2">
      <eb-icon-button
        :icon="['far', 'bars']"
        size="lg"
        color="darkGray"
      />
      <img
        :src="component.getLogoPath()"
        class="h-8"
      >
    </div>

    <eb-button
      :label="component.getText('new')"
      :icon="['fas', 'plus']"
      size="sm"
      color="blue"
      @click="component.onNewClicked()"
    />
  </div>
</template>

<script setup lang="ts">
import { component } from "./desktop-header-model";
</script>