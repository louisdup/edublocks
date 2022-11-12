<template>
  <div>
    <!-- Overlay -->
    <div
      class="absolute inset-0 h-screen w-screen bg-gray-900/40 z-[100]"
      @click="$emit('close')"
    />

    <!-- Modal -->
    <div class="absolute inset-0 h-screen w-screen p-10 flex items-center justify-center z-[110] pointer-events-none">
      <div class="max-h-full flex flex-col max-w-2xl w-full bg-white rounded-md pointer-events-auto overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(["close"]);
</script>