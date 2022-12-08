<template>
  <desktop-layout>
    <eb-v-stack :spacing="4">
      <eb-heading
        label="🫤"
        align="center"
        size="8xl"
        color="blue"
      />
      
      <eb-heading
        :label="view.getText('sorry-but-we-cant-find')"
        align="center"
        weight="medium"
      />
    </eb-v-stack>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../not-found-model";
</script>