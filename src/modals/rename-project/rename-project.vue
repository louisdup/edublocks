<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('rename-project')"
      :icon="['far', 'pencil']"
      icon-color="pink"
      align="center"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-v-stack :spacing="6">
        <p class="w-full max-w-lg text-center mx-auto text-gray-500">
          {{ modal.getText('please-enter-new-name') }} <span class="font-bold">{{ project.name }}</span>
        </p>
        <eb-input
          v-model="modal.state.data['name']"
          :error="modal.state.errors['name']"
          type="text"
          class="w-full max-w-md mx-auto"
          @input="modal.validateField('name')"
        />
      </eb-v-stack>
    </eb-modal-content>

    <eb-modal-footer align="center">
      <eb-button
        :label="modal.getText('cancel')"
        color="white"
        @click="modal.onCloseClicked()"
      />
      <eb-button
        :label="modal.getText('rename-project')"
        color="pink"
        :is-loading="modal.isRenameProjectButtonLoading()"
        :is-disabled="modal.isRenameProjectButtonDisabled()"
        @click="modal.onRenameClicked(project)"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { onMounted } from "vue";
import { modal } from "./rename-project-model";

const props: Data = defineProps<{
	project: FirestoreProjectModel;
}>();

onMounted(() => {
	modal.init(props);
});
</script>