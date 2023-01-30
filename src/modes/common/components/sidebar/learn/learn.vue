<template>
  <eb-v-stack
    v-if="component.isLearnGuidesGridVisible()"
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

    <eb-empty-state
      v-if="component.isEmptyStateVisible()"
      :title="component.getText('no-guides-found')"
      background-color="lightGray"
    />

    <eb-card
      v-for="card in 5"
      v-if="component.state.isLoadingLearnGuides"
      :key="card"
      :is-loading="true"
    />

    <eb-card 
      v-for="guide in component.getFilteredLearnGuides()"
      v-else
      :key="guide.id"
      :title="guide.title"
      :description="guide.summary"
      :image="guide.image"
      class="-m-3"
      @click="component.onLearnGuideClicked(guide)"
    />
  </eb-v-stack>

  <eb-v-stack
    v-else
    is-full-height
  >
    <eb-v-stack
      :spacing="2"
      :padding-t="4"
      :padding-b="4"
      :padding-l="4"
      :padding-r="4"
    >
      <eb-link
        :label="component.getText('back')"
        :icon="['far', 'chevron-left']"
        @click="component.onBackButtonClicked()"
      />

      <eb-heading
        :label="component.getLearnGuideTitle()"
        size="normal"
      />
    </eb-v-stack> 

    <iframe
      :src="component.getLearnGuideUrl()"
      class="h-full w-full bg-gray-100"
      frameborder="0"
    />
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./learn-model";

onMounted(() => {
	component.init();
});
</script>