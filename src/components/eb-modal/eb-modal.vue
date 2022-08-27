<template>
  <div>
    <!-- Overlay -->
    <div
      class="absolute inset-0 h-screen w-screen bg-gray-900/40 z-40"
      @click="$emit('close')"
    />

    <!-- Modal -->
    <div class="absolute inset-0 h-screen w-screen flex items-center justify-center z-50 pointer-events-none">
      <div class="max-w-2xl w-full bg-white rounded-md pointer-events-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["close"]);
</script>