<template>
  <mobile-layout>
    <!-- Title bar for projects page. -->
    <eb-heading :label="view.getPageTitle()" />
    <!--  -->
  </mobile-layout>
</template>

<script setup lang="ts">
import { view } from "../projects-model";
</script>