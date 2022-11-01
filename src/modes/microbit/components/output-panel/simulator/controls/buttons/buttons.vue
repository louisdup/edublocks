<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
  >
    <eb-v-stack :spacing="2">
      <eb-heading
        :label="component.getText('buttons')"
        color="gray"
        size="sm"
        weight="medium"
      />

      <eb-h-stack
        :spacing="4"
        align-y="center"
      >
        <eb-heading
          v-if="advanced"
          :label="component.getText('press')"
          color="lightGray"
          size="sm"
          weight="medium"
        />

        <eb-button
          :label="component.getText('a')"
          size="xs"
          @click="component.onButtonClicked('A')"
        />

        <eb-button
          :label="component.getText('b')"
          size="xs"
          @click="component.onButtonClicked('B')"
        />
      </eb-h-stack>
    </eb-v-stack>

    <eb-h-stack
      v-if="advanced"
      :spacing="4"
      align-y="center"
    >
      <eb-heading
        :label="component.getText('hold')"
        color="lightGray"
        size="sm"
        weight="medium"
      />

      <eb-h-stack :spacing="2">
        <eb-toggle v-model="component.state.data['hold_a']" />

        <eb-toggle v-model="component.state.data['hold_b']" />
      </eb-h-stack>
    </eb-h-stack>
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./buttons-model";

defineProps<{
	advanced: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>