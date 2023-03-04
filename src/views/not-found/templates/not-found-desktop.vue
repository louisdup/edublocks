<template>
  <desktop-layout>
    <eb-h-stack
      is-full-page-height
      align-x="center"
      align-y="center"
      :spacing="4"
    >
      <eb-v-stack :spacing="4">
        <eb-heading
          label="404"
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
    </eb-h-stack>
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../not-found-model";
</script>