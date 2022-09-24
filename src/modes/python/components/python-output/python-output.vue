<template>
  <div class="h-full w-full rounded-md overflow-hidden">
    <!-- Trinket Output Window -->
    <iframe
      class="relative w-full rounded-md h-[104%] bottom-8 bg-gray-200"
      :src="component.getIframeSrc()"
    />
  </div>
</template>

<script setup lang="ts">
import { component } from "./python-output-model";
</script>