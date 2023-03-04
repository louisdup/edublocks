<template>
  <eb-loading
    background-color="white"
    :title="view.getText('upgrading-account')"
    :subtitle="view.getText('were-upgrading-your-account')"
  />
</template>

<script setup lang="ts">
import { view } from "../user-upgrade-model";
</script>