<template>
  <eb-v-stack
    :spacing="4"
    :padding-t="4"
  >
    <eb-v-stack :spacing="2">
      <eb-heading
        :label="component.getText('pins')"
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
          :label="component.getText('0')"
          size="xs"
          @click="component.onPinButtonClicked('0')"
        />

        <eb-button
          :label="component.getText('1')"
          size="xs"
          @click="component.onPinButtonClicked('1')"
        />

        <eb-button
          :label="component.getText('2')"
          size="xs"
          @click="component.onPinButtonClicked('2')"
        />

        <eb-button
          :label="component.getText('logo')"
          size="xs"
          @click="component.onPinButtonClicked('Logo')"
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
        <eb-toggle v-model="component.state.data['hold_0']" />

        <eb-toggle v-model="component.state.data['hold_1']" />

        <eb-toggle v-model="component.state.data['hold_2']" />

        <eb-toggle v-model="component.state.data['hold_logo']" />
      </eb-h-stack>
    </eb-h-stack>
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./pins-model";

defineProps<{
	advanced: boolean;
}>();

onMounted(() => {
	component.init();
});
</script>