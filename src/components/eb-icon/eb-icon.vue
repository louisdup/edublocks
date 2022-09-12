<template>
  <font-awesome-icon
    :icon="icon"
    :class="component.getClassesForIcon(color, backgroundColor)"
  />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { component } from "./eb-icon-model";

defineProps<{
	icon: Array<string>;
	color?: string;
	backgroundColor?: string;
}>();
</script>