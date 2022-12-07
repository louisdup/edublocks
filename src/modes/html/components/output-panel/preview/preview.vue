<template>
  <!-- "Mockup" Browser Window -->
  <div class="h-full w-full overflow-hidden border border-gray-200 rounded-md">
    <!-- Taskbar -->
    <div class="h-10 w-full bg-gray-100 flex items-center px-2.5 space-x-2 border-b border-gray-200 rounded-t-md">
      <div class="h-3 w-3 bg-red-500 rounded-full" />
      <div class="h-3 w-3 bg-yellow-500 rounded-full" />
      <div class="h-3 w-3 bg-green-500 rounded-full" />
    </div>

    <!-- Main Content -->
    <div class="h-full w-full rounded-b-md overflow-y-auto">
      <iframe
        class="h-full w-full rounded-b-md"
        :srcdoc="component.getCurrentProject().value.code"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { component } from "./preview-model";
</script>