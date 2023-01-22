<template>
  <desktop-layout>
    <eb-v-stack
      v-if="view.isShowcaseProjectDetailVisible()"
      :spacing="8"
    >
      <!-- Page Header -->
      <eb-h-stack
        justify-content="between"
        align-y="center"
      >
        <eb-v-stack :spacing="2">
          <!-- Go back to showcase landing page -->
          <eb-link
            :label="view.getText('back')"
            :icon="['far', 'chevron-left']"
            @click="view.onBackButtonClicked()"
          />

          <!-- Project name name -->
          <eb-heading :label="view.getPageTitle()" />
        </eb-v-stack> 
      </eb-h-stack>

      <!-- Embedded Editor -->
      <iframe
        :src="view.getIframeURL()"
        class="h-[35rem] w-full rounded-lg border border-gray-200 shadow-sm"
      />

      <!-- About this project section -->
      <eb-v-stack :spacing="6">
        <eb-heading
          :label="view.getText('about-this-project')"
          size="normal"
          color="gray"
          weight="semibold"
        />

        <!-- Author Details -->
        <eb-list-item
          v-if="view.state.showcaseProjectAuthor"
          :thumbnail="view.state.showcaseProjectAuthor.image"
          :title="view.getText('created-by')"
          :subtitle="view.state.showcaseProjectAuthor.name"
        />

        <!-- Description -->
        <eb-rich-text :content="view.getShowcaseProjectDescription()" />
      </eb-v-stack>
    </eb-v-stack>

    <!-- Project loading screen -->
    <eb-loading v-if="view.isLoadingVisible()" />
  </desktop-layout>
</template>

<script setup lang="ts">
import { view } from "../showcase-project-detail-model";
</script>