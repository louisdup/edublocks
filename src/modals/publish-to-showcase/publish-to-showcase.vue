<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getTitle()"
      align="left"
      size="lg"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-v-stack
        is-full-width
        :spacing="6"
        :padding-t="4"
      >
        <eb-h-stack :spacing="6">
          <eb-input
            v-model="modal.state.data['name']"
            :label="modal.getText('name')"
            :error="modal.state.errors['name']"
            type="text"
            required
            @input="modal.validateField('name')"
          />

          <eb-v-stack
            is-full-width
            :spacing="2"
          >
            <eb-heading
              :label="modal.getText('preview')"
              size="sm"
              color="lightGray"
              weight="medium"
            />

            <eb-card
              :title="modal.state.data['name']"
              :subtitle="modal.getShowcaseProjectPreviewModeName()"
              :thumbnail-color="modal.getShowcaseProjectPreviewThumbnailColor()"
              :thumbnail-icon="modal.getShowcaseProjectPreviewThumbnailIcon()"
              class="-m-3"
            />
          </eb-v-stack>
        </eb-h-stack>

        <eb-text-editor
          v-model="modal.state.data['description']"
          :label="modal.getText('description')"
        />
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getText('publish')"
        color="blue"
        :is-disabled="modal.isPublishButtonDisabled()"
        :is-loading="modal.isPublishButtonLoading()"
        @click="modal.onPublishButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { modal } from "./publish-to-showcase-model";
  
const props: Data = defineProps<{
	project: FirestoreProjectModel;
}>();

modal.init(props);
</script>