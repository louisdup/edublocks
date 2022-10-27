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
      <eb-v-stack
        is-full-width
        :spacing="6"
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

        <eb-radio-group
          v-if="modal.isAccessInputVisible()"
          v-model="modal.state.data['access']"
          :label="modal.getText('access')"
          :options="modal.getAccessOptions()"
        />
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