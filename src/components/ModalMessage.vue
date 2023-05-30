<template>
  <AppModal type="message" :open="open" @close="emit('close')">
    <template #main>
      <AppMessage />
    </template>
  </AppModal>
</template>

<script setup>
import AppModal from '@/components/AppModal.vue';
import AppMessage from './AppMessage.vue';

defineProps({
  type: {
    type: String,
    default: null
  },
  open: {
    type: Boolean,
    default: false
  }
});
const emit = defineEmits(['close']);
</script>
