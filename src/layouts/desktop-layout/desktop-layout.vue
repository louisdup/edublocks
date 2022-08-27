<template>
  <div class="h-screen w-screen bg-gray-100 flex flex-col">
    <div class="h-full w-full flex">
      <desktop-nav />
      <div class="h-full w-full overflow-hidden p-10 max-w-7xl mx-auto space-y-6">
        <slot />
      </div>
    </div>
  </div>

  <!-- Modal Dynamic Component -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <component
      :is="state.modal?.modal"
      v-bind="state.modal?.options"
    />
  </transition>
</template>

<script setup lang="ts">
import DesktopNav from "./components/desktop-nav/desktop-nav.vue";
import { state } from "@/data/state";
</script>

<style>
.fade-transition {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>