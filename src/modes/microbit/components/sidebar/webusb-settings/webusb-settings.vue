<template>
  <eb-heading
    :label="component.getTitle()"
    size="lg"
  />

  <eb-heading
    :label="component.getDeviceName()"
    size="sm"
    color="gray"
    weight="medium"
  />

  <eb-button
    :label="component.getText('disconnect-forget')"
    size="sm"
    color="white"
    is-full-width
    @click="component.onDisconnectForgetButtonClicked()"
  />
</template>

<script setup lang="ts">
import { component } from "./webusb-settings-model";
</script>