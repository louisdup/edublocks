<template>
  <eb-v-stack :spacing="4">
    <eb-v-stack :spacing="2">
      <eb-heading
        :label="component.getText('accelerometer')"
        color="gray"
        size="sm"
        weight="medium"
      />
    
      <eb-h-stack spacing="4">
        <eb-select
          v-model="component.state.data['gesture']"
          :options="component.getGestureOptions()"
          required
        />
        <eb-button
          :label="component.getText('send')"
          size="sm"
          @click="component.onSendClicked()"
        />
      </eb-h-stack>
    </eb-v-stack>

    <eb-range
      v-if="advanced"
      v-model="component.state.data['x']"
      :label="component.getText('x')"
      minimum="-2000"
      maximum="2000"
    />

    <eb-range
      v-if="advanced"
      v-model="component.state.data['y']"
      :label="component.getText('y')"
      minimum="-2000"
      maximum="2000"
    />

    <eb-range
      v-if="advanced"
      v-model="component.state.data['z']"
      :label="component.getText('z')"
      minimum="-2000"
      maximum="2000"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./accelerometer-model";

defineProps<{
	advanced: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>