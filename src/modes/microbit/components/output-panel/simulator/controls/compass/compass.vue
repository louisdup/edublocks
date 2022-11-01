<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
  >
    <eb-range
      v-model="component.state.data['heading']"
      :label="component.getText('compass-heading')"
      :unit="component.getText('degrees')"
      minimum="0"
      maximum="360"
    />

    <eb-range
      v-if="advanced"
      v-model="component.state.data['x']"
      :label="component.getText('x')"
      :unit="component.getText('nano-teslas')"
      minimum="-2000000"
      maximum="2000000"
    />

    <eb-range
      v-if="advanced"
      v-model="component.state.data['y']"
      :label="component.getText('y')"
      :unit="component.getText('nano-teslas')"
      minimum="-2000000"
      maximum="2000000"
    />

    <eb-range
      v-if="advanced"
      v-model="component.state.data['z']"
      :label="component.getText('z')"
      :unit="component.getText('nano-teslas')"
      minimum="-2000000"
      maximum="2000000"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./compass-model";

defineProps<{
	advanced: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>