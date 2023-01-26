<template>
  <ul class="space-y-4">
    <li
      v-for="item in items"
      :key="item.key"
      class="flex items-center space-x-4"
    >
      <svg
        class="h-6 w-6 flex-none fill-blue-100 stroke-blue-500 stroke-2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
        />
        <path
          d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
          fill="none"
        />
      </svg>

      <eb-heading
        :label="item.label"
        size="normal"
        weight="normal"
        color="gray"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { EbBulletListItem } from "./eb-bullet-list-types";

defineProps<{
	items: Array<EbBulletListItem>;
}>();
</script>