<template>
  <div class="absolute z-[100] w-full top-2 flex items-center justify-center pointer-events-none">
    <transition
      enter-active-class="transform transition ease-in-out duration-300"
      enter-from-class="-translate-y-full"
      enter-to-class="-translate-y-0"
      leave-active-class="transform transition ease-in-out duration-300"
      leave-from-class="-translate-y-0"
      leave-to-class="-translate-y-full"
    >
      <div
        v-if="content"
        class="bg-white rounded-full flex items-center text-sm px-4 h-11 space-x-4 font-medium text-gray-700 drop-shadow-[0_0px_8px_rgba(0,0,0,0.1)] border border-gray-200"
      >
        <eb-icon
          v-if="content.icon"
          :icon="content.icon"
          :color="content.iconColor"
          size="xl"
        />

        <svg
          v-if="content.isLoading"
          class="animate-spin h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>

        <span>{{ content.label }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { EbToastNotificationContent } from "./eb-toast-notification-types";

defineProps<{
	content: EbToastNotificationContent
}>();
</script>