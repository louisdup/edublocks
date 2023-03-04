<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('unpublish-project')"
      :icon="['far', 'rotate-left']"
      icon-color="red"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <p class="w-full text-center text-gray-500">
        {{ modal.getText('unpublish-confirmation') }} <span class="font-bold">{{ project.title }}</span>?
      </p>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('unpublish')"
        :is-loading="modal.isUnpublishButtonLoading()"
        color="red"
        @click="modal.onUnpublishClicked(project)"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { ShowcaseProjectModel } from "@/data/models/showcase-project-model";
import { modal } from "./unpublish-showcase-project-model";

defineProps<{
	project: ShowcaseProjectModel;
}>();
</script>