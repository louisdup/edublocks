<template>
  <div class="space-y-2">
    <eb-heading
      :label="label"
      size="small"
      color="gray"
      weight="semibold"
    />

    <splide
      class="-ml-3"
      :options="component.options"
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
}>();
</script>

<style>
.splide__arrow:disabled {
    display: none;
}
</style>