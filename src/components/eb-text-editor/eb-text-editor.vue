<template>
  <div class="w-full">
    <label
      v-if="label"
      class="block text-sm font-medium text-gray-500 mb-2"
    >
      {{ label }}
      <span
        v-if="required"
        class="ml-1 text-red-500"
      >
        *
      </span>
    </label>
    
    <editor
      v-model="component.state.value"
      :api-key="component.getAPIKey()"
      :init="component.getTextEditorOptions(height)"
    />
  </div>
</template>

<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";
import { onMounted, watchEffect } from "vue";
import { Data } from "../types";
import { component } from "./eb-text-editor-model";

const props: Data = defineProps<{
	label?: string;
	required?: boolean;
	height?: number;
	modelValue: string;
}>();

// eslint-disable-next-line @typescript-eslint/typedef
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
	component.init(props, emit);

	watchEffect(() => {
		if (props.modelValue) {
			component.init(props, emit);
		}
	});
});

</script>