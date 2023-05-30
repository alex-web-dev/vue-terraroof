<template>
  <TheHeader />

  <router-view></router-view>

  <TheFooter />

  <Teleport to="body">
    <Transition name="fade">
      <ModalCallback
        :open="storeModals.getStatus('callback')"
        @close="storeModals.close('callback')"
      />
    </Transition>
  </Teleport>

  <Teleport to="body">
    <Transition name="fade">
      <ModalTime :open="storeModals.getStatus('time')" @close="storeModals.close('time')" />
    </Transition>
  </Teleport>

  <CallbackBox link="https://www.whatsapp.com/" />
</template>

<script setup>
import CallbackBox from '@/components/CallbackBox.vue';
import ModalCallback from '@/components/ModalCallback.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import ModalTime from '@/components/ModalTime.vue';
import { useModals } from '@/stores/modals';

const storeModals = useModals();
</script>
