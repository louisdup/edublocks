<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
    :padding-b="4"
    :padding-l="4"
    :padding-r="4"
    overflow="auto"
  >
    <eb-heading
      :label="component.getTitle()"
      size="lg"
    />

    <eb-v-stack :spacing="2">
      <eb-heading
        :label="component.getText('import-from-github')"
        size="sm"
        color="lightGray"
        weight="medium"
      />

      <eb-h-stack
        :spacing="4"
        align-y="top"
      >
        <eb-input
          v-model="component.state.data['url']"
          :error="component.state.errors['url']"
          type="url"
          placeholder="URL"
          @input="component.validateField('url')"
        />

        <eb-button
          :label="component.getText('import')"
          :is-disabled="component.isImportButtonDisabled()"
          :is-loading="component.isImportButtonLoading()"
          size="sm"
          @click="component.onImportButtonClicked()"
        />
      </eb-h-stack>
    </eb-v-stack>

    <eb-v-stack :spacing="2">
      <eb-heading
        :label="component.getText('approved-extensions')"
        size="sm"
        color="lightGray"
        weight="medium"
      />

      <eb-empty-state
        v-if="component.isEmptyStateVisible()"
        :title="component.getText('no-extensions-found')"
        background-color="lightGray"
      />

      <eb-card
        v-for="card in 5"
        v-if="component.state.isLoadingApprovedExtensions"
        :key="card"
        :is-loading="true"
      />

      <eb-card 
        v-for="extension in component.getFilteredApprovedExtensions()"
        v-else
        :key="extension.id"
        :title="extension.name"
        :description="extension.author"
        :image="extension.image"
        class="-m-3"
        @click="component.onApprovedExtensionClicked(extension)"
      />
    </eb-v-stack>
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./extensions-model";

onMounted(() => {
	component.init();
});
</script>