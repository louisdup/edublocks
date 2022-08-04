<template>
  <font-awesome-icon :icon="icon" />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import type { Data } from "@/components/types";

const props: Data = defineProps<{
	icon: Array<string>
}>();
</script>