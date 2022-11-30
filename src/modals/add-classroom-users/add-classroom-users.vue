<template>
  <eb-modal @close="modal.onCloseClicked()">
    <eb-modal-header
      :title="modal.getText('classroom-code')"
      align="left"
      size="lg"
      @close="modal.onCloseClicked()"
    />

    <eb-modal-content>
      <eb-heading
        :label="modal.getClassroomCode()"
        color="gray"
        size="8xl"
        align="center"
      />
    </eb-modal-content>

    <eb-modal-footer align="right">
      <eb-button
        :label="modal.getText('close')"
        color="white"
        @click="modal.onCloseClicked()"
      />

      <eb-button
        :label="modal.getCopyButtonText()"
        :icon="modal.getCopyButtonIcon()"
        :color="modal.getCopyButtonColor()"
        @click="modal.onCopyClicked()"
      />
    </eb-modal-footer>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { onMounted } from "vue";
import { modal } from "./add-classroom-users-model";
  
const props: Data = defineProps<{
	classroomId?: string;
}>();

onMounted(() => {
	modal.init(props);
});
</script>