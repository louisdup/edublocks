<template>
  <div class="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
    <mobile-header :title="title" />
    <div
      class="h-full w-full p-4 space-y-5 overflow-y-auto"
      @scroll="$emit('scroll', $event)"
    >
      <slot />
    </div>
    <mobile-nav />
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
import MobileNav from "./components/mobile-nav/mobile-nav.vue";
import MobileHeader from "./components/mobile-header/mobile-header.vue";

import { state } from "@/data/state";

defineProps<{
	title?: string;
}>();

defineEmits(["scroll"]);
</script>