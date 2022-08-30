<template>
  <button class="flex items-center space-x-4 justify-between p-4 hover:bg-gray-200 focus:bg-white/10 transition-colors rounded-md cursor-pointer w-full text-left">
    <div class="flex items-center space-x-4">
      <img
        v-if="thumbnail"
        :src="thumbnail"
        class="h-auto w-9"
        :class="roundedThumbnail ? 'rounded-full' : ''"
      >
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
  </button>
</template>

<script setup lang="ts">
import { component } from "./eb-list-item-model";

defineProps<{
	color: string;
	thumbnail: string;
	roundedThumbnail: boolean;
	leftTitle: string;
	rightTitle: string;
	leftSubtitle: string;
	rightSubtitle: string;
}>();
</script>