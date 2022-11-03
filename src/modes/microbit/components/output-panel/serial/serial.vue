<template>
  <eb-terminal
    :data="component.state.data"
    @input="component.onInput($event)"
  />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./serial-model";

onMounted(() => {
	component.init();
});
</script>