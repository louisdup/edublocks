<template>
  <eb-modal>
    <eb-modal-header
      :title="title"
      :icon="['far', 'hourglass-start']"
      icon-color="blue"
      align="center"
      :show-close-button="false"
    />

    <eb-modal-content>
      <eb-progress :value="progress" />
    </eb-modal-content>
  </eb-modal>
</template>

<script setup lang="ts">
import { Data } from "@/components/types";
import { onMounted } from "vue";
import { modal } from "./progress-model";

const props: Data = defineProps<{
	title: string;
	progress: number;
}>();

onMounted(() => {
	modal.init(props);
});
</script>