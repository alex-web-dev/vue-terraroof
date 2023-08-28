<template>
  <AppMain>
    <AppContacts />
    <AppCallback id="callback" :submit-modifiers="['border', 'sm-primary']" />
    <AppSocial class="main__social" />
  </AppMain>
</template>

<script setup>
import AppContacts from '@/components/AppContacts.vue';
import AppCallback from '@/components/AppCallback.vue';
import AppSocial from '@/components/AppSocial.vue';
import AppMain from '@/components/AppMain.vue';
</script>

<style lang="less" scoped></style>
