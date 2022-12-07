<template>
  <div :class="component.variants({ color })">
    <img
      :src="thumbnail"
      class="h-40 w-auto rounded-md"
    >

    <div class="space-y-4">
      <div>
        <eb-heading
          :label="title"
          color="white"
          weight="bold"
        />

        <eb-heading
          v-if="subtitle"
          :label="subtitle"
          color="white"
          weight="bold"
          class="opacity-70"
        />
      </div>
      
      <eb-heading
        :label="description"
        color="white"
        size="base"
        weight="normal"
      />

      <eb-button
        v-if="buttonLabel"
        :label="buttonLabel"
        size="xs"
        color="white"
        @click="$emit('buttonClick')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./eb-banner-model";

defineProps<{
	thumbnail: string;
	title: string;
	subtitle?: string;
	description: string;
	buttonLabel?: string;
	color?: string;
}>();

defineEmits(["buttonClick"]);
</script>