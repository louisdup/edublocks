<template>
  <div class="h-screen w-screen bg-gray-100 flex flex-col overflow-hidden">
    <desktop-header @on-menu-button-clicked="view.onMenuButtonClicked()" />
    
    <div class="h-full w-full flex overflow-hidden">
      <desktop-nav :minimize="view.state.isNavMinimized" />
      <div
        class="relative h-full w-full flex flex-col overflow-y-auto"
        @scroll="$emit('scroll', $event)"
      >
        <div class="w-full p-10 max-w-5xl mx-auto space-y-8">
          <slot />
        </div>
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
import DesktopHeader from "./components/desktop-header/desktop-header.vue";

import { view } from "./desktop-layout-model";
import { state } from "@/data/state";

defineEmits(["scroll"]);
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