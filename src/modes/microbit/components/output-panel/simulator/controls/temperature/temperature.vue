<template>
  <eb-v-stack :padding-t="4">
    <eb-range
      v-model="component.state.data['temperature']"
      :label="component.getText('temperature')"
      :unit="component.getText('degrees-celcius')"
      minimum="-5"
      maximum="50"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./temperature-model";

onMounted(() => {
	component.init();
});
</script>