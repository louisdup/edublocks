<template>
  <div class="space-y-4">
    <eb-heading
      :label="label"
      size="normal"
      color="gray"
      weight="medium"
    />

    <splide
      :class="component.variants({ margin })"
      :options="component.getSliderOptions(spacing)"
    >
      <slot />
    </splide>
  </div>
</template>

<script setup lang="ts">
import { Splide } from "@splidejs/vue-splide";
import { component } from "./eb-slider-model";

defineProps<{
	label: string;
	margin?: string;
	spacing?: number;
}>();
</script>

<style>
.splide__arrow:disabled {
    display: none;
}
</style>