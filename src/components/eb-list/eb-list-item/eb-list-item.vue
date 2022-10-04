<template>
  <component
    :is="component.getComponentName(isButton)"
    :class="component.variants({ isButton, isFullWidth })"
  >
    <div class="flex items-center space-x-4">
      <div class="flex items-center justify-center w-8 h-9">
        <img
          v-if="thumbnail"
          :src="thumbnail"
          class=""
          :class="roundedThumbnail ? 'rounded-full' : ''"
        >
      </div>
      <div
        v-if="leftTitle || leftSubtitle"
        class="text-sm"
      >
        <h1 :class="component.titleVariants({ color })">
          {{ leftTitle }}
        </h1>
        <p :class="component.subtitleVariants({ color })">
          {{ leftSubtitle }}
        </p>
      </div>
    </div>
    <div
      v-if="rightTitle || rightSubtitle"
      class="text-sm text-right"
    >
      <h1 :class="component.titleVariants({ color })">
        {{ rightTitle }}
      </h1>
      <p :class="component.subtitleVariants({ color })">
        {{ rightSubtitle }}
      </p>
    </div>
  </component>
</template>

<script setup lang="ts">
import { component } from "./eb-list-item-model";

defineProps<{
	leftTitle: string;
	leftSubtitle: string;
	color?: string;
	thumbnail?: string;
	roundedThumbnail?: boolean;
	rightTitle?: string;
	rightSubtitle?: string;
	isButton?: boolean;
	isFullWidth?: boolean;
	hasBackground?: boolean;
}>();
</script>