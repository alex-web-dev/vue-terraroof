<template>
  <AppMain>
    <AppCatalog />
    <AppCallback id="callback" :submit-modifiers="['border', 'sm-primary']" />
  </AppMain>
</template>

<script setup>
import AppCatalog from '@/components/AppCatalog.vue';
import AppCallback from '@/components/AppCallback.vue';
import AppMain from '@/components/AppMain.vue';
</script>

<style lang="less" scoped></style>
