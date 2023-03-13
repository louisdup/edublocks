<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
    :padding-b="4"
    :padding-l="4"
    :padding-r="4"
  >
    <eb-h-stack
      is-full-width
      align-y="center"
      justify-content="between"
    >
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
      color="lightGray"
      weight="medium"
    />

    <eb-button
      :label="component.getText('code')"
      size="sm"
      color="white"
      is-full-width
      @click="component.exportCode()"
    />

    <eb-button
      :label="component.getText('project')"
      size="sm"
      color="white"
      is-full-width
      @click="component.exportProject()"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./project-settings-model";

onMounted(() => {
	component.init();
});
</script>