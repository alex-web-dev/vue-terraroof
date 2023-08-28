<template>
  <AppMain class="main--about">
    <AppAbout />
    <AppPartners class="main__section" subtitle="Бренды, представленные в TerraRoof:" :images="partnersImages" paginationType="red" />
    <AppSteps class="main__steps" />
    <AppServices />
    <AppTeam class="main__section main__section--mt-82" />
  </AppMain>
</template>

<script setup>
import AppAbout from '@/components/AppAbout.vue';
import AppPartners from '@/components/AppPartners.vue';
import AppSteps from '@/components/AppSteps.vue';
import AppMain from '@/components/AppMain.vue';
import AppServices from '@/components/AppServices.vue';
import AppTeam from '@/components/AppTeam.vue';
import { reactive } from 'vue';

const partnersImages = reactive([
  'brands/corotop.png',
  'brands/ssab.png',
  'brands/kme.png',
  'brands/roben.png',
  'brands/velux.png',
  'brands/braas.png'
]);
</script>