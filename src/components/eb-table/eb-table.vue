<template>
  <div class="space-y-5">
    <eb-heading
      v-if="label"
      :label="label"
      size="small"
      color="gray"
      weight="medium"
    />

    <div class="w-full">
      <table class="w-[calc(100%+0.75rem)] -ml-3">
        <thead>
          <tr>
            <th
              v-for="header in headers"
              :key="header.label"
              class="pb-3.5 pl-4 pr-3 text-left text-sm font-medium text-gray-500 sm:pl-6 md:pl-0"
            >
              <span
                v-if="!header.hidden"
                class="px-3"
              >
                {{ header.label }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <slot />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EbTableHeader } from "./eb-table-types";

defineProps<{
	label?: string;
	headers: Array<EbTableHeader>;
}>();
</script>