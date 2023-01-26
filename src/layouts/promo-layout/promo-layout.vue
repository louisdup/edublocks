<template>
  <div class="h-full w-full flex overflow-y-auto">
    <div class="lg:block hidden h-full w-full max-w-xl bg-[url('/images/backgrounds/promo-background.jpg')] bg-cover bg-no-repeat justify-center p-8">
      <div class="h-full w-full flex items-center justify-center">
        <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-xl ring-1 ring-gray-900/5">
          <slot name="promo" />
        </div>
      </div>
    </div>

    <div class="h-full w-full flex items-center justify-center">
      <div class="w-full max-w-md">
        <slot name="content" />
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
import { state } from "@/data/state";
</script>