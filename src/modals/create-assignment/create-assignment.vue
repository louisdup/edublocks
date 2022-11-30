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
        <eb-h-stack
          is-full-width
          :spacing="6"
        >
          <eb-input
            v-model="modal.state.data['name']"
            :label="modal.getText('assignment-name')"
            :error="modal.state.errors['name']"
            type="text"
            required
            @input="modal.validateField('name')"
          />
          
          <eb-input
            v-model="modal.state.data['due']"
            :label="modal.getText('due-date')"
            :error="modal.state.errors['due']"
            type="datetime-local"
            required
            @input="modal.validateField('due')"
          />
        </eb-h-stack>

        <eb-text-editor
          v-model="modal.state.data['description']"
          :label="modal.getText('description')"
        />
        
        <eb-radio-group
          v-if="modal.isProjectTypeInputVisible()"
          v-model="modal.state.data['project_type']"
          :label="modal.getText('starter-project')"
          :options="modal.getStarterProjectOptions()"
          required
          @input="modal.validateField('project_type')"
        />

        <eb-select
          v-if="modal.isExistingProjectInputVisible()"
          v-model="modal.state.data['project']"
          :error="modal.state.errors['project']"
          :options="modal.getExistingProjects()"
          required
          :is-loading="modal.isExistingProjectInputLoading()"
          @input="modal.validateField('project')"
        />

        <eb-select
          v-if="modal.isModeInputVisible()"
          v-model="modal.state.data['mode']"
          :label="modal.getText('mode')"
          :error="modal.state.errors['mode']"
          :options="modal.getModeOptions()"
          required
          @input="modal.validateField('mode')"
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
        v-if="modal.isCreateButtonVisible()"
        :label="modal.getText('create')"
        color="blue"
        :is-disabled="modal.isCreateButtonDisabled()"
        :is-loading="modal.isCreateButtonLoading()"
        @click="modal.onCreateButtonClicked()"
      />

      <eb-button
        v-if="modal.isSaveButtonVisible()"
        :label="modal.getText('save')"
        color="blue"
        :is-disabled="modal.isSaveButtonDisabled()"
        :is-loading="modal.isSaveButtonLoading()"
        @click="modal.onSaveButtonClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { ClassroomAssignmentModel } from "@/data/models/classroom-assignment-model";
import { ClassroomModel } from "@/data/models/classroom-model";
import { modal } from "./create-assignment-model";
  
const props: Data = defineProps<{
	classroom: ClassroomModel;
	assignment?: ClassroomAssignmentModel;
}>();

modal.init(props);
</script>