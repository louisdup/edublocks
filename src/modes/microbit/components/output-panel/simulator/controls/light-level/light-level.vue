<template>
  <eb-v-stack :padding-t="4">
    <eb-range
      v-model="component.state.data['light_level']"
      :label="component.getText('light-level')"
      minimum="0"
      maximum="255"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./light-level-model";

onMounted(() => {
	component.init();
});
</script>