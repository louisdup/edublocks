<template>
  <div class="flex items-center space-x-2">
    <template
      v-for="option in options"
      :key="option"
    >
      <button
        v-if="option.visible !== false"
        class="px-3 py-2 font-medium text-sm rounded-md transition-colors"
        :class="component.getOptionActiveClassList(active, option.key)"
        @click="$emit('onTabClicked', option)"
      >
        {{ option.label }}
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-tabs-model";
import { EbTabsOption } from "./eb-tabs-types"; 

defineProps<{
	options: Array<EbTabsOption>;
	active: string;
}>();

defineEmits(["onTabClicked"]);
</script>