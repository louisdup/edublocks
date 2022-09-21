<template>
  <div class="flex items-center space-x-2">
    <template
      v-for="option in options"
      :key="option"
    >
      <eb-button
        v-if="option.visible !== false"
        :label="option.label"
        :color="component.getButtonColor(active, option.key)"
        size="sm"
        @click="$emit('onTabClicked', option)"
      />
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