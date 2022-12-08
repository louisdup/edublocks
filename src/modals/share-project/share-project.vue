<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('share-project')"
      :icon="['far', 'share']"
      icon-color="blue"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <!-- Share Link -->
      <eb-v-stack
        is-full-width
        :spacing="6"
        :padding-t="2"
      >
        <eb-h-stack
          v-if="modal.isCopyLinkVisible()"
          :spacing="4"
        >
          <eb-input
            v-model="modal.state.data['link']"
            type="text"
            is-disabled
          />
          <eb-button
            :label="modal.getCopyButtonText()"
            :icon="modal.getCopyButtonIcon()"
            :color="modal.getCopyButtonColor()"
            size="sm"
            @click="modal.onCopyClicked()"
          />
        </eb-h-stack>

        <!-- Access Settings -->
        <eb-radio-group
          v-if="modal.isAccessInputVisible()"
          v-model="modal.state.data['access']"
          :label="modal.getText('access')"
          :options="modal.getAccessOptions()"
        />

        <!-- External Share Options -->
        <eb-v-stack
          is-full-width
          :spacing="2"
        >
          <eb-heading
            :label="modal.getText('share')"
            size="sm"
            color="lightGray"
            weight="medium"
          />

          <eb-slider :spacing="4">
            <template
              v-for="option in modal.getShareOptions()"
              :key="option.title"
            >
              <eb-slider-slide v-if="option.visible !== false">
                <eb-chip
                  :title="option.title"
                  :subtitle="option.subtitle"
                  :icon="option.icon"
                  :thumbnail="option.thumbnail"
                  @click="option.action()"
                />
              </eb-slider-slide>
            </template>
          </eb-slider>
        </eb-v-stack>
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('close')"
        color="white"
        @click="modal.onCloseClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { onMounted } from "vue";
import { modal } from "./share-project-model";
  
const props: Data = defineProps<{
	project?: FirestoreProjectModel;
}>();

onMounted(() => {
	modal.init(props);
});
</script>