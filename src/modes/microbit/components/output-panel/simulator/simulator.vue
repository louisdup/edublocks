<template>
  <eb-v-stack
    is-full-height
    is-full-width
    :spacing="6"
    overflow="hidden"
  >
    <!-- micro:bit Simulator -->
    <iframe
      id="simulator"
      :src="component.getSimulatorUrl()"
      scrolling="no"
      frameborder="0"
      sandbox="allow-scripts allow-same-origin"
      class="w-full max-w-xs mx-auto aspect-[191.27/155.77] flex-none"
    />

    <!-- Action Buttons -->
    <eb-v-stack :spacing="4">
      <eb-h-stack
        :spacing="4"
        align-x="center"
      >
        <!-- Stop Button -->
        <eb-button
          :icon="['fas', 'square']"
          color="red"
          size="sm"
          :is-disabled="component.isStopButtonDisabled()"
          @click="component.onStopButtonClicked()"
        />

        <!-- Reset Button -->
        <eb-button
          :icon="['fas', 'repeat']"
          color="white"
          size="sm"
          :is-disabled="component.isResetButtonDisabled()"
          @click="component.onResetButtonClicked()"
        />

        <!-- Mute/Unmute Volume Button -->
        <eb-button
          :icon="component.getVolumeButtonIcon()"
          color="white"
          size="sm"
          @click="component.onVolumeButtonClicked()"
        />
      </eb-h-stack>

      <!-- Advanced Controls Toggle -->
      <eb-h-stack align-x="center">
        <eb-toggle
          v-model="component.state.data['advanced']"
          :label="component.getText('advanced')"
        />
      </eb-h-stack>
    </eb-v-stack>
    
    <!-- Controls -->
    <eb-v-stack
      :spacing="6"
      :padding-l="4"
      :padding-r="4"
      :padding-b="2"
      is-full-height
      overflow="auto"
      class="divide-y divide-gray-200"
    >
      <accelerometer :advanced="component.isAdvancedModeEnabled()" />
      <light-level />
      <temperature />
      <compass :advanced="component.isAdvancedModeEnabled()" />
      <sound-level />
      <buttons :advanced="component.isAdvancedModeEnabled()" />
      <pins :advanced="component.isAdvancedModeEnabled()" />
    </eb-v-stack>
  </eb-v-stack>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { component } from "./simulator-model";

// Import simulator sensor controls
import Accelerometer from "./controls/accelerometer/accelerometer.vue";
import LightLevel from "./controls/light-level/light-level.vue";
import Temperature from "./controls/temperature/temperature.vue";
import Compass from "./controls/compass/compass.vue";
import SoundLevel from "./controls/sound-level/sound-level.vue";
import Buttons from "./controls/buttons/buttons.vue";
import Pins from "./controls/pins/pins.vue";

onMounted(() => {
	component.init();
});
</script>