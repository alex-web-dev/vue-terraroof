<template>
  <main class="main">
    <AppCatalog />
    <AppCallback id="callback" :submit-modifiers="['border', 'sm-primary']" />
  </main>
</template>

<script setup>
import AppCatalog from '@/components/AppCatalog.vue';
import AppCallback from '@/components/AppCallback.vue';
</script>

<style lang="less" scoped></style>
