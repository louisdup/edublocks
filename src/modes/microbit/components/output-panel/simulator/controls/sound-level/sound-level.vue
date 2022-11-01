<template>
  <eb-v-stack :padding-t="4">
    <eb-range
      v-model="component.state.data['sound_level']"
      :label="component.getText('sound-level')"
      minimum="0"
      maximum="255"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./sound-level-model";

onMounted(() => {
	component.init();
});
</script>