<template>
  <eb-h-stack is-full-width>
    <eb-heading
      :label="component.getTitle()"
      size="lg"
    />

    <eb-button
      v-if="component.isUpdateButtonVisible()"
      :label="component.getText('update')"
      :is-disabled="component.isUpdateButtonDisabled()"
      color="blue"
      size="xs"
      @click="component.onUpdateButtonClicked()"
    />
  </eb-h-stack>

  <eb-input
    v-if="component.isProjectNameInputVisible()"
    v-model="component.state.data['name']"
    :label="component.getText('project-name')"
    :error="component.state.errors['name']"
    type="text"
    @input="component.validateField('name')"
  />

  <eb-heading
    :label="component.getText('export')"
    size="sm"
    color="gray"
  />

  <eb-button
    :label="component.getText('export-code')"
    size="sm"
    color="white"
    is-full-width
    @click="component.exportCode()"
  />

  <eb-button
    :label="component.getText('export-blocks-screenshot')"
    size="sm"
    color="white"
    is-full-width
    @click="component.exportBlocksScreenshot()"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./project-settings-model";

onMounted(() => {
	component.init();
});
</script>