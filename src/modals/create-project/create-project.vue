<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('create-project')"
      :icon="['fas', 'plus']"
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
          is-full-width
          :spacing="6"
        >
          <eb-input
            v-model="modal.state.data['name']"
            :label="modal.getText('project-name')"
            :error="modal.state.errors['name']"
            :placeholder="modal.state.placeholderName"
            type="text"
            required
            @input="modal.validateField('name')"
          />
          <eb-select
            v-model="modal.state.data['mode']"
            :label="modal.getText('mode')"
            :error="modal.state.errors['mode']"
            :options="modal.getModeOptions()"
            required
            @input="modal.validateField('mode')"
          />
        </eb-h-stack>
        
        <eb-radio-group
          v-model="modal.state.data['type']"
          :label="modal.getText('type')"
          :options="modal.getTypeOptions()"
          @input="modal.validateField('type')"
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
        :label="modal.getText('create')"
        color="blue"
        :disabled="modal.isCreateButtonDisabled()"
        @click="modal.onCreateClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { FirestoreProjectModel } from "@/data/models/firestore-project-model";
import { onMounted } from "vue";
import { modal } from "./create-project-model";
  
defineProps<{
	project: FirestoreProjectModel;
}>();

onMounted(() => {
	modal.init();
});
</script>